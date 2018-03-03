console.log('Titties')

// Challenge 1

var players = [{ name: "Bob", scores: [10, 65] }, { name: "Bill", scores: [90, 5] }, { name: "Charlie", scores: [40, 55] }]; // Displays "Bill"
var num = ''
function mathMakr(arr){
  var switcher = []
  for(idx = 0; idx < players.length; idx++)
  {
    switcher.push(players[idx].scores[0] + players[idx].scores[1])
  }
  num = Math.max.apply(null, switcher);
  return num;
}
