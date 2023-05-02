import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  home: string = `Home`;
  items: MenuItem[] = [
    { label: `${this.home}`, icon: 'pi pi-fw pi-home', routerLink: '/home' }
  ];

}
