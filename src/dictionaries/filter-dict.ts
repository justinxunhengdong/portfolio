import {Filter} from './datatypes/filter-type';
import {Content} from './datatypes/content-type';
import {CONTENTS} from './content-dict';

export const FILTERS: Filter[] = [
  { id: 0, name: 'filter_1', connected: [0, 1]},
  { id: 1, name: 'filter_2', connected: [2]},
  { id: 2, name: 'filter_3', connected: [2]},
]
