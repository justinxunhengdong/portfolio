import {Filter} from './datatypes/filter-type';
import {Content} from './datatypes/content-type';
import {CONTENTS} from './content-dict';

export const FILTERS: Filter[] = [
  { id: 0, name: 'UX Design', connected: [1, 2, 3, 4, 5], active: true},
  { id: 1, name: 'Game Development', connected: [0, 2, 3, 4, 7, 8, 9, 10], active: true},
  { id: 2, name: 'Video Editing', connected: [3, 4, 6], active: true},
  { id: 3, name: 'Programming', connected: [1, 3, 4, 7, 8, 9, 10], active: true},
  { id: 4, name: 'Personal Project', connected: [2, 9, 10], active: true},
]

