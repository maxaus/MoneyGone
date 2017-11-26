import {Component, OnInit} from "@angular/core";
import {SpentItemService} from "../shared/spent-item.service";
import {SpentItem} from "../shared/spent-item.model";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "app-monthly-cards",
    moduleId: module.id,
    templateUrl: "./monthly-cards.component.html",
    styleUrls: ["./monthly-cards.component.css"],
})
export class MonthlyCardsComponent implements OnInit {

    public items = [];

    constructor(private spentItemService: SpentItemService, private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        this._loadItems();
    }

    _loadItems () {
        this.spentItemService.getAllGroupedByMonth()
            .then((items) => {
                console.log(JSON.stringify(items));
                this.items = items;
            })
    }

    openMonthlyItems(year, month) {
        console.log('Open monthly items:', year, month);
        this.routerExtensions.navigate(["/last-spent", year, month], {});
    }
}