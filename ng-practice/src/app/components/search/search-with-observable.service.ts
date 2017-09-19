import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchItem } from './search-item';

@Injectable()
export class SearchWithObservableService {
  apiRoot: string = 'http://itunes.apple.com/search';

  constructor(private http: Http) { }

  search(term: string) {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
      .map(res => {
        return res.json().results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      });
  }

}
