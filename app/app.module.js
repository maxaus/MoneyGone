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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsb0RBQWtFO0FBQ2xFLDZEQUE4RDtBQUM5RCxnRUFBb0Y7QUFFcEYsMkNBQW9DO0FBRXBDLGlEQUE2QztBQUM3QyxnRkFBMkU7QUFDM0UsK0VBQTBFO0FBQzFFLGdGQUE0RTtBQUM1RSxrRUFBNkQ7QUFDN0QsNkVBQXdFO0FBQ3hFLG9EQUFnRDtBQXFCaEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxTQUFTO1FBbkJyQixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1Ysd0JBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1osNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsc0NBQTRCO2dCQUM1QiwrQ0FBd0I7Z0JBQ3hCLCtDQUF3QixDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO2FBQzNDO1lBQ0QsU0FBUyxFQUFFLENBQUMscUNBQWdCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XG5cbmltcG9ydCB7cm91dGVzfSBmcm9tIFwiLi9hcHAucm91dGVzXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0V4cGVuc2VGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWZvcm0vZXhwZW5zZS1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNb250aGx5TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbW9udGx5LWxpc3QvbW9udGhseS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge1NwZW50SXRlbVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zcGVudC1pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7QW5udWFsTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vYW5udWFsLWxpc3QvYW5udWFsLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1NlYXJjaFBpcGV9IGZyb20gXCIuL3NoYXJlZC9zZWFyY2gtcGlwZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTZWFyY2hQaXBlLFxuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEV4cGVuc2VGb3JtQ29tcG9uZW50LFxuICAgICAgICBNb250aGx5TGlzdENvbXBvbmVudCxcbiAgICAgICAgQW5udWFsTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1NwZW50SXRlbVNlcnZpY2VdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG4iXX0=