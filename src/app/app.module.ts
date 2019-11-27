import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DongHeaderComponent } from './dong-header/dong-header.component';
import { ChipFilterComponent } from './chip-filter/chip-filter.component';
import { ContentTilesetComponent } from './content-tileset/content-tileset.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DongHeaderComponent,
    ChipFilterComponent,
    ContentTilesetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
