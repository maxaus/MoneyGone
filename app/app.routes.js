"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spent_form_component_1 = require("./spent-form/spent-form.component");
var last_spent_component_1 = require("./last-spent/last-spent.component");
var monthly_cards_component_1 = require("./monthly-cards/monthly-cards.component");
exports.routes = [
    { path: "", redirectTo: "/monthly-cards", pathMatch: "full" },
    { path: "last-spent/:year/:month", component: last_spent_component_1.LastSpentComponent },
    { path: "monthly-cards", component: monthly_cards_component_1.MonthlyCardsComponent },
    { path: "spent-form", component: spent_form_component_1.SpentFormComponent },
    { path: "spent-form/:id", component: spent_form_component_1.SpentFormComponent }
];
