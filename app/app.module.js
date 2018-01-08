"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var spent_form_component_1 = require("./spent-form/spent-form.component");
var last_spent_component_1 = require("./last-spent/last-spent.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var spent_item_service_1 = require("./shared/spent-item.service");
var monthly_cards_component_1 = require("./monthly-cards/monthly-cards.component");
var search_pipe_1 = require("./shared/search-pipe");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                search_pipe_1.SearchPipe,
                app_component_1.AppComponent,
                spent_form_component_1.SpentFormComponent,
                last_spent_component_1.LastSpentComponent,
                monthly_cards_component_1.MonthlyCardsComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
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
