import { atimtis } from './components/atimtis.js';
import { dalyba } from './components/dalyba.js';
import { daugyba } from './components/daugyba.js';
import { suma } from './components/suma.js';
import { vidurkis } from './components/vidurkis.js';

const ats1 = suma(1, 3);
console.log(ats1);

const ats2 = atimtis(1, 3);
console.log(ats2);

const ats3 = daugyba(1, 3);
console.log(ats3);

const ats4 = dalyba(1, 3);
console.log(ats4);

const ats5 = vidurkis([10, 3, 6, 8]);
console.log(ats5);