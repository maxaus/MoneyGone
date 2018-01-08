"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spent_item_model_1 = require("../shared/spent-item.model");
var page_1 = require("tns-core-modules/ui/page");
var spent_item_service_1 = require("../shared/spent-item.service");
var nativescript_angular_1 = require("nativescript-angular");
require("rxjs/add/operator/switchMap");
var moment = require("moment");
var SpentFormComponent = (function () {
    function SpentFormComponent(page, spentItemService, routerExtensions, pageRoute) {
        var _this = this;
        this.page = page;
        this.spentItemService = spentItemService;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.item = new spent_item_model_1.SpentItem(null, null, null, null, false);
        this.isButtonVisible = false;
        this.isItemVisible = false;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            var id = +params["id"];
            if (!id || isNaN(id)) {
                console.log('Adding new item.');
            }
            else {
                console.log('Edit item: ', id);
                spentItemService.getById(id)
                    .then(function (item) {
                    _this.item = item;
                });
            }
        });
    }
    SpentFormComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = Number(moment(this.item.date).format('YYYY'));
        datePicker.month = Number(moment(this.item.date).format('MM'));
        datePicker.day = Number(moment(this.item.date).format('DD'));
        datePicker.minDate = moment(this.item.date).subtract(10, 'year').toDate();
        datePicker.maxDate = moment(this.item.date).add(10, 'year').toDate();
    };
    SpentFormComponent.prototype.enterDate = function () {
        var datePicker = this.page.getViewById("datePicker");
        var selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
        this.item.date = selectedDate;
        this.isButtonVisible = false;
        this.isItemVisible = false;
    };
    SpentFormComponent.prototype.showDatePicker = function () {
        var textFielsBDate = this.page.getViewById("itemDate");
        this.isButtonVisible = true;
        this.isItemVisible = true;
        setTimeout(function () {
            textFielsBDate.dismissSoftInput();
        }, 100);
    };
    SpentFormComponent.prototype.createItem = function () {
        var _this = this;
        if (this.item.sum && this.item.date) {
            console.log('Create', JSON.stringify(this.item));
            this.spentItemService.create(this.item)
                .then(function (item) {
                var year = Number(moment(_this.item.date).format('YYYY'));
                var month = Number(moment(_this.item.date).format('MM'));
                _this.routerExtensions.navigate(["/last-spent", year, month], {});
            });
        }
    };
    SpentFormComponent.prototype.updateItem = function () {
        var _this = this;
        if (this.item.sum && this.item.date) {
            console.log('Update', JSON.stringify(this.item));
            this.spentItemService.update(this.item)
                .then(function (item) {
                var year = Number(moment(_this.item.date).format('YYYY'));
                var month = Number(moment(_this.item.date).format('MM'));
                _this.routerExtensions.navigate(["/last-spent", year, month], {});
            });
        }
    };
    SpentFormComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    SpentFormComponent = __decorate([
        core_1.Component({
            selector: "app-spent-form",
            moduleId: module.id,
            templateUrl: "./spent-form.component.html",
            styleUrls: ["./spent-form.component.css"],
        }),
        __metadata("design:paramtypes", [page_1.Page, spent_item_service_1.SpentItemService, nativescript_angular_1.RouterExtensions, nativescript_angular_1.PageRoute])
    ], SpentFormComponent);
    return SpentFormComponent;
}());
exports.SpentFormComponent = SpentFormComponent;
