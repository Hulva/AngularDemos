import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch';

@Injectable()
export class ElasticsearchService {
  private client: Client;

  constructor() {
    if (!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: 'http://10.16.238.101:8200',
      log: 'trace'
    });
  }

  isAvailable(): Promise<any> {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello there!'
    });
  }

  createIndex(_index: string) {
    const promise = new Promise((resolve, reject) => {
      this.client.indices.create({ index: _index }).then(
        result => {
          console.log('Create ES index', result);
          resolve();
        },
        error => {
          console.error('Create ES index', error);
        }
      );
    });
    return promise;
  }

  fullTextSearch(_index, _type, _field, _queryText, filterFields?: Array<string>): Promise<Elasticsearch.SearchResponse<{}>> {
    return this.client.search({
      index: _index,
      type: _type,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        'query': {
          'match_phrase_prefix': {
            [_field]: _queryText
          }
        }
      },
      // response for each doc within filterFields
      '_source': filterFields
    });
  }

}
