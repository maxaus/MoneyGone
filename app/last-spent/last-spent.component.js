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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1zcGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXN0LXNwZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtRUFBOEQ7QUFFOUQsNkRBQWlFO0FBQ2pFLCtCQUFpQztBQVNqQztJQVFJLDRCQUFvQixnQkFBa0MsRUFBVSxnQkFBa0MsRUFBVSxTQUFvQjtRQUFoSSxpQkFTQztRQVRtQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFOekgsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQU9kLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDOUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDN0QsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLEVBQUU7UUFBYixpQkFLQztRQUpHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2FBQzNCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF0RFEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBU3dDLHFDQUFnQixFQUE0Qix1Q0FBZ0IsRUFBcUIsZ0NBQVM7T0FSdkgsa0JBQWtCLENBdUQ5QjtJQUFELHlCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTcGVudEl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NwZW50LWl0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge1NwZW50SXRlbX0gZnJvbSBcIi4uL3NoYXJlZC9zcGVudC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7UGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7U3dpcGVHZXN0dXJlRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbGFzdC1zcGVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGFzdC1zcGVudC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xhc3Qtc3BlbnQuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RTcGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zID0gW107XHJcbiAgICBwdWJsaWMgbW9udGhMYWJlbDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXJ0RGF0ZTpEYXRlO1xyXG4gICAgcHJpdmF0ZSBlbmREYXRlOkRhdGU7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BlbnRJdGVtU2VydmljZTogU3BlbnRJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB5ZWFyID0gK3BhcmFtc1tcInllYXJcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSArcGFyYW1zW1wibW9udGhcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG1vbWVudCh5ZWFyICsgJy0nICsgbW9udGggKyAnLTAxJykuc3RhcnRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IG1vbWVudCh5ZWFyICsgJy0nICsgbW9udGggKyAnLTAxJykuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xvYWRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkSXRlbXMgKCkge1xyXG4gICAgICAgIHRoaXMubW9udGhMYWJlbCA9IG1vbWVudCh0aGlzLnN0YXJ0RGF0ZSkuZm9ybWF0KCdNTU0sIFlZWVknKTtcclxuICAgICAgICB0aGlzLnNwZW50SXRlbVNlcnZpY2UuZ2V0QnlEYXRlUmFuZ2UodGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSlcclxuICAgICAgICAgICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcmV2TW9udGggKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KHRoaXMuc3RhcnREYXRlKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmVuZERhdGUpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dOZXh0TW9udGggKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KHRoaXMuc3RhcnREYXRlKS5hZGQoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICB0aGlzLmVuZERhdGUgPSBtb21lbnQodGhpcy5lbmREYXRlKS5hZGQoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fbG9hZEl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEl0ZW0oaWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT3BlbiBlZGl0IGZvcm0gZm9yIGl0ZW0gd2l0aCBJRDonICsgaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc3BlbnQtZm9ybVwiLCBpZF0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVJdGVtKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zcGVudEl0ZW1TZXJ2aWNlLmRlbGV0ZShpZClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19