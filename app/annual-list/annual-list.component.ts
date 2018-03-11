import {Component, OnInit} from "@angular/core";
import {SpentItemService} from "../shared/spent-item.service";
import {RouterExtensions} from "nativescript-angular";
import * as moment from 'moment';

/**
 * Component for the list of annual expenses.
 */
@Component({
    selector: "app-annual-list",
    moduleId: module.id,
    templateUrl: "./annual-list.component.html",
    styleUrls: ["./annual-list.component.css"],
})
export class AnnualListComponent implements OnInit {

    /**
     * Expense items for selected year
     * @type {any[]}
     */
    public items = [];

    /**
     * Currently selected year
     */
    public selectedYear: number;

    /**
     * Sum of expenses for selected year
     * @type {number}
     */
    public totalSum = 0;

    /**
     * If "next year" button should be available (user can't select year after current year)
     */
    public displayNextYear: boolean;

    /**
     * Current date
     * @type {Date}
     */
    private currentDate = new Date();

    /**
     * Labels for all months in the year
     * @type {string[]}
     */
    private monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    /**
     * Component constructor
     * @param {SpentItemService} spentItemService
     * @param {RouterExtensions} routerExtensions
     */
    constructor(private spentItemService: SpentItemService, private routerExtensions: RouterExtensions) {
        this.selectedYear = this.currentDate.getFullYear();
        this.displayNextYear = false;
    }

    /**
     * Init event handler
     */
    ngOnInit(): void {
        this._loadItems();
    }

    /**
     * Load annual expenses for selected year
     * @private
     */
    _loadItems() {
        console.log("Selected year: " + this.selectedYear);


        this.spentItemService.getByDateRangeGroupedByMonth(moment(this.selectedYear + '-01-01').startOf('year').toDate(), moment(this.selectedYear + '-01-01').endOf('year').toDate())
            .then((items) => {
                console.log(JSON.stringify(items));
                this.items = [];

                for (let i = 11; i >= 0; i--) {
                    // Add month if and only if it's
                    if (this.selectedYear < this.currentDate.getFullYear() ||
                        (this.selectedYear === this.currentDate.getFullYear() && i <= this.currentDate.getMonth())) {

                        const monthItem = items.find((item) => {
                            return Number(item.month) === i+1
                        });
                        const monthLabel = this.monthLabels[i];
                        console.log('monthItem', JSON.stringify(monthItem));
                        if (!!monthItem) {
                            this.items.push({
                                sum: monthItem.sum,
                                month: monthItem.month,
                                monthLabel: monthLabel,
                                year: monthItem.year,
                                hasData: monthItem.count > 0
                            })
                        } else {
                            this.items.push({
                                sum: '-',
                                month: i,
                                monthLabel: monthLabel,
                                year: this.selectedYear,
                                hasData: false
                            })
                        }
                    }
                }
                this.totalSum = (!!items && items.length) ? items.map((item) => item.sum).reduce((sum, x) => sum + x) : 0;

                console.log(JSON.stringify(this.items))
            })
    }

    /**
     * Go to the list of monthly expenses
     * @param year selected year
     * @param month selected month
     */
    openMonthlyItems(year, month) {
        console.log('Open monthly items:', year, month);
        this.routerExtensions.navigate(["/monthly-list", year, month], {});
    }

    /**
     * Load items for the previous year
     */
    showPrevYear() {
        this.selectedYear -= 1;
        this.displayNextYear = this.selectedYear < this.currentDate.getFullYear();
        this._loadItems();
    }

    /**
     * Load items for the next year
     */
    showNextYear() {
        this.selectedYear += 1;
        this.displayNextYear = this.selectedYear < this.currentDate.getFullYear();
        this._loadItems();
    }
}