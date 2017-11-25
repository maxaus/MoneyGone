"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spent_item_model_1 = require("../shared/spent-item.model");
var page_1 = require("tns-core-modules/ui/page");
var spent_item_service_1 = require("../shared/spent-item.service");
var nativescript_angular_1 = require("nativescript-angular");
require("rxjs/add/operator/switchMap");
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
    SpentFormComponent.prototype.ngOnInit = function () {
        var datePicker = this.page.getViewById("datePicker");
        var currentDate = new Date();
        datePicker.year = currentDate.getFullYear();
        datePicker.month = currentDate.getMonth();
        datePicker.day = currentDate.getDate();
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
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
            _this.routerExtensions.navigate(["/last-spent"], {});
        });
    };
    SpentFormComponent.prototype.updateItem = function () {
        var _this = this;
        console.log('Update', JSON.stringify(this.item));
        this.spentItemService.update(this.item)
            .then(function (item) {
            _this.routerExtensions.navigate(["/last-spent"], {});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVudC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErQztBQUkvQywrREFBcUQ7QUFDckQsaURBQThDO0FBQzlDLG1FQUE4RDtBQUM5RCw2REFBaUU7QUFDakUsdUNBQXFDO0FBUXJDO0lBT0ksNEJBQW9CLElBQVUsRUFBVSxnQkFBa0MsRUFBVSxnQkFBa0MsRUFBVSxTQUFvQjtRQUFwSixpQkFlQztRQWZtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBTDdJLFNBQUksR0FBRyxJQUFJLDRCQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXBELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3pCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dC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QUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXZFUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FRNEIsV0FBSSxFQUE0QixxQ0FBZ0IsRUFBNEIsdUNBQWdCLEVBQXFCLGdDQUFTO09BUDNJLGtCQUFrQixDQXdFOUI7SUFBRCx5QkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7U3dpdGNofSBmcm9tIFwidWkvc3dpdGNoXCI7XHJcbmltcG9ydCB7U3BlbnRJdGVtfSBmcm9tIFwiLi4vc2hhcmVkL3NwZW50LWl0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7U3BlbnRJdGVtU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXNwZW50LWZvcm1cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NwZW50LWZvcm0uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zcGVudC1mb3JtLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGVudEZvcm1Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBpdGVtID0gbmV3IFNwZW50SXRlbShudWxsLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XHJcblxyXG4gICAgcHVibGljIGlzQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzSXRlbVZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgc3BlbnRJdGVtU2VydmljZTogU3BlbnRJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgICAgIGlmICghaWQgfHwgaXNOYU4oaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBuZXcgaXRlbS4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VkaXQgaXRlbTogJywgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZW50SXRlbVNlcnZpY2UuZ2V0QnlJZChpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxEYXRlUGlja2VyPihcImRhdGVQaWNrZXJcIik7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubWluRGF0ZSA9IG5ldyBEYXRlKDE5NzUsIDAsIDI5KTtcclxuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJEYXRlKCkge1xyXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPERhdGVQaWNrZXI+KFwiZGF0ZVBpY2tlclwiKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoZGF0ZVBpY2tlci55ZWFyLCBkYXRlUGlja2VyLm1vbnRoIC0gMSwgZGF0ZVBpY2tlci5kYXkpO1xyXG4gICAgICAgIHRoaXMuaXRlbS5kYXRlID0gc2VsZWN0ZWREYXRlO1xyXG4gICAgICAgIHRoaXMuaXNCdXR0b25WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RhdGVQaWNrZXIoKSB7XHJcbiAgICAgICAgbGV0IHRleHRGaWVsc0JEYXRlID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJpdGVtRGF0ZVwiKTtcclxuICAgICAgICB0aGlzLmlzQnV0dG9uVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRleHRGaWVsc0JEYXRlLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJdGVtKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW0pKTtcclxuICAgICAgICB0aGlzLnNwZW50SXRlbVNlcnZpY2UuY3JlYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICAgICAgLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbGFzdC1zcGVudFwiXSwge30pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW0pKTtcclxuICAgICAgICB0aGlzLnNwZW50SXRlbVNlcnZpY2UudXBkYXRlKHRoaXMuaXRlbSlcclxuICAgICAgICAgICAgLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbGFzdC1zcGVudFwiXSwge30pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxufSJdfQ==