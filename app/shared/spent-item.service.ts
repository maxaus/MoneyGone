import {Injectable} from "@angular/core";
import {SpentItem} from "./spent-item.model";
import {MonthStats} from "./month-stats.model";
import * as moment from 'moment';

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class SpentItemService {
    private database: any;

    constructor() {
        // this.people = [];
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

    public create(item: SpentItem): Promise<SpentItem> {
        return this.database.execSQL("INSERT INTO spent (title, sum, dateAdded, excludeFromSum) VALUES (?, ?, ?, ?)",
            [item.title, item.sum, moment(item.date).format('YYYY-MM-DD'), item.excludeFromSum])
            .then(id => {
                console.log("INSERT RESULT", id);
                item.id = id;
                return item;
            }, error => {
                console.log("INSERT ERROR", error);
            });
    }

    public update(item: SpentItem): Promise<SpentItem> {
        return this.database.execSQL("UPDATE spent SET title=?, sum=?, dateAdded=?, excludeFromSum=? WHERE id=?",
            [item.title, item.sum, item.date, item.excludeFromSum, item.id])
            .then(id => {
                console.log("UPDATE RESULT", id);

                return item;
            }, error => {
                console.log("UPDATE ERROR", error);
            });
    }

    public delete(id: number): Promise<null> {
        return this.database.execSQL("DELETE FROM spent WHERE id=?", [id])
            .then(() => {
                console.log("REMOVED", id);
                return null;
            }, error => {
                console.log("DELETE ERROR", error);
            });
    }

    public getById(id: number): Promise<SpentItem> {
        return this.database.get("SELECT * FROM spent WHERE id=?", [id])
            .then(row => {
                console.log(JSON.stringify(row));
                return new SpentItem(row[0], row[1], row[2], row[3], row[4]);
            }, error => {
                console.log("SELECT ERROR", error);
            })
    }

    public getAll(): Promise<SpentItem[]> {
        return this.database.all("SELECT * FROM spent")
            .then(rows => {
                var items = [];
                for (var row in rows) {
                    items.push(new SpentItem(rows[row][0], rows[row][1], rows[row][2], rows[row][3], rows[row][4]));
                }
                return items;
            }, error => {
                console.log("SELECT ERROR", error);
            });
    }

    public getAllGroupedByMonth(): Promise<MonthStats[]> {
        return this.database.all("SELECT strftime('%m', dateAdded) AS month, strftime('%Y', dateAdded) AS year, SUM(sum) As total" +
            " FROM spent" +
            " GROUP BY year, month ORDER BY year, month DESC")
            .then(rows => {
                var items = [];
                for (var row in rows) {
                    items.push(new MonthStats(rows[row][2], rows[row][0], rows[row][1]));
                }
                return items;
            }, error => {
                console.log("SELECT ERROR", error);
            });
    }

    public getByDateRange(startDate:Date, endDate:Date): Promise<SpentItem[]> {
        console.log('getByDateRange', startDate, endDate);
        return this.database.all("SELECT * FROM spent WHERE strftime('%Y-%m-%d', dateAdded) BETWEEN ? AND ?",
            [moment(startDate).format('YYYY-MM-DD'), moment(endDate).format('YYYY-MM-DD')])
            .then(rows => {
                var items = [];
                for (var row in rows) {
                    items.push(new SpentItem(rows[row][0], rows[row][1], rows[row][2], rows[row][3], rows[row][4]));
                }
                return items;
            }, error => {
                console.log("SELECT ERROR", error);
            });
    }
}