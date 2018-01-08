"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spent_item_service_1 = require("../shared/spent-item.service");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs_1 = require("ui/dialogs");
var moment = require("moment");
var LastSpentComponent = (function () {
    function LastSpentComponent(spentItemService, routerExtensions, pageRoute) {
        var _this = this;
        this.spentItemService = spentItemService;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.items = [];
        this.sortCol = 'dateAdded';
        this.sortDir = 'DESC';
        this.totalSum = 0;
        this.excludedSum = 0;
        this.deleteConfirmOptions = {
            title: "Confirm Delete",
            message: "Do you really want to remove this item?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        };
        this.sortOptions = {
            title: "Sort By",
            message: "Choose sort direction",
            cancelButtonText: "Cancel",
            actions: ["Recent first", "Old first", "Expensive first", "Cheap first"]
        };
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            var year = +params["year"];
            var month = +params["month"];
            _this.startDate = moment(year + '-' + month + '-01').startOf('month').toDate();
            _this.endDate = moment(year + '-' + month + '-01').endOf('month').toDate();
        });
    }
    LastSpentComponent.prototype.ngOnInit = function () {
        console.log('init');
        this._loadItems();
    };
    LastSpentComponent.prototype._loadItems = function () {
        var _this = this;
        this.monthLabel = moment(this.startDate).format('MMM, YYYY');
        this.spentItemService.getByDateRange(this.startDate, this.endDate, this.sortCol, this.sortDir)
            .then(function (items) {
            console.log(JSON.stringify(items));
            _this.items = items;
            _this.totalSum = (!!items && items.length) ? items.map(function (item) { return item.excludeFromSum ? 0 : item.sum; }).reduce(function (sum, x) { return sum + x; }) : 0;
            _this.excludedSum = (!!items && items.length) ? items.map(function (item) { return item.excludeFromSum ? item.sum : 0; }).reduce(function (sum, x) { return sum + x; }) : 0;
        });
    };
    LastSpentComponent.prototype.showPrevMonth = function () {
        this.startDate = moment(this.startDate).subtract(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).subtract(1, 'month').endOf('month').toDate();
        this._loadItems();
    };
    LastSpentComponent.prototype.showNextMonth = function () {
        this.startDate = moment(this.startDate).add(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).add(1, 'month').endOf('month').toDate();
        this._loadItems();
    };
    LastSpentComponent.prototype.editItem = function (id) {
        console.log('Open edit form for item with ID:' + id);
        this.routerExtensions.navigate(["/spent-form", id], {});
    };
    LastSpentComponent.prototype.deleteItem = function (id) {
        var _this = this;
        dialogs_1.confirm(this.deleteConfirmOptions).then(function (result) {
            if (result) {
                _this.spentItemService.delete(id)
                    .then(function () {
                    _this._loadItems();
                });
            }
        });
    };
    LastSpentComponent.prototype._getSortExp = function (option) {
        switch (option) {
            case 'New first':
                return ['dateAdded', 'DESC'];
            case 'Old first':
                return ['dateAdded', 'ASC'];
            case 'Expensive first':
                return ['sum', 'Desc'];
            case 'Cheap first':
                return ['sum', 'ASC'];
            default:
                return ['dateAdded', 'DESC'];
        }
    };
    LastSpentComponent.prototype.openSortDialog = function () {
        var _this = this;
        dialogs_1.action(this.sortOptions).then(function (result) {
            var sortExpressionParts = _this._getSortExp(result);
            _this.sortCol = sortExpressionParts[0];
            _this.sortDir = sortExpressionParts[1];
            _this._loadItems();
        });
    };
    LastSpentComponent.prototype.onSearchLayoutLoaded = function (event) {
        if (event.object.android) {
            event.object.android.setFocusableInTouchMode(true);
        }
    };
    LastSpentComponent.prototype.onSearchBarLoaded = function (event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    };
    LastSpentComponent = __decorate([
        core_1.Component({
            selector: "app-last-spent",
            moduleId: module.id,
            templateUrl: "./last-spent.component.html",
            styleUrls: ["./last-spent.component.css"],
        }),
        __metadata("design:paramtypes", [spent_item_service_1.SpentItemService, nativescript_angular_1.RouterExtensions, nativescript_angular_1.PageRoute])
    ], LastSpentComponent);
    return LastSpentComponent;
}());
exports.LastSpentComponent = LastSpentComponent;
