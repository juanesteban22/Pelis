import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  data: any = {};
  movieTitle: string = '';

  constructor(private apiService: ApiService) { }

  buscarPelicula() {
    this.apiService.getData(this.movieTitle).subscribe(data => {
      console.log(data);
      
      this.data = data.Search;
      console.log(this.data);
    });
  }
}



