import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryTableComponent } from './components/storyTable/story-table.component';
import { StoryTableService } from './services/storyTable/story-table.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StoryTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StoryTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
