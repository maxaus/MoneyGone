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
var angular_1 = require("nativescript-drop-down/angular");
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
                angular_1.DropDownModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsb0RBQWtFO0FBQ2xFLDZEQUE4RDtBQUU5RCwyQ0FBb0M7QUFFcEMsaURBQTZDO0FBQzdDLDBFQUFxRTtBQUNyRSwwRUFBcUU7QUFDckUsZ0ZBQTRFO0FBQzVFLGtFQUE2RDtBQUM3RCxtRkFBOEU7QUFDOUUsMERBQThEO0FBQzlELG9EQUFnRDtBQXFCaEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxTQUFTO1FBbkJyQixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1Ysd0JBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1oseUNBQWtCO2dCQUNsQix5Q0FBa0I7Z0JBQ2xCLCtDQUFxQjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3QkFBYztnQkFDZCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsK0NBQXdCO2dCQUN4QiwrQ0FBd0IsQ0FBQyxPQUFPLENBQUMsbUJBQU0sQ0FBQzthQUMzQztZQUNELFNBQVMsRUFBRSxDQUFDLHFDQUFnQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1lBQzNCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQUFBLEFBREQsSUFDQztBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbmltcG9ydCB7cm91dGVzfSBmcm9tIFwiLi9hcHAucm91dGVzXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1NwZW50Rm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vc3BlbnQtZm9ybS9zcGVudC1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMYXN0U3BlbnRDb21wb25lbnR9IGZyb20gXCIuL2xhc3Qtc3BlbnQvbGFzdC1zcGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtTcGVudEl0ZW1TZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc3BlbnQtaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQge01vbnRobHlDYXJkc0NvbXBvbmVudH0gZnJvbSBcIi4vbW9udGhseS1jYXJkcy9tb250aGx5LWNhcmRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEcm9wRG93bk1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuaW1wb3J0IHtTZWFyY2hQaXBlfSBmcm9tIFwiLi9zaGFyZWQvc2VhcmNoLXBpcGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VhcmNoUGlwZSxcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBTcGVudEZvcm1Db21wb25lbnQsXG4gICAgICAgIExhc3RTcGVudENvbXBvbmVudCxcbiAgICAgICAgTW9udGhseUNhcmRzQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1NwZW50SXRlbVNlcnZpY2VdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG4iXX0=