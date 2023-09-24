import {Filter} from './datatypes/filter-type';
import {Content} from './datatypes/content-type';
import {CONTENTS} from './content-dict';

export const FILTERS: Filter[] = [
  { id: 0, name: 'UX Design', connected: [1, 2, 3, 4, 5, 14, 17, 19], active: true},
  { id: 1, name: 'Level Design', connected: [0, 12, 11, 10, 9, 3, 15, 18, 19], active: true},
  { id: 2, name: 'Systems Design', connected: [0, 2, 3, 4, 19], active: true},
  { id: 3, name: 'Gameplay Design', connected: [0, 16, 10, 2, 3, 4, 18, 19], active: true},
  { id: 4, name: 'Video Editing', connected: [3, 4, 6], active: true},
  { id: 5, name: 'Programming', connected: [1, 3, 4, 7, 8, 9, 10, 11, 16, 15], active: true},
  /*{ id: 6, name: 'Archived Projects', connected: [7,8,9,11], active: false},*/
]

