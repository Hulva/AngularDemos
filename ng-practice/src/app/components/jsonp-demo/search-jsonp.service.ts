import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { SearchItem } from '../search/search-item';

@Injectable()
export class SearchJsonpService {
  apiRoot = 'https://itunes.apple.com/search';

  constructor(private jsonp: Jsonp) { }

  search(term: string) {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL)
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
