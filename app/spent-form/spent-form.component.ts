import {Component, Input} from "@angular/core";
import {TextField} from "ui/text-field";
import {DatePicker} from "ui/date-picker";
import { EventData } from "data/observable";
import {Switch} from "ui/switch";
import {SpentItem} from "../shared/spent-item.model";
import {Page} from "tns-core-modules/ui/page";
import {SpentItemService} from "../shared/spent-item.service";
import {PageRoute, RouterExtensions} from "nativescript-angular";
import "rxjs/add/operator/switchMap";
import * as moment from 'moment';

@Component({
    selector: "app-spent-form",
    moduleId: module.id,
    templateUrl: "./spent-form.component.html",
    styleUrls: ["./spent-form.component.css"],
})
export class SpentFormComponent {

    public item = new SpentItem(null, null, null, null, false);

    public isButtonVisible = false;
    public isItemVisible = false;

    constructor(private page: Page, private spentItemService: SpentItemService, private routerExtensions: RouterExtensions, private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => {
                let id = +params["id"];
                if (!id || isNaN(id)) {
                    console.log('Adding new item.');
                } else {
                    console.log('Edit item: ', id);
                    spentItemService.getById(id)
                        .then(item => {
                            this.item = item;
                        })
                }
            });
    }

    onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;

        datePicker.year = Number(moment(this.item.date).format('YYYY'));
        datePicker.month = Number(moment(this.item.date).format('MM'));
        datePicker.day = Number(moment(this.item.date).format('DD'));
        datePicker.minDate = moment(this.item.date).subtract(10, 'year').toDate();
        datePicker.maxDate = moment(this.item.date).endOf('day').toDate();
    }

    enterDate() {
        let datePicker = this.page.getViewById<DatePicker>("datePicker");
        let selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
        this.item.date = selectedDate;
        this.isButtonVisible = false;
        this.isItemVisible = false;
    }

    showDatePicker() {
        let textFielsBDate = this.page.getViewById<TextField>("itemDate");
        this.isButtonVisible = true;
        this.isItemVisible = true;

        setTimeout(function () {
            textFielsBDate.dismissSoftInput();
        }, 100);

    }

    createItem() {
        if (this.item.sum && this.item.date) {
            console.log('Create', JSON.stringify(this.item));
            this.spentItemService.create(this.item)
                .then((item) => {
                    const year = Number(moment(this.item.date).format('YYYY'));
                    const month = Number(moment(this.item.date).format('MM'));
                    this.routerExtensions.navigate(["/last-spent", year, month], {});
                });
        }
    }

    updateItem() {
        if (this.item.sum && this.item.date) {
            console.log('Update', JSON.stringify(this.item));
            this.spentItemService.update(this.item)
                .then((item) => {
                    const year = Number(moment(this.item.date).format('YYYY'));
                    const month = Number(moment(this.item.date).format('MM'));
                    this.routerExtensions.navigate(["/last-spent", year, month], {});
                });
        }
    }

    back() {
        this.routerExtensions.backToPreviousPage();
    }
}