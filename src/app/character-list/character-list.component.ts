import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '/rick-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = []; // Armazena os personagens
  loading: boolean = false; // Controle de carregamento
  page: number = 1; // Página atual
  totalPages: number = 1; // Total de páginas
  searchTerm: string = ''; // Termo de busca

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  // Método para carregar personagens
  loadCharacters(): void {
    this.loading = true;
    this.rickMortyService.getCharacters(this.page, this.searchTerm).subscribe(
      (response) => {
        this.characters = [...this.characters, ...response.results]; // Adiciona mais personagens para scroll infinito
        this.totalPages = response.info.pages;
        this.loading = false;
      },
      (error) => {
        console.error('Erro ao carregar personagens:', error);
        this.loading = false;
      }
    );
  }

  // Carregar mais personagens ao rolar a página
  onScroll(): void {
    if (this.page < this.totalPages && !this.loading) {
      this.page++;
      this.loadCharacters();
    }
  }

  // Filtrar personagens
  searchCharacters(term: string): void {
    this.searchTerm = term;
    this.page = 1;
    this.characters = []; // Limpa a lista para carregar do zero
    this.loadCharacters();
  }
}
