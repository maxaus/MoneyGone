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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                spent_form_component_1.SpentFormComponent,
                last_spent_component_1.LastSpentComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsb0RBQWtFO0FBQ2xFLDZEQUE4RDtBQUU5RCwyQ0FBb0M7QUFFcEMsaURBQTZDO0FBQzdDLDBFQUFxRTtBQUNyRSwwRUFBcUU7QUFDckUsZ0ZBQTRFO0FBQzVFLGtFQUE2RDtBQWtCN0Q7SUFBQTtJQUNBLENBQUM7SUFEWSxTQUFTO1FBaEJyQixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1oseUNBQWtCO2dCQUNsQix5Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLCtDQUF3QjtnQkFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLG1CQUFNLENBQUM7YUFDM0M7WUFDRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztZQUMzQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5pbXBvcnQge3JvdXRlc30gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTcGVudEZvcm1Db21wb25lbnR9IGZyb20gXCIuL3NwZW50LWZvcm0vc3BlbnQtZm9ybS5jb21wb25lbnRcIjtcbmltcG9ydCB7TGFzdFNwZW50Q29tcG9uZW50fSBmcm9tIFwiLi9sYXN0LXNwZW50L2xhc3Qtc3BlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7U3BlbnRJdGVtU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NwZW50LWl0ZW0uc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFNwZW50Rm9ybUNvbXBvbmVudCxcbiAgICAgICAgTGFzdFNwZW50Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbU3BlbnRJdGVtU2VydmljZV0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cbiJdfQ==