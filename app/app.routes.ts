import {ExpenseFormComponent} from "./expense-form/expense-form.component";
import {MonthlyListComponent} from "./montly-list/monthly-list.component";
import {AnnualListComponent} from "./annual-list/annual-list.component";

export const routes = [
    {path: "", redirectTo: "/annual-list", pathMatch: "full"},
    {path: "monthly-list/:year/:month", component: MonthlyListComponent},
    {path: "annual-list", component: AnnualListComponent},
    {path: "expense-form", component: ExpenseFormComponent},
    {path: "expense-form/:id", component: ExpenseFormComponent}
];