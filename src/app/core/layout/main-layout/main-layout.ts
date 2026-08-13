import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    Header,
    Sidebar,
    Footer,
  ],
  templateUrl: './main-layout.html',
})
export class MainLayout {
  isSidebarOpen = signal(true);

  toggleSidebar() {
    this.isSidebarOpen.update((isOpen) => !isOpen);
  }
}