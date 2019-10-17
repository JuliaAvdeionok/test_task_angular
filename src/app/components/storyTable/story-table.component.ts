import { Component, OnInit } from '@angular/core';
import { StoryTableService } from '../../services/storyTable/story-table.service';
import { interval, Observable, throwError } from 'rxjs';
import { StoryList } from '../../models/models';
import { startWith, switchMap } from 'rxjs/operators';
import { ModalService } from '../../_modal';

@Component({
  selector: 'app-story-table',
  templateUrl: './story-table.component.html',
  styleUrls: ['./story-table.component.scss']
})
export class StoryTableComponent implements OnInit {
  storyList: Observable<StoryList>;
  pickedId: string;


  constructor(private storyTableService: StoryTableService,
              private modalService: ModalService) {
    // const  storyListInit  = {} as StoryList;
    // this.storyList = Observable.of<StoryList>(storyListInit)
  }

  ngOnInit() {
    this.pollStoryList();
  }

  pollStoryList() {
    this.storyList = this.storyList = interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.storyTableService.getStory())
      );

}

  openModal(id: string) {
    this.pickedId = id;
    this.modalService.open('storyModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
