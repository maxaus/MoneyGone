import {SpentFormComponent} from "./spent-form/spent-form.component";
import {LastSpentComponent} from "./last-spent/last-spent.component";
import {MonthlyCardsComponent} from "./monthly-cards/monthly-cards.component";

export const routes = [
    {path: "", redirectTo: "/monthly-cards", pathMatch: "full"},
    {path: "last-spent/:year/:month", component: LastSpentComponent},
    {path: "monthly-cards", component: MonthlyCardsComponent},
    {path: "spent-form", component: SpentFormComponent},
    {path: "spent-form/:id", component: SpentFormComponent}
];