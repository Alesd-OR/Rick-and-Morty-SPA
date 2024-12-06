import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch(term: string): void {
    this.searchTerm = term;
    this.router.navigate([], { queryParams: { search: term } });
  }
}
