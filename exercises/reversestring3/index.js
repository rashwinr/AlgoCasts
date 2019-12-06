// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// I do not understand this solution yet

function reverse(str) {
   return str.split('').reduce((reversed,character) => character + reversed,'');
}

module.exports = reverse;