"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spent_item_service_1 = require("../shared/spent-item.service");
var nativescript_angular_1 = require("nativescript-angular");
var moment = require("moment");
var LastSpentComponent = (function () {
    function LastSpentComponent(spentItemService, routerExtensions) {
        this.spentItemService = spentItemService;
        this.routerExtensions = routerExtensions;
        this.items = [];
    }
    LastSpentComponent.prototype.ngOnInit = function () {
        this._loadItems();
    };
    LastSpentComponent.prototype._loadItems = function () {
        var _this = this;
        this.spentItemService.getByDateRange(moment().startOf('month').toDate(), moment().endOf('month').toDate())
            .then(function (items) {
            console.log(JSON.stringify(items));
            _this.items = items;
        });
    };
    LastSpentComponent.prototype.editItem = function (id) {
        console.log('Open edit form for item with ID:' + id);
        this.routerExtensions.navigate(["/spent-form", id], {});
    };
    LastSpentComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spentItemService.delete(id)
            .then(function () {
            _this._loadItems();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1zcGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXN0LXNwZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtRUFBOEQ7QUFFOUQsNkRBQXNEO0FBQ3RELCtCQUFpQztBQVFqQztJQUlJLDRCQUFvQixnQkFBa0MsRUFBVSxnQkFBa0M7UUFBOUUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGM0YsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUdsQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JHLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLEVBQUU7UUFBYixpQkFLQztRQUpHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2FBQzNCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUE3QlEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBS3dDLHFDQUFnQixFQUE0Qix1Q0FBZ0I7T0FKekYsa0JBQWtCLENBOEI5QjtJQUFELHlCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTcGVudEl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NwZW50LWl0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge1NwZW50SXRlbX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbGFzdC1zcGVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGFzdC1zcGVudC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xhc3Qtc3BlbnQuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RTcGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGVudEl0ZW1TZXJ2aWNlOiBTcGVudEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2FkSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZEl0ZW1zICgpIHtcclxuICAgICAgICB0aGlzLnNwZW50SXRlbVNlcnZpY2UuZ2V0QnlEYXRlUmFuZ2UobW9tZW50KCkuc3RhcnRPZignbW9udGgnKS50b0RhdGUoKSwgbW9tZW50KCkuZW5kT2YoJ21vbnRoJykudG9EYXRlKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlZGl0SXRlbShpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPcGVuIGVkaXQgZm9ybSBmb3IgaXRlbSB3aXRoIElEOicgKyBpZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zcGVudC1mb3JtXCIsIGlkXSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUl0ZW0oaWQpIHtcclxuICAgICAgICB0aGlzLnNwZW50SXRlbVNlcnZpY2UuZGVsZXRlKGlkKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=