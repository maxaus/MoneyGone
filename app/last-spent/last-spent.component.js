"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spent_item_service_1 = require("../shared/spent-item.service");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs_1 = require("ui/dialogs");
var moment = require("moment");
var LastSpentComponent = (function () {
    function LastSpentComponent(spentItemService, routerExtensions, pageRoute) {
        var _this = this;
        this.spentItemService = spentItemService;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.items = [];
        this.deleteConfirmOptions = {
            title: "Confirm Delete",
            message: "Do you really want to remove this item?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        };
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
        dialogs_1.confirm(this.deleteConfirmOptions).then(function (result) {
            if (result) {
                _this.spentItemService.delete(id)
                    .then(function () {
                    _this._loadItems();
                });
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
        __metadata("design:paramtypes", [spent_item_service_1.SpentItemService, nativescript_angular_1.RouterExtensions, nativescript_angular_1.PageRoute])
    ], LastSpentComponent);
    return LastSpentComponent;
}());
exports.LastSpentComponent = LastSpentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1zcGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXN0LXNwZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtRUFBOEQ7QUFDOUQsNkRBQWlFO0FBQ2pFLHNDQUFxQztBQUNyQywrQkFBaUM7QUFRakM7SUFhSSw0QkFBb0IsZ0JBQWtDLEVBQVUsZ0JBQWtDLEVBQVUsU0FBb0I7UUFBaEksaUJBU0M7UUFUbUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBWHpILFVBQUssR0FBRyxFQUFFLENBQUM7UUFJVix5QkFBb0IsR0FBRztZQUMzQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE9BQU8sRUFBRSx5Q0FBeUM7WUFDbEQsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QixDQUFDO1FBR0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5RSxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENB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UztPQWJ2SCxrQkFBa0IsQ0FnRTlCO0lBQUQseUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1NwZW50SXRlbVNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc3BlbnQtaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtbGFzdC1zcGVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGFzdC1zcGVudC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xhc3Qtc3BlbnQuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RTcGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zID0gW107XHJcbiAgICBwdWJsaWMgbW9udGhMYWJlbDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXJ0RGF0ZTpEYXRlO1xyXG4gICAgcHJpdmF0ZSBlbmREYXRlOkRhdGU7XHJcbiAgICBwcml2YXRlIGRlbGV0ZUNvbmZpcm1PcHRpb25zID0ge1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gRGVsZXRlXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gcmVtb3ZlIHRoaXMgaXRlbT9cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BlbnRJdGVtU2VydmljZTogU3BlbnRJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB5ZWFyID0gK3BhcmFtc1tcInllYXJcIl07XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9udGggPSArcGFyYW1zW1wibW9udGhcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG1vbWVudCh5ZWFyICsgJy0nICsgbW9udGggKyAnLTAxJykuc3RhcnRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IG1vbWVudCh5ZWFyICsgJy0nICsgbW9udGggKyAnLTAxJykuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xvYWRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkSXRlbXMgKCkge1xyXG4gICAgICAgIHRoaXMubW9udGhMYWJlbCA9IG1vbWVudCh0aGlzLnN0YXJ0RGF0ZSkuZm9ybWF0KCdNTU0sIFlZWVknKTtcclxuICAgICAgICB0aGlzLnNwZW50SXRlbVNlcnZpY2UuZ2V0QnlEYXRlUmFuZ2UodGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSlcclxuICAgICAgICAgICAgLnRoZW4oKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcmV2TW9udGggKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KHRoaXMuc3RhcnREYXRlKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmVuZERhdGUpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpLnRvRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dOZXh0TW9udGggKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KHRoaXMuc3RhcnREYXRlKS5hZGQoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKS50b0RhdGUoKTtcclxuICAgICAgICB0aGlzLmVuZERhdGUgPSBtb21lbnQodGhpcy5lbmREYXRlKS5hZGQoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJykudG9EYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fbG9hZEl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEl0ZW0oaWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT3BlbiBlZGl0IGZvcm0gZm9yIGl0ZW0gd2l0aCBJRDonICsgaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc3BlbnQtZm9ybVwiLCBpZF0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVJdGVtKGlkKSB7XHJcbiAgICAgICAgY29uZmlybSh0aGlzLmRlbGV0ZUNvbmZpcm1PcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVudEl0ZW1TZXJ2aWNlLmRlbGV0ZShpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=