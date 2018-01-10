"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsb0RBQWtFO0FBQ2xFLDZEQUE4RDtBQUU5RCwyQ0FBb0M7QUFFcEMsaURBQTZDO0FBQzdDLGdGQUEyRTtBQUMzRSwrRUFBMEU7QUFDMUUsZ0ZBQTRFO0FBQzVFLGtFQUE2RDtBQUM3RCw2RUFBd0U7QUFDeEUsb0RBQWdEO0FBb0JoRDtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFsQnJCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVix3QkFBVTtnQkFDViw0QkFBWTtnQkFDWiw2Q0FBb0I7Z0JBQ3BCLDZDQUFvQjtnQkFDcEIsMkNBQW1CO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwrQ0FBd0I7Z0JBQ3hCLCtDQUF3QixDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO2FBQzNDO1lBQ0QsU0FBUyxFQUFFLENBQUMscUNBQWdCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuaW1wb3J0IHtyb3V0ZXN9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIjtcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7RXhwZW5zZUZvcm1Db21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtZm9ybS9leHBlbnNlLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQge01vbnRobHlMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9tb250bHktbGlzdC9tb250aGx5LWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7U3BlbnRJdGVtU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NwZW50LWl0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHtBbm51YWxMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9hbm51YWwtbGlzdC9hbm51YWwtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7U2VhcmNoUGlwZX0gZnJvbSBcIi4vc2hhcmVkL3NlYXJjaC1waXBlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNlYXJjaFBpcGUsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgRXhwZW5zZUZvcm1Db21wb25lbnQsXG4gICAgICAgIE1vbnRobHlMaXN0Q29tcG9uZW50LFxuICAgICAgICBBbm51YWxMaXN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbU3BlbnRJdGVtU2VydmljZV0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cbiJdfQ==