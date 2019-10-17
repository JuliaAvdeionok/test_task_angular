import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../../models/models';
import { ITEMS_URL } from '../../utils/constans';

@Injectable()
export class StoryService {

  constructor(private http: HttpClient) {

  }

  getStoryById(id: string): Observable<Story> {
    const url = `${ITEMS_URL}/${id}`;
    console.log('building url ' + id);
    console.log('building url ' + url);
    console.log('building url ' + `${id}`);
    return this.http.get<Story>(url);
  }

}
