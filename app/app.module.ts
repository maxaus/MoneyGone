import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular";

import {routes} from "./app.routes";

import {AppComponent} from "./app.component";
import {SpentFormComponent} from "./spent-form/spent-form.component";
import {LastSpentComponent} from "./last-spent/last-spent.component";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

@NgModule({
    declarations: [
        AppComponent,
        SpentFormComponent,
        LastSpentComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {
}

