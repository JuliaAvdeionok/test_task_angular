import { Component, OnInit } from '@angular/core';
import { StoryTableService } from '../../services/storyTable/story-table.service';
import { throwError } from 'rxjs';
import { StoryList } from '../../models/models';

@Component({
  selector: 'app-story-table',
  templateUrl: './story-table.component.html',
  styleUrls: ['./story-table.component.scss']
})
export class StoryTableComponent implements OnInit {

  storyList: StoryList;

  constructor(private storyTableService: StoryTableService) { }

  ngOnInit() {
    this.storyTableService.getStory()
      .subscribe(
        storyList => {
          console.log('JournalList in 2:' + JSON.stringify(storyList));
          this.storyList = storyList;
        },
        error => {
          throwError(error);
        }
      );
  }

}
