import { Component } from "@angular/core";

@Component({
	selector: "app-client-form-modal",
	templateUrl: "./client-form-modal.component.html",
	styleUrls: ["./client-form-modal.component.scss"],
})
export class ClientFormModalComponent {
	items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
	expandedIndex = 0;
}
