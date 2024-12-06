import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  image: string;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  // Método para buscar personagens
  getCharacters(page: number, searchTerm: string = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('name', searchTerm); // Filtra por nome, se houver pesquisa

    return this.http.get<any>(`${this.baseUrl}character/`, { params });
  }

  // Método para buscar episódios
  getEpisodes(page: number, searchTerm: string = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('name', searchTerm); // Filtra por nome, se houver pesquisa

    return this.http.get<any>(`${this.baseUrl}episode/`, { params });
  }

  // Método para buscar detalhes de um personagem
  getCharacterDetails(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}character/${id}`);
  }

  // Método para buscar detalhes de um episódio
  getEpisodeDetails(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.baseUrl}episode/${id}`);
  }
}
