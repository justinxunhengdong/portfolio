import {Filter} from './datatypes/filter-type';
import {Content} from './datatypes/content-type';
import {CONTENTS} from './content-dict';

export const FILTERS: Filter[] = [
  { id: 0, name: 'UX Design', connected: [0, 1, 2, 4, 6]},
  { id: 1, name: 'Game Development', connected: [0, 1, 2, 7, 8]},
  { id: 2, name: 'Video Editing', connected: [1, 2, 3]},
  { id: 3, name: 'Programming', connected: [1, 2, 6, 7, 8]},
  { id: 4, name: 'Social Experience', connected: [0, 1, 2, 4]},
  { id: 5, name: 'Singular Experience', connected: [7, 8]},
]
