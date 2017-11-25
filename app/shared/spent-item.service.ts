import {Injectable} from "@angular/core";
import {SpentItem} from "./spent-item.model";

var Sqlite = require("nativescript-sqlite");

@Injectable()
export class SpentItemService {
    private database: any;

    constructor() {
        // this.people = [];
        (new Sqlite("mg.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS spent (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, sum NUMERIC, dateAdded DATE, excludeFromSum" +
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

    public create(item: SpentItem) {
        return this.database.execSQL("INSERT INTO spent (title, sum, dateAdded, excludeFromSum) VALUES (?, ?, ?, ?)",
            [item.title, item.sum, item.date, item.excludeFromSum])
            .then(id => {
                console.log("INSERT RESULT", id);
                item.id = id;
                return item;
            }, error => {
                console.log("INSERT ERROR", error);
            });
    }

    public getAll(): Promise<SpentItem[]> {
        return this.database.all("SELECT * FROM spent")
            .then(rows => {
                var items = [];
                for(var row in rows) {
                    items.push(new SpentItem(rows[row][0], rows[row][1], rows[row][2], rows[row][3], rows[row][4]));
                }
                return items;
            }, error => {
                console.log("SELECT ERROR", error);
            });
    }
}