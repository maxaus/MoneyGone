import {Component, Input} from "@angular/core";
import {TextField} from "ui/text-field";
import {DatePicker} from "ui/date-picker";
import {Switch} from "ui/switch";
import {SpentItem} from "../shared/spent-item.model";
import {Page} from "tns-core-modules/ui/page";
import {SpentItemService} from "../shared/spent-item.service";
import {PageRoute, RouterExtensions} from "nativescript-angular";
import "rxjs/add/operator/switchMap";

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

    ngOnInit() {
        let datePicker = this.page.getViewById<DatePicker>("datePicker");
        let currentDate = new Date();
        datePicker.year = currentDate.getFullYear();
        datePicker.month = currentDate.getMonth();
        datePicker.day = currentDate.getDate();
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

        setTimeout(function () {
            textFielsBDate.dismissSoftInput();
        }, 100);

    }

    createItem() {
        console.log('Create', JSON.stringify(this.item));
        this.spentItemService.create(this.item)
            .then((item) => {
                this.routerExtensions.backToPreviousPage();
            });
    }

    updateItem() {
        console.log('Update', JSON.stringify(this.item));
        this.spentItemService.update(this.item)
            .then((item) => {
                this.routerExtensions.backToPreviousPage();
            });
    }

    back() {
        this.routerExtensions.backToPreviousPage();
    }
}