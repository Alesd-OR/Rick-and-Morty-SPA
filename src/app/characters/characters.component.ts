import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickMortyService } from '../services/rick-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  loading: boolean = false;
  currentPage: number = 1;
  searchQuery: string = '';

  constructor(private rickMortyService: RickMortyService, private router: Router) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  // Método para obter a lista de personagens
  getCharacters(): void {
    this.loading = true;
    this.rickMortyService.getCharacters(this.currentPage, this.searchQuery).subscribe(
      data => {
        this.characters = data.results;
        this.loading = false;
      },
      error => {
        console.error('Erro ao carregar personagens:', error);
        this.loading = false;
      }
    );
  }

  // Método de navegação para a página de detalhes do personagem
  goToCharacterDetails(id: number): void {
    this.router.navigate([`/character/${id}`]);
  }
}
