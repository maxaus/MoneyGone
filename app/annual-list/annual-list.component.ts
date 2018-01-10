import {Component, OnInit} from "@angular/core";
import {SpentItemService} from "../shared/spent-item.service";
import {RouterExtensions} from "nativescript-angular";
import * as moment from 'moment';

@Component({
    selector: "app-annual-list",
    moduleId: module.id,
    templateUrl: "./annual-list.component.html",
    styleUrls: ["./annual-list.component.css"],
})
export class AnnualListComponent implements OnInit {

    public items = [];
    public years: Array<number>;
    public picked: number;
    public totalSum = 0;
    public displayNextYear: boolean;
    private currentDate = new Date();
    private months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    constructor(private spentItemService: SpentItemService, private routerExtensions: RouterExtensions) {
        this.years = [];
        const currentYear = (new Date()).getFullYear();
        this.picked = currentYear;
        this.displayNextYear = false;
        for (let i = 0; i < 30; i++) {
            this.years.push(currentYear - i);
        }
    }

    ngOnInit(): void {
        this._loadItems();
    }

    _loadItems() {
        console.log("Selected year: " + this.picked);


        this.spentItemService.getByDateRangeGroupedByMonth(moment(this.picked + '-01-01').startOf('year').toDate(), moment(this.picked + '-01-01').endOf('year').toDate())
            .then((items) => {
                console.log(JSON.stringify(items));
                this.items = [];

                for (let i = 11; i >= 0; i--) {
                    // Add month if and only if it's
                    if (this.picked < this.currentDate.getFullYear() ||
                        (this.picked === this.currentDate.getFullYear() && i <= this.currentDate.getMonth())) {

                        const monthItem = items.find((item) => {
                            return Number(item.month) === i+1
                        });
                        console.log('monthItem', JSON.stringify(monthItem));
                        if (!!monthItem) {
                            this.items.push({
                                sum: monthItem.sum,
                                month: monthItem.month,
                                monthLabel: this.months[i],
                                year: monthItem.year,
                                hasData: monthItem.count > 0
                            })
                        } else {
                            this.items.push({
                                sum: '-',
                                month: i,
                                monthLabel: this.months[i],
                                year: this.picked,
                                hasData: false
                            })
                        }
                    }
                }
                this.totalSum = (!!items && items.length) ? items.map((item) => item.sum).reduce((sum, x) => sum + x) : 0;

                console.log(JSON.stringify(this.items))
            })
    }

    openMonthlyItems(year, month) {
        console.log('Open monthly items:', year, month);
        this.routerExtensions.navigate(["/monthly-list", year, month], {});
    }

    showPrevYear() {
        this.picked -= 1;
        this.displayNextYear = this.picked < this.currentDate.getFullYear();
        this._loadItems();
    }

    showNextYear() {
        this.picked += 1;
        this.displayNextYear = this.picked < this.currentDate.getFullYear();
        this._loadItems();
    }
}