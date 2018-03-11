import {Injectable} from "@angular/core";
import {SpentItem} from "./spent-item.model";
import {MonthStats} from "./month-stats.model";
import * as moment from 'moment';

const Sqlite = require("nativescript-sqlite");

@Injectable()
export class SpentItemService {
    private database: any;

    /**
     * Service constructor - initialize DB and tables.
     */
    constructor() {
        (new Sqlite("mg.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS spent (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, sum NUMERIC, dateAdded VARCHAR, excludeFromSum" +
                " BOOLEAN)").then(id => {
                console.log('DB Init OK.');
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    /**
     * Create new expense item
     * @param {SpentItem} item
     * @returns {Promise<SpentItem>}
     */
    public create(item: SpentItem): Promise<SpentItem> {
        return this.database.execSQL("INSERT INTO spent (title, sum, dateAdded, excludeFromSum) VALUES (?, ?, ?, ?)",
            [item.title, item.sum, moment(item.date).format('YYYY-MM-DD'), item.excludeFromSum])
            .then(id => {
                item.id = id;
                return item;
            }, error => {
                console.log("create ERROR", error);
            });
    }

    /**
     * Update expense item
     * @param {SpentItem} item
     * @returns {Promise<SpentItem>}
     */
    public update(item: SpentItem): Promise<SpentItem> {
        return this.database.execSQL("UPDATE spent SET title=?, sum=?, dateAdded=?, excludeFromSum=? WHERE id=?",
            [item.title, item.sum, moment(item.date).format('YYYY-MM-DD'), item.excludeFromSum, item.id])
            .then(id => {
                return item;
            }, error => {
                console.log("update ERROR", error);
            });
    }

    /**
     * Remove expense item
     * @param {number} id
     * @returns {Promise<null>}
     */
    public delete(id: number): Promise<null> {
        return this.database.execSQL("DELETE FROM spent WHERE id=?", [id])
            .then(() => {
                return null;
            }, error => {
                console.log("delete ERROR", error);
            });
    }

    /**
     * Get individual expense item by its ID
     * @param {number} id unique identifier
     * @returns {Promise<SpentItem>}
     */
    public getById(id: number): Promise<SpentItem> {
        return this.database.get("SELECT * FROM spent WHERE id=?", [id])
            .then(row => {
                return new SpentItem(row[0], row[1], row[2], row[3], row[4]);
            }, error => {
                console.log("getById ERROR", error);
            })
    }

    /**
     * Get monthly grouped items by selected date range
     * @param {Date} startDate
     * @param {Date} endDate
     * @returns {Promise<MonthStats[]>}
     */
    public getByDateRangeGroupedByMonth(startDate:Date, endDate:Date): Promise<MonthStats[]> {
        return this.database.all("SELECT strftime('%m', dateAdded) AS month, strftime('%Y', dateAdded) AS year, " +
            "SUM(CASE WHEN excludeFromSum='false' THEN sum ELSE 0 END) As total, " +
            "COUNT(*) As count" +
            " FROM spent" +
            " WHERE strftime('%Y-%m-%d', dateAdded) BETWEEN ? AND ?" +
            " GROUP BY year, month ORDER BY year, month DESC",
            [moment(startDate).format('YYYY-MM-DD'), moment(endDate).format('YYYY-MM-DD')])
            .then(rows => {
                const items = [];
                for (let row in rows) {
                    items.push(new MonthStats(rows[row][2], rows[row][3], rows[row][0], rows[row][1]));
                }
                return items;
            }, error => {
                console.log("getByDateRangeGroupedByMonth ERROR", error);
            });
    }

    /**
     * Get items by selected date range
     * @param {Date} startDate
     * @param {Date} endDate
     * @param {String} sortCol
     * @param {String} sortDir
     * @returns {Promise<SpentItem[]>}
     */
    public getByDateRange(startDate:Date, endDate:Date, sortCol:String, sortDir:String): Promise<SpentItem[]> {
        return this.database.all("SELECT * FROM spent WHERE strftime('%Y-%m-%d', dateAdded) BETWEEN ? AND ? ORDER BY " + sortCol + ' ' + sortDir,
            [moment(startDate).format('YYYY-MM-DD'), moment(endDate).format('YYYY-MM-DD')])
            .then(rows => {
                const items = [];
                for (let row in rows) {
                    items.push(new SpentItem(rows[row][0], rows[row][1], rows[row][2], rows[row][3], rows[row][4]));
                }
                return items;
            }, error => {
                console.log("getByDateRange ERROR", error);
            });
    }
}