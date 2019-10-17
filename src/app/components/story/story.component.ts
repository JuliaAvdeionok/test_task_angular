import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StoryService } from '../../services/story/story.service';
import { Observable } from 'rxjs';
import { Story } from '../../models/models';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: [ './story.component.scss' ]
})
export class StoryComponent implements OnChanges {
  @Input() storyObjectId: string;
  story: Observable<Story>;

  constructor(private storyService: StoryService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.storyObjectId) {
      this.story = this.storyService.getStoryById(this.storyObjectId);
    }
  }


}
