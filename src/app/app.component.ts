import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prime-v1'
  items!: MenuItem[];
  currentLink = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-compass',
        expanded: this.checkActiveState(['/home', '/search']),
        items: [
          {
            label: 'Chart',
            routerLink: ['/home'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Search',
            routerLink: ['/search'],
            routerLinkActiveOptions: { exact: true },
          }
        ]
      },
      {
        label: 'Store',
        icon: 'pi pi-shopping-bag',
        expanded: this.checkActiveState(['/shoes', '/shirt', '/trousers', '/jewels']),
        items: [
          {
            label: 'Shoes',
            routerLink: ['/shoes'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Shirt',
            routerLink: ['/shirt'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Trousers',
            routerLink: ['/trousers'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Jewels',
            routerLink: ['/jewels'],
            routerLinkActiveOptions: { exact: true },
          },
        ]
      },
      {
        label: 'Setting',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Account',
          },
          {
            label: 'Orthers',
          },
        ]
      },
    ];
  }

  checkActiveState(givenLink: string[]): boolean {
    if (givenLink.indexOf(window.location.pathname) === -1) {
      return false;
    } else {
      return true;
    }
  }

}
