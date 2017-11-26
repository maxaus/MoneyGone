import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptFormsModule} from "nativescript-angular/forms"
import {NativeScriptRouterModule} from "nativescript-angular";

import {routes} from "./app.routes";

import {AppComponent} from "./app.component";
import {SpentFormComponent} from "./spent-form/spent-form.component";
import {LastSpentComponent} from "./last-spent/last-spent.component";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {SpentItemService} from "./shared/spent-item.service";
import {MonthlyCardsComponent} from "./monthly-cards/monthly-cards.component";

@NgModule({
    declarations: [
        AppComponent,
        SpentFormComponent,
        LastSpentComponent,
        MonthlyCardsComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [SpentItemService],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {
}

