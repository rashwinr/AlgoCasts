// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var reversed = '';
    for (var x of str) {

        reversed = x + reversed;
        debugger;
    }
    return reversed;
}

reverse('ashwin');

module.exports = reverse;