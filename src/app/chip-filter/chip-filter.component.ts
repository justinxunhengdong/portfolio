import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FILTERS } from 'dictionaries/filter-dict';
import { Filter } from 'dictionaries/datatypes/filter-type';

@Component({
  selector: 'app-chip-filter',
  templateUrl: './chip-filter.component.html',
  styleUrls: ['./chip-filter.component.css']
})

export class ChipFilterComponent implements OnInit {

  constructor() { }

  filters: Filter[];

  ngOnInit() {
    this.filters = FILTERS;
  }

  @Output() chipClicked = new EventEmitter();

  clickFilter(selectedFilter: Filter): void {
    //change filter class to deselected CSS
    //invert active status on filter
    if (!selectedFilter.active) {
      //make this an exclusive click
      this.setAllFilters(false);
      selectedFilter.active = true;
    } else {
      //if all are active
      var isAllActive = true;
      for (const filter of this.filters) {
        if (!filter.active) {
          isAllActive = false;
        }
      }

      selectedFilter.active = false; //set false so we don't fuck up the next block.

      //if all are inactive:
      var isAllInactive = true;
      for (const filter of this.filters) {
        if (filter.active) {
          isAllInactive = false;
        }
      }

      if (isAllInactive) {
        this.setAllFilters(true); //if all filters are currently inactive then prevent a blank page situation

      } else if(isAllActive){
        this.setAllFilters(false); //if all are active then avoid tedium by making this an exclusive filter.
        selectedFilter.active = true;
      } else {
        selectedFilter.active = false; //otherwise just return this. not sure if it ever happens anymore.
      }

    }
    //selectedFilter.active = !selectedFilter.active;
    //then make sure that content tileset is listening to show/hide content?
    this.chipClicked.emit();
  }

  setAllFilters(allActive: boolean) {
    for (const filter of this.filters) {
      filter.active = allActive;
    }
  }

}
