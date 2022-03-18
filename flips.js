//import coinFlips function
import {coinFlips} from './modules/coin.mjs';
//import countFlips function
import {countFlips} from './modules/coin.mjs';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

const arr = coinFlips(args.number);

console.log(arr);

console.log(countFlips(arr));


