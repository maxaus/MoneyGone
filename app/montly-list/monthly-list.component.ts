import {Component, OnInit} from "@angular/core";
import {SpentItemService} from "../shared/spent-item.service";
import {PageRoute, RouterExtensions} from "nativescript-angular";
import {action, confirm} from "ui/dialogs";
import * as moment from 'moment';

@Component({
    selector: "app-monthly-list",
    moduleId: module.id,
    templateUrl: "./monthly-list.component.html",
    styleUrls: ["./monthly-list.component.css"],
})
export class MonthlyListComponent implements OnInit {

    public items = [];
    public monthLabel: string;
    public displayNextMonth: boolean;
    private startDate: Date;
    private endDate: Date;
    private sortCol = 'dateAdded';
    private sortDir = 'DESC';
    private currentDate = new Date();
    public totalSum = 0;
    public excludedSum = 0;
    private deleteConfirmOptions = {
        title: "Confirm Delete",
        message: "Do you really want to remove this item?",
        okButtonText: "Yes",
        cancelButtonText: "No"
    };
    private sortOptions = {
        title: "Sort By",
        message: "Choose sort direction",
        cancelButtonText: "Cancel",
        actions: ["Recent first", "Old first", "Expensive first", "Cheap first"]
    };

    constructor(private spentItemService: SpentItemService, private routerExtensions: RouterExtensions, private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => {
                let year = +params["year"];
                let month = +params["month"];

                this.startDate = moment(year + '-' + month + '-01').startOf('month').toDate();
                this.endDate = moment(year + '-' + month + '-01').endOf('month').toDate();
                let currentMoment = moment(this.startDate);
                this.displayNextMonth = currentMoment.year() < this.currentDate.getFullYear() ||
                    (this.currentDate.getFullYear() == currentMoment.year() && currentMoment.month() < this.currentDate.getMonth());
            });
    }

    ngOnInit(): void {
        console.log('init');
        this._loadItems();
    }

    _loadItems() {
        this.monthLabel = moment(this.startDate).format('MMM, YYYY');
        this.spentItemService.getByDateRange(this.startDate, this.endDate, this.sortCol, this.sortDir)
            .then((items) => {
                console.log(JSON.stringify(items));
                this.items = items;
                this.totalSum = (!!items && items.length) ? items.map((item) => item.excludeFromSum ? 0 : item.sum).reduce((sum, x) => sum + x) : 0;
                this.excludedSum = (!!items && items.length) ? items.map((item) => item.excludeFromSum ? item.sum : 0).reduce((sum, x) => sum + x) : 0;
            })
    }

    showPrevMonth() {
        this.startDate = moment(this.startDate).subtract(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).subtract(1, 'month').endOf('month').toDate();
        let currentMoment = moment(this.startDate);
        console.log(JSON.stringify(this.currentDate.getFullYear()), JSON.stringify(currentMoment.year()));
        console.log(JSON.stringify(this.currentDate.getMonth()), JSON.stringify(currentMoment.month()));
        this.displayNextMonth = currentMoment.year() < this.currentDate.getFullYear() ||
            (this.currentDate.getFullYear() == currentMoment.year() && currentMoment.month() < this.currentDate.getMonth());
        this._loadItems();
    }

    showNextMonth() {
        this.startDate = moment(this.startDate).add(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).add(1, 'month').endOf('month').toDate();
        let currentMoment = moment(this.startDate);
        this.displayNextMonth = currentMoment.year() < this.currentDate.getFullYear() ||
            (this.currentDate.getFullYear() == currentMoment.year() && currentMoment.month() < this.currentDate.getMonth());
        this._loadItems();
    }

    editItem(id) {
        console.log('Open edit form for item with ID:' + id);
        this.routerExtensions.navigate(["/expense-form", id], {});
    }

    deleteItem(id) {
        confirm(this.deleteConfirmOptions).then((result: boolean) => {
            if (result) {
                this.spentItemService.delete(id)
                    .then(() => {
                        this._loadItems();
                    });
            }
        });
    }

    _getSortExp(option) {
        switch (option) {
            case 'New first':
                return ['dateAdded','DESC'];
            case 'Old first':
                return ['dateAdded','ASC'];
            case 'Expensive first':
                return ['sum','Desc'];
            case 'Cheap first':
                return ['sum','ASC'];
            default:
                return ['dateAdded','DESC'];
        }
    }
    openSortDialog() {
        action(this.sortOptions).then((result) => {
            let sortExpressionParts = this._getSortExp(result);
            this.sortCol = sortExpressionParts[0];
            this.sortDir = sortExpressionParts[1];
            this._loadItems();
        });
    }

    onSearchLayoutLoaded(event) {
        if (event.object.android) {
            event.object.android.setFocusableInTouchMode(true);
        }
    }

    onSearchBarLoaded(event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    }
}