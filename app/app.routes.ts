import { SpentFormComponent } from "./spent-form/spent-form.component";
import {LastSpentComponent} from "./last-spent/last-spent.component";

export const routes = [
    { path: "", redirectTo: "/last-spent", pathMatch: "full" },
    { path: "last-spent", component: LastSpentComponent },
    { path: "spent-form", component: SpentFormComponent }
];