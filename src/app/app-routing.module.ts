import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryTableComponent } from './components/storyTable/story-table.component';


const routes: Routes = [
  { path: '', component: StoryTableComponent },
  // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
