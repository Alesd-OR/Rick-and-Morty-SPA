import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] = [];
  loading: boolean = false;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.loading = true;
    this.rickMortyService.getEpisodes().subscribe((data) => {
      this.episodes = data.results;
      this.loading = false;
    });
  }
}
