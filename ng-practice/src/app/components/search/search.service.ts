import {
  Injectable
} from '@angular/core';
import {
  Http
} from '@angular/http';
import { SearchItem } from './search-item';

@Injectable()
export class SearchService {
  apiRoot: string = 'http://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            // console.log(res.json());
            this.results = res.json().results.map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            // this.results = res.json().results;
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
