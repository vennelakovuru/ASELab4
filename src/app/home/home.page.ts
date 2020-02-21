import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {max} from "rxjs/operators";


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public classifyData = null;

    constructor(private httpClient: HttpClient) {
    }

    public result;
    public movieDetails;
    public searchMovie;

    getMovieDetails() {
        this.httpClient.get('https://api.themoviedb.org/3/search/movie?api_key=79d0f381ad0a8b1c3fb900afef69ee6c&query=' + this.searchMovie)
            .subscribe(data => {
                this.movieDetails = data;
            });
        console.log(this.movieDetails);
    }

    classifyCheck() {
        this.httpClient.get('https://cors-anywhere.herokuapp.com/' + 'https://api.uclassify.com/v1/uClassify/ageanalyzer/classify/?readKey=YGzIEYAJW6Q4&text=' + this.movieDetails.results[0].overview)
            .subscribe(data => {
                this.classifyData = data;
                console.log(this.classifyData);
            });
    }


}
