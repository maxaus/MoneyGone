"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expense_form_component_1 = require("./expense-form/expense-form.component");
var monthly_list_component_1 = require("./montly-list/monthly-list.component");
var annual_list_component_1 = require("./annual-list/annual-list.component");
exports.routes = [
    { path: "", redirectTo: "/annual-list", pathMatch: "full" },
    { path: "monthly-list/:year/:month", component: monthly_list_component_1.MonthlyListComponent },
    { path: "annual-list", component: annual_list_component_1.AnnualListComponent },
    { path: "expense-form", component: expense_form_component_1.ExpenseFormComponent },
    { path: "expense-form/:id", component: expense_form_component_1.ExpenseFormComponent }
];
