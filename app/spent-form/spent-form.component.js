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
        console.log('Create', JSON.stringify(this.item));
        this.spentItemService.create(this.item)
            .then(function (item) {
            _this.routerExtensions.backToPreviousPage();
        });
    };
    SpentFormComponent.prototype.updateItem = function () {
        var _this = this;
        console.log('Update', JSON.stringify(this.item));
        this.spentItemService.update(this.item)
            .then(function (item) {
            _this.routerExtensions.backToPreviousPage();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVudC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErQztBQUsvQywrREFBcUQ7QUFDckQsaURBQThDO0FBQzlDLG1FQUE4RDtBQUM5RCw2REFBaUU7QUFDakUsdUNBQXFDO0FBQ3JDLCtCQUFpQztBQVFqQztJQU9JLDRCQUFvQixJQUFVLEVBQVUsZ0JBQWtDLEVBQVUsZ0JBQWtDLEVBQVUsU0FBb0I7UUFBcEosaUJBZUM7UUFmbUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUw3SSxTQUFJLEdBQUcsSUFBSSw0QkFBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNsRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFF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LE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxpQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXZFUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FRNEIsV0FBSSxFQUE0QixxQ0FBZ0IsRUFBNEIsdUNBQWdCLEVBQXFCLGdDQUFTO09BUDNJLGtCQUFrQixDQXdFOUI7SUFBRCx5QkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHtTd2l0Y2h9IGZyb20gXCJ1aS9zd2l0Y2hcIjtcclxuaW1wb3J0IHtTcGVudEl0ZW19IGZyb20gXCIuLi9zaGFyZWQvc3BlbnQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHtTcGVudEl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NwZW50LWl0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge1BhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXNwZW50LWZvcm1cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NwZW50LWZvcm0uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zcGVudC1mb3JtLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGVudEZvcm1Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBpdGVtID0gbmV3IFNwZW50SXRlbShudWxsLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XHJcblxyXG4gICAgcHVibGljIGlzQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzSXRlbVZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgc3BlbnRJdGVtU2VydmljZTogU3BlbnRJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgICAgIGlmICghaWQgfHwgaXNOYU4oaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBuZXcgaXRlbS4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VkaXQgaXRlbTogJywgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZW50SXRlbVNlcnZpY2UuZ2V0QnlJZChpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gTnVtYmVyKG1vbWVudCh0aGlzLml0ZW0uZGF0ZSkuZm9ybWF0KCdZWVlZJykpO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSBOdW1iZXIobW9tZW50KHRoaXMuaXRlbS5kYXRlKS5mb3JtYXQoJ01NJykpO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gTnVtYmVyKG1vbWVudCh0aGlzLml0ZW0uZGF0ZSkuZm9ybWF0KCdERCcpKTtcclxuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBtb21lbnQodGhpcy5pdGVtLmRhdGUpLnN1YnRyYWN0KDEwLCAneWVhcicpLnRvRGF0ZSgpO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubWF4RGF0ZSA9IG1vbWVudCh0aGlzLml0ZW0uZGF0ZSkuYWRkKDEwLCAneWVhcicpLnRvRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyRGF0ZSgpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxEYXRlUGlja2VyPihcImRhdGVQaWNrZXJcIik7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGVQaWNrZXIueWVhciwgZGF0ZVBpY2tlci5tb250aCAtIDEsIGRhdGVQaWNrZXIuZGF5KTtcclxuICAgICAgICB0aGlzLml0ZW0uZGF0ZSA9IHNlbGVjdGVkRGF0ZTtcclxuICAgICAgICB0aGlzLmlzQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEYXRlUGlja2VyKCkge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbHNCRGF0ZSA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwiaXRlbURhdGVcIik7XHJcbiAgICAgICAgdGhpcy5pc0J1dHRvblZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0ZXh0RmllbHNCRGF0ZS5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSXRlbSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtKSk7XHJcbiAgICAgICAgdGhpcy5zcGVudEl0ZW1TZXJ2aWNlLmNyZWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIC50aGVuKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUl0ZW0oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0ZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbSkpO1xyXG4gICAgICAgIHRoaXMuc3BlbnRJdGVtU2VydmljZS51cGRhdGUodGhpcy5pdGVtKVxyXG4gICAgICAgICAgICAudGhlbigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxufSJdfQ==