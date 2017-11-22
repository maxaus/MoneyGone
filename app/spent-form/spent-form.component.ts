import {Component} from "@angular/core";

@Component({
    selector: "app-spent-form",
    templateUrl: "./spent-form.component.html",
    styleUrls: ["./spent-form.component.css"],
})
export class SpentFormComponent {

    submit() {
        console.log("Save");
    }
}