import {Component} from "@angular/core";
import {TextField} from "ui/text-field";
import {DatePicker} from "ui/date-picker";
import {SpentItem} from "../shared/spent-item.model";
import {Page} from "tns-core-modules/ui/page";
import {SpentItemService} from "../shared/spent-item.service";
import {PageRoute, RouterExtensions} from "nativescript-angular";
import "rxjs/add/operator/switchMap";
import * as moment from 'moment';

/**
 * Component for the form to create or update expense
 */
@Component({
    selector: "app-expense-form",
    moduleId: module.id,
    templateUrl: "./expense-form.component.html",
    styleUrls: ["./expense-form.component.css"],
})
export class ExpenseFormComponent {

    /**
     * Currently loaded expense (spent item) entry
     * @type {SpentItem}
     */
    public item = new SpentItem(null, null, null, null, false);

    /**
     * Is button to select date from date picker widget visible
     * @type {boolean}
     */
    public isSelectDateButtonVisible = false;

    /**
     * Is date picker widget visible
     * @type {boolean}
     */
    public isDatePickerVisible = false;

    /**
     * Component constructor
     * @param {Page} page
     * @param {SpentItemService} spentItemService
     * @param {RouterExtensions} routerExtensions
     * @param {PageRoute} pageRoute
     */
    constructor(private page: Page, private spentItemService: SpentItemService, private routerExtensions: RouterExtensions, private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => {
                let id = +params["id"];
                if (!id || isNaN(id)) {
                    console.log('Adding new item.');
                } else {
                    console.log('Updating item with ID=', id);
                    spentItemService.getById(id)
                        .then(item => {
                            this.item = item;
                        })
                }
            });
    }

    /**
     * Date picker widget load event handler
     * @param args
     */
    onDatePickerLoaded(args) {
        let datePicker = <DatePicker>args.object;

        datePicker.year = Number(moment(this.item.date).format('YYYY'));
        datePicker.month = Number(moment(this.item.date).format('MM'));
        datePicker.day = Number(moment(this.item.date).format('DD'));
        datePicker.minDate = moment(this.item.date).subtract(10, 'year').toDate();
        datePicker.maxDate = moment(this.item.date).endOf('day').toDate();
    }

    /**
     * Set selected date on item
     */
    enterDate() {
        let datePicker = this.page.getViewById<DatePicker>("datePicker");
        this.item.date = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
        this.isSelectDateButtonVisible = false;
        this.isDatePickerVisible = false;
    }

    /**
     * Open date picker widget
     */
    showDatePicker() {
        let textFielsBDate = this.page.getViewById<TextField>("itemDate");
        this.isSelectDateButtonVisible = true;
        this.isDatePickerVisible = true;

        setTimeout(function () {
            textFielsBDate.dismissSoftInput();
        }, 100);

    }

    /**
     * Create new item in DB and go to monthly expenses list.
     */
    createItem() {
        if (this.item.sum && this.item.date) {
            console.log('Create', JSON.stringify(this.item));
            this.spentItemService.create(this.item)
                .then(() => {
                    const year = Number(moment(this.item.date).format('YYYY'));
                    const month = Number(moment(this.item.date).format('MM'));
                    this.routerExtensions.navigate(["/monthly-list", year, month], {});
                });
        }
    }

    /**
     * Update existing item in DB and go to monthly expenses list.
     */
    updateItem() {
        if (this.item.sum && this.item.date) {
            console.log('Update', JSON.stringify(this.item));
            this.spentItemService.update(this.item)
                .then(() => {
                    const year = Number(moment(this.item.date).format('YYYY'));
                    const month = Number(moment(this.item.date).format('MM'));
                    this.routerExtensions.navigate(["/monthly-list", year, month], {});
                });
        }
    }

    /**
     * Go to previous state
     */
    back() {
        this.routerExtensions.backToPreviousPage();
    }
}