import {Component, OnInit} from "@angular/core";
import {SpentItemService} from "../shared/spent-item.service";
import {SpentItem} from "../shared/spent-item.model";
import {PageRoute, RouterExtensions} from "nativescript-angular";
import * as moment from 'moment';

@Component({
    selector: "app-last-spent",
    moduleId: module.id,
    templateUrl: "./last-spent.component.html",
    styleUrls: ["./last-spent.component.css"],
})
export class LastSpentComponent implements OnInit {

    public items = [];
    public monthLabel:string;
    private startDate:Date;
    private endDate:Date;


    constructor(private spentItemService: SpentItemService, private routerExtensions: RouterExtensions, private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => {
                let year = +params["year"];
                let month = +params["month"];
                this.startDate = moment(year + '-' + month + '-01').startOf('month').toDate();
                this.endDate = moment(year + '-' + month + '-01').endOf('month').toDate();
            });
    }

    ngOnInit(): void {
        this._loadItems();
    }

    _loadItems () {
        this.monthLabel = moment(this.startDate).format('MMM, YYYY');
        this.spentItemService.getByDateRange(this.startDate, this.endDate)
            .then((items) => {
                console.log(JSON.stringify(items));
                this.items = items;
            })
    }

    showPrevMonth () {
        this.startDate = moment(this.startDate).subtract(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).subtract(1, 'month').endOf('month').toDate();
        this._loadItems();
    }

    showNextMonth () {
        this.startDate = moment(this.startDate).add(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).add(1, 'month').endOf('month').toDate();
        this._loadItems();
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