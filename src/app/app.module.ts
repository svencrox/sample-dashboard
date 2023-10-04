import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ClientsComponent } from "./clients/clients.component";
import { UsersComponent } from "./users/users.component";
import { CampaignsComponent } from "./campaigns/campaigns.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { ModalModule } from "ngx-bootstrap/modal";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [AppComponent, DashboardComponent, ClientsComponent, UsersComponent, CampaignsComponent, SidebarComponent],
	imports: [
		FormsModule,
		BrowserModule,
		MatIconModule,
		MatButtonModule,
		AppRoutingModule,
		MatExpansionModule,
		CdkAccordionModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatFormFieldModule,
		ModalModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
