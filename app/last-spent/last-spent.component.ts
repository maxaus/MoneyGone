import {Component, OnInit} from "@angular/core";
import {SpentItemService} from "../shared/spent-item.service";
import {SpentItem} from "../shared/spent-item.model";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "app-last-spent",
    moduleId: module.id,
    templateUrl: "./last-spent.component.html",
    styleUrls: ["./last-spent.component.css"],
})
export class LastSpentComponent implements OnInit {

    public items = [];

    constructor(private spentItemService: SpentItemService, private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        this._loadItems();
    }

    _loadItems () {
        this.spentItemService.getAll()
            .then((items) => {
                console.log(JSON.stringify(items));
                this.items = items;
            })
    }

    editItem(id) {
        console.log('Open edit form for item with ID:' + id);
        this.routerExtensions.navigate(["/spent-form", id], {});
    }

    deleteItem(id) {
        this.spentItemService.delete(id)
            .then(() => {
                this._loadItems();
            });
    }
}