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
        this._loadItems();
    };
    LastSpentComponent.prototype._loadItems = function () {
        var _this = this;
        this.spentItemService.getAll()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1zcGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXN0LXNwZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtRUFBOEQ7QUFFOUQsNkRBQXNEO0FBUXREO0lBSUksNEJBQW9CLGdCQUFrQyxFQUFVLGdCQUFrQztRQUE5RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUYzRixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBR2xCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1Q0FBVSxHQUFWO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2FBQ3pCLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLEVBQUU7UUFBYixpQkFLQztRQUpHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2FBQzNCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUE3QlEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBS3dDLHFDQUFnQixFQUE0Qix1Q0FBZ0I7T0FKekYsa0JBQWtCLENBOEI5QjtJQUFELHlCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTcGVudEl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NwZW50LWl0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge1NwZW50SXRlbX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1sYXN0LXNwZW50XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sYXN0LXNwZW50LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbGFzdC1zcGVudC5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFzdFNwZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXMgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwZW50SXRlbVNlcnZpY2U6IFNwZW50SXRlbVNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xvYWRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkSXRlbXMgKCkge1xyXG4gICAgICAgIHRoaXMuc3BlbnRJdGVtU2VydmljZS5nZXRBbGwoKVxyXG4gICAgICAgICAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEl0ZW0oaWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT3BlbiBlZGl0IGZvcm0gZm9yIGl0ZW0gd2l0aCBJRDonICsgaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc3BlbnQtZm9ybVwiLCBpZF0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVJdGVtKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zcGVudEl0ZW1TZXJ2aWNlLmRlbGV0ZShpZClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19