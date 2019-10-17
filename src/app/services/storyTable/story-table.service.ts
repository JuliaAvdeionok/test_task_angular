import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoryList } from '../../models/models';
import { SEARCH_BY_DATE_URL } from '../../utils/constans';

@Injectable()
export class StoryTableService {
  url: string;

  constructor(private http: HttpClient) {

  }

  getStory(): Observable<StoryList> {
    this.url = SEARCH_BY_DATE_URL;
    const params = new HttpParams()
      .append('tags', 'story');
    console.log('building url ' + this.url + '?' + params.toString());
    return this.http.get<StoryList>(this.url, {params: params});
  }

}
