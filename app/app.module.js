"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var expense_form_component_1 = require("./expense-form/expense-form.component");
var monthly_list_component_1 = require("./montly-list/monthly-list.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var spent_item_service_1 = require("./shared/spent-item.service");
var annual_list_component_1 = require("./annual-list/annual-list.component");
var search_pipe_1 = require("./shared/search-pipe");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                search_pipe_1.SearchPipe,
                app_component_1.AppComponent,
                expense_form_component_1.ExpenseFormComponent,
                monthly_list_component_1.MonthlyListComponent,
                annual_list_component_1.AnnualListComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routes_1.routes)
            ],
            providers: [spent_item_service_1.SpentItemService],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
