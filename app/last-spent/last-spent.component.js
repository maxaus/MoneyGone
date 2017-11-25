"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spent_item_service_1 = require("../shared/spent-item.service");
var nativescript_angular_1 = require("nativescript-angular");
var LastSpentComponent = (function () {
    function LastSpentComponent(spentItemService, routerExtensions) {
        this.spentItemService = spentItemService;
        this.routerExtensions = routerExtensions;
        this.items = [];
    }
    LastSpentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spentItemService.getAll()
            .then(function (items) {
            console.log(JSON.stringify(items));
            _this.items = items;
        });
    };
    LastSpentComponent.prototype.editItem = function (id) {
        console.log('Open edit form for item with ID:' + id);
        this.routerExtensions.navigate(["/spent-form", id], {
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
    };
    LastSpentComponent = __decorate([
        core_1.Component({
            selector: "app-last-spent",
            moduleId: module.id,
            templateUrl: "./last-spent.component.html",
            styleUrls: ["./last-spent.component.css"],
        }),
        __metadata("design:paramtypes", [spent_item_service_1.SpentItemService, nativescript_angular_1.RouterExtensions])
    ], LastSpentComponent);
    return LastSpentComponent;
}());
exports.LastSpentComponent = LastSpentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1zcGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXN0LXNwZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtRUFBOEQ7QUFFOUQsNkRBQXNEO0FBUXREO0lBSUksNEJBQW9CLGdCQUFrQyxFQUFVLGdCQUFrQztRQUE5RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUYzRixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBR2xCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2FBQ3pCLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNoRCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBeEJRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQUt3QyxxQ0FBZ0IsRUFBNEIsdUNBQWdCO09BSnpGLGtCQUFrQixDQXlCOUI7SUFBRCx5QkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U3BlbnRJdGVtU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTcGVudEl0ZW19IGZyb20gXCIuLi9zaGFyZWQvc3BlbnQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbGFzdC1zcGVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGFzdC1zcGVudC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xhc3Qtc3BlbnQuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RTcGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGVudEl0ZW1TZXJ2aWNlOiBTcGVudEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwZW50SXRlbVNlcnZpY2UuZ2V0QWxsKClcclxuICAgICAgICAgICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRJdGVtKGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09wZW4gZWRpdCBmb3JtIGZvciBpdGVtIHdpdGggSUQ6JyArIGlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NwZW50LWZvcm1cIiwgaWRdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=