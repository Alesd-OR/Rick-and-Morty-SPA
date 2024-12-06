import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  // Método para obter a lista de personagens
  getCharacters(page: number = 1, name: string = ''): Observable<any> {
    const url = `${this.apiUrl}/character?page=${page}&name=${name}`;
    return this.http.get<any>(url);
  }

  // Método para obter os detalhes de um personagem específico
  getCharacterDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/character/${id}`;
    return this.http.get<any>(url);
  }

  // Método para obter a lista de episódios
  getEpisodes(page: number = 1): Observable<any> {
    const url = `${this.apiUrl}/episode?page=${page}`;
    return this.http.get<any>(url);
  }
}
