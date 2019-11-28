import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from 'app/about-me/about-me.component';
import { ContentTilesetComponent } from 'app/content-tileset/content-tileset.component';

const routes: Routes = [
  {path: '', children: []},
  {path: 'about', component: AboutMeComponent },
  {path: 'projects', component: ContentTilesetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
