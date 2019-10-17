import { Component, OnInit } from '@angular/core';
import { StoryTableService } from '../../services/storyTable/story-table.service';
import { interval, throwError } from 'rxjs';
import { StoryList } from '../../models/models';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-story-table',
  templateUrl: './story-table.component.html',
  styleUrls: ['./story-table.component.scss']
})
export class StoryTableComponent implements OnInit {

  storyList: StoryList;

  constructor(private storyTableService: StoryTableService) { }

  ngOnInit() {
    this.pollStoryList();
  }

  pollStoryList() {
    interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.storyTableService.getStory())
      )
      .subscribe(
        storyList => {
          this.storyList = storyList;
        },
        error => {
          throwError(error);
        }
      );
  }

}
