import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptFormsModule} from "nativescript-angular/forms"
import {NativeScriptRouterModule} from "nativescript-angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";

import {routes} from "./app.routes";

import {AppComponent} from "./app.component";
import {ExpenseFormComponent} from "./expense-form/expense-form.component";
import {MonthlyListComponent} from "./montly-list/monthly-list.component";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {SpentItemService} from "./shared/spent-item.service";
import {AnnualListComponent} from "./annual-list/annual-list.component";
import {SearchPipe} from "./shared/search-pipe";

@NgModule({
    declarations: [
        SearchPipe,
        AppComponent,
        ExpenseFormComponent,
        MonthlyListComponent,
        AnnualListComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [SpentItemService],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {
}

