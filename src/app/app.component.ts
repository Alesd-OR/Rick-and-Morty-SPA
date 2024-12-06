import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rick-and-morty-dashboard'; // Adicionando a propriedade title
  currentPage: string = 'characters'; // Página inicial

  navigateTo(page: string): void {
    this.currentPage = page;
  }
}
