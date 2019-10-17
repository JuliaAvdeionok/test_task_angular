import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryTableComponent } from './components/storyTable/story-table.component';
import { StoryTableService } from './services/storyTable/story-table.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './_modal';
import { StoryComponent } from './components/story/story.component';
import { StoryService } from './services/story/story.service';
import { SearchComponent } from './components/search/search.component';
import { ListFilterPipe } from './components/storyTable/list-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoryTableComponent,
    StoryComponent,
    SearchComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StoryTableService,
    StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
