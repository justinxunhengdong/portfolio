//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Packages
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Custom Components
import { DongHeaderComponent } from './dong-header/dong-header.component';
import { DongRouterComponent } from './dong-router/dong-router.component';
import { ChipFilterComponent } from './chip-filter/chip-filter.component';
import { ContentTilesetComponent } from './content-tileset/content-tileset.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    DongHeaderComponent,
    ChipFilterComponent,
    ContentTilesetComponent,
    DongRouterComponent,
    AboutMeComponent
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
