import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../../models/models';
import { ITEMS_URL } from '../../utils/constans';

@Injectable()
export class StoryService {

  constructor(private http: HttpClient) {
  }

  getStoryById(id: string): Observable<Story> {
    const url = `${ITEMS_URL}/${id}`;
    return this.http.get<Story>(url);
  }

}
