import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    if (window.innerWidth < 768) {
      this.isSidebarOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isSidebarOpen = window.innerWidth >= 768;
  }

  logout(): void {
    console.log('User logged out');
  }
}
