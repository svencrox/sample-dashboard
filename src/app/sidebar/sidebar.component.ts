import { Component, HostListener, OnInit } from "@angular/core";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
	isSidebarOpen: boolean | undefined;
	ngOnInit(): void {
		this.checkScreenSize();
	}

	toggleSidebar(): void {
		this.isSidebarOpen = !this.isSidebarOpen;
	}

	closeSidebar(): void {
		if (window.innerWidth < 768) {
			this.isSidebarOpen = false;
		}
	}

	@HostListener("window:resize", ["$event"])
	onWindowResize(event: Event): void {
		this.checkScreenSize();
	}

	checkScreenSize(): void {
		window.innerWidth >= 768 ? (this.isSidebarOpen = true) : (this.isSidebarOpen = false);
	}
}
