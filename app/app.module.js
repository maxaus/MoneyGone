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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsb0RBQWtFO0FBQ2xFLDZEQUE4RDtBQUU5RCwyQ0FBb0M7QUFFcEMsaURBQTZDO0FBQzdDLDBFQUFxRTtBQUNyRSwwRUFBcUU7QUFDckUsZ0ZBQTRFO0FBQzVFLGtFQUE2RDtBQUM3RCxtRkFBOEU7QUFDOUUsMERBQThEO0FBb0I5RDtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFsQnJCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWix5Q0FBa0I7Z0JBQ2xCLHlDQUFrQjtnQkFDbEIsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdCQUFjO2dCQUNkLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwrQ0FBd0I7Z0JBQ3hCLCtDQUF3QixDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO2FBQzNDO1lBQ0QsU0FBUyxFQUFFLENBQUMscUNBQWdCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuaW1wb3J0IHtyb3V0ZXN9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIjtcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7U3BlbnRGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9zcGVudC1mb3JtL3NwZW50LWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQge0xhc3RTcGVudENvbXBvbmVudH0gZnJvbSBcIi4vbGFzdC1zcGVudC9sYXN0LXNwZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge1NwZW50SXRlbVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zcGVudC1pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9udGhseUNhcmRzQ29tcG9uZW50fSBmcm9tIFwiLi9tb250aGx5LWNhcmRzL21vbnRobHktY2FyZHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0Ryb3BEb3duTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgU3BlbnRGb3JtQ29tcG9uZW50LFxuICAgICAgICBMYXN0U3BlbnRDb21wb25lbnQsXG4gICAgICAgIE1vbnRobHlDYXJkc0NvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBEcm9wRG93bk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtTcGVudEl0ZW1TZXJ2aWNlXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuIl19