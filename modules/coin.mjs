/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads or tails
 * 
 */

export function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

// testing:
//console.log(coinFlip())

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  const sides = [];
  for(var i = 0; i < flips; i++){
      sides[i] = coinFlip();
  }
  return sides
}

// testing:
// console.log(coinFlips(10))

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  var numHeads = 0;
  var numTails = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] == "heads"){
        numHeads++;
    }
    else if(array[i] == "tails"){
        numTails++;
    }
  }
  // if(numHeads == 0 && numTails == 0){
  //   return "{}";
  // } else
  if(numHeads == 0){
    return "{ tails: " + numTails.toString() + " }";
  }
  else if(numTails == 0){
    return "{ heads: " + numHeads.toString() + " }";
  }
  else{
    return "{ tails: " + numTails.toString() + ", heads: " + numHeads.toString() + " }";
  }
}

//console.log(countFlips(coinFlips(10)))

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  var flip = coinFlip();
  const results = ['win', 'lose'];
  var result = "";
  if(flip == call){
    result = results[0];
  }
  else{
    result = results[1];
  }
  return "{ call: " + call + ", flip: " + flip + ", result: " + result + " }";
}

//console.log(flipACoin(coinFlip()))

/** Export 
 * 
 * Export all of your named functions
*/
