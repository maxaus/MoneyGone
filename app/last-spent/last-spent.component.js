"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spent_item_service_1 = require("../shared/spent-item.service");
var nativescript_angular_1 = require("nativescript-angular");
var moment = require("moment");
var LastSpentComponent = (function () {
    function LastSpentComponent(spentItemService, routerExtensions, pageRoute) {
        var _this = this;
        this.spentItemService = spentItemService;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.items = [];
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
        this._loadItems();
    };
    LastSpentComponent.prototype._loadItems = function () {
        var _this = this;
        this.monthLabel = moment(this.startDate).format('MMM, YYYY');
        this.spentItemService.getByDateRange(this.startDate, this.endDate)
            .then(function (items) {
            console.log(JSON.stringify(items));
            _this.items = items;
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
        __metadata("design:paramtypes", [spent_item_service_1.SpentItemService, nativescript_angular_1.RouterExtensions, nativescript_angular_1.PageRoute])
    ], LastSpentComponent);
    return LastSpentComponent;
}());
exports.LastSpentComponent = LastSpentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1zcGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXN0LXNwZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtRUFBOEQ7QUFFOUQsNkRBQWlFO0FBQ2pFLCtCQUFpQztBQVFqQztJQVFJLDRCQUFvQixnQkFBa0MsRUFBVSxnQkFBa0MsRUFBVSxTQUFvQjtRQUFoSSxpQkFTQztRQVRtQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFOekgsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQU9kLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDOUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDN0QsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLEVBQUU7UUFBYixpQkFLQztRQUpHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2FBQzNCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF0RFEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBU3dDLHFDQUFnQixFQUE0Qix1Q0FBZ0IsRUFBcUIsZ0NBQVM7T0FSdkgsa0JBQWtCLENBdUQ5QjtJQUFELHlCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTcGVudEl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NwZW50LWl0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge1NwZW50SXRlbX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7UGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1sYXN0LXNwZW50XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sYXN0LXNwZW50LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbGFzdC1zcGVudC5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFzdFNwZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXMgPSBbXTtcclxuICAgIHB1YmxpYyBtb250aExhYmVsOnN0cmluZztcclxuICAgIHByaXZhdGUgc3RhcnREYXRlOkRhdGU7XHJcbiAgICBwcml2YXRlIGVuZERhdGU6RGF0ZTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGVudEl0ZW1TZXJ2aWNlOiBTcGVudEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSArcGFyYW1zW1wieWVhclwiXTtcclxuICAgICAgICAgICAgICAgIGxldCBtb250aCA9ICtwYXJhbXNbXCJtb250aFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KHllYXIgKyAnLScgKyBtb250aCArICctMDEnKS5zdGFydE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gbW9tZW50KHllYXIgKyAnLScgKyBtb250aCArICctMDEnKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbG9hZEl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2xvYWRJdGVtcyAoKSB7XHJcbiAgICAgICAgdGhpcy5tb250aExhYmVsID0gbW9tZW50KHRoaXMuc3RhcnREYXRlKS5mb3JtYXQoJ01NTSwgWVlZWScpO1xyXG4gICAgICAgIHRoaXMuc3BlbnRJdGVtU2VydmljZS5nZXRCeURhdGVSYW5nZSh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlKVxyXG4gICAgICAgICAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1ByZXZNb250aCAoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQodGhpcy5zdGFydERhdGUpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgdGhpcy5lbmREYXRlID0gbW9tZW50KHRoaXMuZW5kRGF0ZSkuc3VidHJhY3QoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fbG9hZEl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd05leHRNb250aCAoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQodGhpcy5zdGFydERhdGUpLmFkZCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmVuZERhdGUpLmFkZCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICB0aGlzLl9sb2FkSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0SXRlbShpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPcGVuIGVkaXQgZm9ybSBmb3IgaXRlbSB3aXRoIElEOicgKyBpZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zcGVudC1mb3JtXCIsIGlkXSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUl0ZW0oaWQpIHtcclxuICAgICAgICB0aGlzLnNwZW50SXRlbVNlcnZpY2UuZGVsZXRlKGlkKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=