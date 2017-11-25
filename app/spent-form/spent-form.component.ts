import {Component, Input} from "@angular/core";
import { TextField } from "ui/text-field";
import { DatePicker } from "ui/date-picker";
import { Switch } from "ui/switch";
import {SpentItem} from "../shared/spent-item.model";
import {Page} from "tns-core-modules/ui/page";

@Component({
    selector: "app-spent-form",
    moduleId: module.id,
    templateUrl: "./spent-form.component.html",
    styleUrls: ["./spent-form.component.css"],
})
export class SpentFormComponent {

    public item = new SpentItem();

    public isButtonVisible = false;
    public isItemVisible = false;

    constructor(private page: Page) {
    }

    ngOnInit() {
        let datePicker = this.page.getViewById<DatePicker>("datePicker");
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
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

        setTimeout(function() {
            textFielsBDate.dismissSoftInput();
        }, 100);

    }

    submit() {
        console.log('Submit', JSON.stringify(this.item));
    }
}