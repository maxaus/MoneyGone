import {Component} from "@angular/core";

@Component({
    selector: "app-spent-form",
    template: `
        <StackLayout>
            <Label text="Add item" class="title"></Label>
            <Label text="Cancel" class="title" [nsRouterLink]="['/last-spent']"></Label>
        </StackLayout>
    `
})
export class SpentFormComponent {
}