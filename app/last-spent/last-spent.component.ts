import { Component } from "@angular/core";

@Component({
    selector: "app-last-spent",
    template: `
        <StackLayout>
            <Button text="Add" [nsRouterLink]="['/spent-form']"></Button>
        </StackLayout>
    `
})
export class LastSpentComponent { }