import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ClientFormModalComponent } from "../client-form-modal/client-form-modal.component";

interface Client {
	id: number;
	name: string;
	email: string;
	phone: string;
}

@Component({
	selector: "app-clients",
	templateUrl: "./clients.component.html",
	styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent {
	newClientName: string = "";
	newClientEmail: string = "";
	newClientPhone: string = "";
	modalRef?: BsModalRef;

	selectedClient: Client | null = null;
	clients: Client[] = [
		{
			id: 1,
			name: "John Doe",
			email: "john.doe@example.com",
			phone: "1234567890",
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "jane.smith@example.com",
			phone: "9876543210",
		},
		{
			id: 3,
			name: "Alice Johnson",
			email: "alice.johnson@example.com",
			phone: "5551234567",
		},
		{
			id: 4,
			name: "Bob Brown",
			email: "bob.brown@example.com",
			phone: "7779876543",
		},
	];

	constructor(private modalService: BsModalService) {}

	openClientFormModal(): void {
		this.modalRef = this.modalService.show(ClientFormModalComponent, { class: "modal-lg" });
	}

	onSubmit(clientForm: NgForm) {
		if (clientForm.invalid) {
			Object.values(clientForm.controls).forEach((control) => control.markAllAsTouched());
			return;
		}
		// Add new client
		const newClient: Client = {
			id: this.getNextClientId(),
			name: clientForm.value.clientName,
			email: clientForm.value.contactEmail,
			phone: clientForm.value.phoneNumber,
		};
		this.clients.push(newClient);

		// Clear the form
		clientForm.resetForm();
	}

	editClient(client: Client) {
		// Make a copy of the selected client for editing
		this.selectedClient = { ...client };
	}

	updateClient() {
		// Update the client in the list
		const index = this.clients.findIndex((client) => client.id === this.selectedClient?.id);
		if (index !== -1 && this.selectedClient) {
			this.clients[index] = { ...this.selectedClient };
			this.selectedClient = null; // Clear the selectedClient for editing
		}
	}

	cancelEdit() {
		// Clear the selectedClient for editing without saving changes
		this.selectedClient = null;
	}

	deleteClient(client: Client) {
		// Remove the client from the list
		const index = this.clients.findIndex((c) => c.id === client.id);
		if (index !== -1) {
			this.clients.splice(index, 1);
		}
	}

	private getNextClientId(): number {
		// Generate a new unique client ID
		return this.clients.length > 0 ? Math.max(...this.clients.map((client) => client.id)) + 1 : 1;
	}
}
