//import coinFlips function
import {flipACoin} from './modules/coin.mjs';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

const err_null = new Error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");

const err_incorrect = new Error("Error: wrong input.\nUsage: node guess-flip --call=[heads|tails]");

if(args.call == null){
    console.error(err_null.message);
}
else if(args.call != "heads" && args.call != "tails"){
    console.error(err_incorrect.message);
}
else{
    console.log(flipACoin(args.call));
}



