import {Component, OnInit} from "@angular/core";
import {SpentItemService} from "../shared/spent-item.service";
import {SpentItem} from "../shared/spent-item.model";
import {RouterExtensions} from "nativescript-angular";
import {ListPicker} from "ui/list-picker";
import * as moment from 'moment';
import {DropDown, SelectedIndexChangedEventData} from "nativescript-drop-down";
import {Fab} from "nativescript-floatingactionbutton";

@Component({
    selector: "app-monthly-cards",
    moduleId: module.id,
    templateUrl: "./monthly-cards.component.html",
    styleUrls: ["./monthly-cards.component.css"],
})
export class MonthlyCardsComponent implements OnInit {

    public items = [];
    public years: Array<number>;
    public picked: number;
    public selectedIndex = 0;

    constructor(private spentItemService: SpentItemService, private routerExtensions: RouterExtensions) {
        this.years = [];
        const currentYear = (new Date()).getFullYear();
        this.picked = currentYear;
        for (let i = 0; i < 30; i++) {
            this.years.push(currentYear - i);
        }
    }

    ngOnInit(): void {
        this._loadItems();
    }

    public selectedIndexChanged(args: SelectedIndexChangedEventData) {
        this.picked = this.years[args.newIndex];
        console.log("Picked year: " + this.picked);
        this._loadItems();
    }

    _loadItems() {
        console.log("Selected year: " + this.picked);
        this.spentItemService.getByDateRangeGroupedByMonth(moment(this.picked + '-01-01').startOf('year').toDate(), moment(this.picked + '-01-01').endOf('year').toDate())
            .then((items) => {
                console.log(JSON.stringify(items));
                this.items = items;
            })
    }

    openMonthlyItems(year, month) {
        console.log('Open monthly items:', year, month);
        this.routerExtensions.navigate(["/last-spent", year, month], {});
    }

    fabTap (args) {
        console.log('tapped');
    }
}