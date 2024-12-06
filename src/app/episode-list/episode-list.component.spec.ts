import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] = [];
  page: number = 1;
  searchTerm: string = '';
  totalPages: number = 1;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.rickMortyService.getEpisodes(this.page, this.searchTerm).subscribe((data) => {
      this.episodes = data.results;
      this.totalPages = data.info.pages;
    });
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.page = 1;
    this.loadEpisodes();
  }

  onPageChange(page: number): void {
    this.page = page;
    this.loadEpisodes();
  }
}
