import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Content } from 'dictionaries/datatypes/content-type';
import { Filter } from 'dictionaries/datatypes/filter-type';
import { CONTENTS } from 'dictionaries/content-dict';
import { FILTERS } from 'dictionaries/filter-dict';
import * as MarkdownModule from 'ngx-markdown';

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

  }

  deselectContent() {
    this.currentlySelected = null;
    this.shouldShowModal = false;
  }

  /* Content Additional Methods */
  getNextContentLocation() {

    this.contentsAll.find((content, index) => {
      if (content.id === this.currentlySelected.id) {
        if (index + 1 === this.contentsAll.length) {
          this.deselectContent();
          this.selectContent(this.contentsAll[0]);
          return true;
        } else {
          this.deselectContent();
          this.selectContent(this.contentsAll[index + 1]);
          return true;
        }
      }
    });

  }

  /* Filters */

  returnCorrespondingFilters(content: Content): string[] {
    // find matches between each filter.connected && content.id;
    const listOfFilters: Filter[] = [];
    const listOfFiltersText: string[] = [];

    for (const correspondingFilter of FILTERS) {
      for(const connector of correspondingFilter.connected) {
        if(connector === content.id){
          listOfFilters.push(correspondingFilter);
          listOfFiltersText.push(correspondingFilter.name);
        }
      }
    }
    return listOfFiltersText;
  }



}
