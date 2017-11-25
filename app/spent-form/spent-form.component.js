"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spent_item_model_1 = require("../shared/spent-item.model");
var page_1 = require("tns-core-modules/ui/page");
var SpentFormComponent = (function () {
    function SpentFormComponent(page) {
        this.page = page;
        this.item = new spent_item_model_1.SpentItem();
        this.isButtonVisible = false;
        this.isItemVisible = false;
    }
    SpentFormComponent.prototype.ngOnInit = function () {
        var datePicker = this.page.getViewById("datePicker");
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
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
    SpentFormComponent.prototype.submit = function () {
        console.log('Submit', JSON.stringify(this.item));
    };
    SpentFormComponent = __decorate([
        core_1.Component({
            selector: "app-spent-form",
            moduleId: module.id,
            templateUrl: "./spent-form.component.html",
            styleUrls: ["./spent-form.component.css"],
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], SpentFormComponent);
    return SpentFormComponent;
}());
exports.SpentFormComponent = SpentFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVudC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErQztBQUkvQywrREFBcUQ7QUFDckQsaURBQThDO0FBUTlDO0lBT0ksNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTHZCLFNBQUksR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQztRQUV2QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUc3QixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFhLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxZQUFZLENBQUMsQ0FBQztRQUNqRSxJQUFJLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDSSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxVQUFVLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixVQUFVLENBQUM7WUFDUCxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFWixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQXhDUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FRNEIsV0FBSTtPQVByQixrQkFBa0IsQ0F5QzlCO0lBQUQseUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInVpL3N3aXRjaFwiO1xyXG5pbXBvcnQge1NwZW50SXRlbX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtc3BlbnQtZm9ybVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3BlbnQtZm9ybS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NwZW50LWZvcm0uY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZW50Rm9ybUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGl0ZW0gPSBuZXcgU3BlbnRJdGVtKCk7XHJcblxyXG4gICAgcHVibGljIGlzQnV0dG9uVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzSXRlbVZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxEYXRlUGlja2VyPihcImRhdGVQaWNrZXJcIik7XHJcbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gMTk4MDtcclxuICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gMjtcclxuICAgICAgICBkYXRlUGlja2VyLmRheSA9IDk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMTk3NSwgMCwgMjkpO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubWF4RGF0ZSA9IG5ldyBEYXRlKDIwNDUsIDQsIDEyKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlckRhdGUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8RGF0ZVBpY2tlcj4oXCJkYXRlUGlja2VyXCIpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlUGlja2VyLnllYXIsIGRhdGVQaWNrZXIubW9udGggLSAxLCBkYXRlUGlja2VyLmRheSk7XHJcbiAgICAgICAgdGhpcy5pdGVtLmRhdGUgPSBzZWxlY3RlZERhdGU7XHJcbiAgICAgICAgdGhpcy5pc0J1dHRvblZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGF0ZVBpY2tlcigpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxzQkRhdGUgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcIml0ZW1EYXRlXCIpO1xyXG4gICAgICAgIHRoaXMuaXNCdXR0b25WaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0ZXh0RmllbHNCRGF0ZS5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXQnLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW0pKTtcclxuICAgIH1cclxufSJdfQ==