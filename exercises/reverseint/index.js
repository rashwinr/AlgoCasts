// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n)
 {
const reversed  = n.toString().split('').reverse().join('');
return parseInt(reversed)*Math.sign(n); 

}

module.exports = reverseInt;


/*
if(Math.sign(n)==1)
{
    var s  = n.toString().split('').reverse().join('');
    var as = parseInt(s);
    debugger;
    return as;
}
else if (Math.sign(n)==-1)
{
   n = n*-1;
   var s  = n.toString().split('').reverse().join('');
   var as = -1*parseInt(s);
   debugger;
   return as;
}
else if (Math.sign(n)==0)
{
   return n;
}
*/