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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVudC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErQztBQUkvQywrREFBcUQ7QUFDckQsaURBQThDO0FBQzlDLG1FQUE4RDtBQUM5RCw2REFBaUU7QUFDakUsdUNBQXFDO0FBUXJDO0lBT0ksNEJBQW9CLElBQVUsRUFBVSxnQkFBa0MsRUFBVSxnQkFBa0MsRUFBVSxTQUFvQjtRQUFwSixpQkFlQztRQWZtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBTDdJLFNBQUksR0FBRyxJQUFJLDRCQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXBELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3pCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dC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LENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBUTRCLFdBQUksRUFBNEIscUNBQWdCLEVBQTRCLHVDQUFnQixFQUFxQixnQ0FBUztPQVAzSSxrQkFBa0IsQ0F3RTlCO0lBQUQseUJBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQXhFWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VGV4dEZpZWxkfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQge1N3aXRjaH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG5pbXBvcnQge1NwZW50SXRlbX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQge1NwZW50SXRlbVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc3BlbnQtaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1zcGVudC1mb3JtXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zcGVudC1mb3JtLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vc3BlbnQtZm9ybS5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlbnRGb3JtQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgaXRlbSA9IG5ldyBTcGVudEl0ZW0obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UpO1xyXG5cclxuICAgIHB1YmxpYyBpc0J1dHRvblZpc2libGUgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0l0ZW1WaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHNwZW50SXRlbVNlcnZpY2U6IFNwZW50SXRlbVNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlkIHx8IGlzTmFOKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgbmV3IGl0ZW0uJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFZGl0IGl0ZW06ICcsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGVudEl0ZW1TZXJ2aWNlLmdldEJ5SWQoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8RGF0ZVBpY2tlcj4oXCJkYXRlUGlja2VyXCIpO1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBkYXRlUGlja2VyLmRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgxOTc1LCAwLCAyOSk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyRGF0ZSgpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxEYXRlUGlja2VyPihcImRhdGVQaWNrZXJcIik7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGVQaWNrZXIueWVhciwgZGF0ZVBpY2tlci5tb250aCAtIDEsIGRhdGVQaWNrZXIuZGF5KTtcclxuICAgICAgICB0aGlzLml0ZW0uZGF0ZSA9IHNlbGVjdGVkRGF0ZTtcclxuICAgICAgICB0aGlzLmlzQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEYXRlUGlja2VyKCkge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbHNCRGF0ZSA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwiaXRlbURhdGVcIik7XHJcbiAgICAgICAgdGhpcy5pc0J1dHRvblZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0ZXh0RmllbHNCRGF0ZS5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSXRlbSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtKSk7XHJcbiAgICAgICAgdGhpcy5zcGVudEl0ZW1TZXJ2aWNlLmNyZWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgIC50aGVuKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUl0ZW0oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0ZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbSkpO1xyXG4gICAgICAgIHRoaXMuc3BlbnRJdGVtU2VydmljZS51cGRhdGUodGhpcy5pdGVtKVxyXG4gICAgICAgICAgICAudGhlbigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxufSJdfQ==