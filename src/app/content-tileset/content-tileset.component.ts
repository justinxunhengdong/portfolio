import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Content } from '../../dictionaries/datatypes/content-type';
import { Filter } from '../../dictionaries/datatypes/filter-type';
import { CONTENTS } from '../../dictionaries/content-dict';
import { FILTERS } from '../../dictionaries/filter-dict';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
imports: [
  MarkdownModule.forRoot()
]
})

@Component({
  selector: 'app-content-tileset',
  templateUrl: './content-tileset.component.html',
  styleUrls: ['./content-tileset.component.css']
})
export class ContentTilesetComponent implements OnInit {

  currentlySelected: Content;
  contentFiltered: Content[];
  contentsAll: Content[];
  filtersUsed: Filter[];
  shouldShowModal: boolean;

  constructor() { }

  ngOnInit() {
    this.contentsAll = CONTENTS;
    this.filtersUsed = FILTERS;
    this.shouldShowModal = false;
  }

  /* Overlay  */
  selectContent(selectedContent: Content): void {
    this.shouldShowModal = true;
    this.currentlySelected = selectedContent;
    console.log("SWITCH");
  }

  deselectContent() {
    this.currentlySelected = null;
    this.shouldShowModal = false;
  }


}
