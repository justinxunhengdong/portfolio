import { Component, OnInit } from '@angular/core';
import { Content } from '../../dictionaries/datatypes/content-type';
import { Filter } from '../../dictionaries/datatypes/filter-type';
import { CONTENTS } from '../../dictionaries/content-dict';
import { FILTERS } from '../../dictionaries/filter-dict';

@Component({
  selector: 'app-content-tileset',
  templateUrl: './content-tileset.component.html',
  styleUrls: ['./content-tileset.component.css']
})
export class ContentTilesetComponent implements OnInit {

  currentlySelected: Content;


  constructor() { }

  ngOnInit() {
  }

}
