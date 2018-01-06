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
                _this.routerExtensions.backToPreviousPage();
            });
        }
    };
    SpentFormComponent.prototype.updateItem = function () {
        var _this = this;
        if (this.item.sum && this.item.date) {
            console.log('Update', JSON.stringify(this.item));
            this.spentItemService.update(this.item)
                .then(function (item) {
                _this.routerExtensions.backToPreviousPage();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVudC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErQztBQUsvQywrREFBcUQ7QUFDckQsaURBQThDO0FBQzlDLG1FQUE4RDtBQUM5RCw2REFBaUU7QUFDakUsdUNBQXFDO0FBQ3JDLCtCQUFpQztBQVFqQztJQU9JLDRCQUFvQixJQUFVLEVBQVUsZ0JBQWtDLEVBQVUsZ0JBQWtDLEVBQVUsU0FBb0I7UUFBcEosaUJBZUM7UUFmbUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUw3SSxTQUFJLEdBQUcsSUFBSSw0QkFBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVwRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNsRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFF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LENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ1AsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBM0VRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQVE0QixXQUFJLEVBQTRCLHFDQUFnQixFQUE0Qix1Q0FBZ0IsRUFBcUIsZ0NBQVM7T0FQM0ksa0JBQWtCLENBNEU5QjtJQUFELHlCQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1N3aXRjaH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG5pbXBvcnQge1NwZW50SXRlbX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQge1NwZW50SXRlbVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc3BlbnQtaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtc3BlbnQtZm9ybVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3BlbnQtZm9ybS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NwZW50LWZvcm0uY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZW50Rm9ybUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGl0ZW0gPSBuZXcgU3BlbnRJdGVtKG51bGwsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlKTtcclxuXHJcbiAgICBwdWJsaWMgaXNCdXR0b25WaXNpYmxlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNJdGVtVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBzcGVudEl0ZW1TZXJ2aWNlOiBTcGVudEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpZCB8fCBpc05hTihpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIG5ldyBpdGVtLicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRWRpdCBpdGVtOiAnLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlbnRJdGVtU2VydmljZS5nZXRCeUlkKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSBOdW1iZXIobW9tZW50KHRoaXMuaXRlbS5kYXRlKS5mb3JtYXQoJ1lZWVknKSk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IE51bWJlcihtb21lbnQodGhpcy5pdGVtLmRhdGUpLmZvcm1hdCgnTU0nKSk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSBOdW1iZXIobW9tZW50KHRoaXMuaXRlbS5kYXRlKS5mb3JtYXQoJ0REJykpO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubWluRGF0ZSA9IG1vbWVudCh0aGlzLml0ZW0uZGF0ZSkuc3VidHJhY3QoMTAsICd5ZWFyJykudG9EYXRlKCk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbW9tZW50KHRoaXMuaXRlbS5kYXRlKS5hZGQoMTAsICd5ZWFyJykudG9EYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJEYXRlKCkge1xyXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPERhdGVQaWNrZXI+KFwiZGF0ZVBpY2tlclwiKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoZGF0ZVBpY2tlci55ZWFyLCBkYXRlUGlja2VyLm1vbnRoIC0gMSwgZGF0ZVBpY2tlci5kYXkpO1xyXG4gICAgICAgIHRoaXMuaXRlbS5kYXRlID0gc2VsZWN0ZWREYXRlO1xyXG4gICAgICAgIHRoaXMuaXNCdXR0b25WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RhdGVQaWNrZXIoKSB7XHJcbiAgICAgICAgbGV0IHRleHRGaWVsc0JEYXRlID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJpdGVtRGF0ZVwiKTtcclxuICAgICAgICB0aGlzLmlzQnV0dG9uVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRleHRGaWVsc0JEYXRlLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJdGVtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uc3VtICYmIHRoaXMuaXRlbS5kYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW0pKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVudEl0ZW1TZXJ2aWNlLmNyZWF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW0uc3VtICYmIHRoaXMuaXRlbS5kYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW0pKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVudEl0ZW1TZXJ2aWNlLnVwZGF0ZSh0aGlzLml0ZW0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxufSJdfQ==