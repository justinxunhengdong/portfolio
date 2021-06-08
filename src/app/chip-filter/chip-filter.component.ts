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
    selectedFilter.active = !selectedFilter.active;
    //then make sure that content tileset is listening to show/hide content?
    this.chipClicked.emit();
  }


}
