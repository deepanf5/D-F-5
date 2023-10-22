import { Component, OnInit } from '@angular/core';
import { faUserNinja, faGamepad, faBlog } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  blockedPanel: boolean = true;
  ninja = faUserNinja;
  game = faGamepad;
  blog = faBlog

  ngOnInit(): void {
    this.items = [
      { label: 'NGX-superAdmin', icon: 'pi pi-fw pi-user' },
      { label: 'Game-hub', icon: 'pi pi-fw pi-play' }
    ];
    this.activeItem = this.items[0];
  }

}
