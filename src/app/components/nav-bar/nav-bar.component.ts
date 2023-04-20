import { Component } from '@angular/core';
import { MenuItem, SelectItemGroup } from 'primeng/api';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
 // Menu Items
 home: string = `Home`;
 work: string = `Work`;
 experiment: string = `Experiment`;
 configPlaceHolder: string = `Config`;
 items: MenuItem[] = [
   { label: `${this.home}`, icon: 'pi pi-fw pi-home', routerLink: '/home' },
   { label: `${this.work}`, icon: 'pi pi-fw pi-file', routerLink: '/work' },
   { label: `${this.experiment}`, icon: 'pi pi-fw pi-pencil', routerLink: '/experiment' },
 ];

 value: string = "md-dark-indigo";

//  config: MenuItem[] = [
//    {
//      label: 'Locales',
//      items: [
//        { 
//          label: 'English', disabled: true,
//          command: () => { this.changeLocale('en-US') }
//        },
//        { 
//          label: 'Português(Brasil)', disabled: true, 
//          command: () => { this.changeLocale('pt-BR') }
//        },
//      ]
//    },
//    {
//      label: 'Theme',
//      items: [
//        { label: 'Dark', command: () => {
//          this.changeTheme('md-dark-indigo') }},
//        { label: 'Light', command: () => {
//          this.changeTheme('md-light-indigo') }}
//      ]
//    }
//  ];

 constructor(
   private themeService: ThemeService
 ) { }

 changeTheme(theme: string) {
   this.themeService.switchTheme(theme);
 }

 changeLocale(locale: string) {
   // When the visitor selects Portuguese, we redirect to `/pt`
  //  window.location.href = `/${this.activeLocale}`;
 }
}
