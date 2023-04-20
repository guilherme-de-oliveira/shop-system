import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  github: string = `guilherme-de-oliveira`;
  linkedin: string =`guilherme-h-de-oliveira`;
  email: string =`guihenrique_oliveira@hotmail.com`;

  items: MenuItem[] = [
    {title: 'Github', label: `${this.github}`, icon: 'pi pi-fw pi-github', url: 'https://github.com/guilherme-de-oliveira'},
    {title: 'Linkedin', label: `${this.linkedin}`, icon: 'pi pi-fw pi-linkedin', url: 'https://www.linkedin.com/in/guilherme-h-de-oliveira'},
    {title: 'Email', label: `${this.email}`, icon: 'pi pi-fw pi-id-card', url: 'guihenrique_oliveira@hotmail.com'},
  ];
}
