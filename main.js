console.log('Titties');

// Challenge 1

var players = [{ name: "Bob", scores: [10, 65] }, { name: "Bill", scores: [90, 5] }, { name: "Charlie", scores: [40, 55] }]; // Displays "Bill"
var num = ''
// function mathMakr(arr){
//   var switcher = []
//   for(idx = 0; idx < players.length; idx++)
//   {
//     switcher.push(players[idx].scores[0] + players[idx].scores[1])
//   }
//   num = Math.max.apply(null, switcher);
//   return num;
// }

function challenge1_obj(players){
  
  findTotals(players);
  // findWinner
  // writeTODOM
}

function FindTotals(players){
  players.forEach(function(player){
    player.total = player.scores.reduce(function(prev, curr){
      return prev + curr;
    })
  })
}

function findWinner(players){
  var winner = {total: 0};
  player.forEach(function(player){
    if (player.total <= 100 && player.total > winnner.total){
      winner = player;
    }
  })
  return winner;
}

// Challenge 3 
var test1 = {a: 5, b:2, operator: "add"};
var test2 = {a: 5, b:2, operator: "subtract"};
var test3 = {a: 5, b:2, operator: "multiply"};
var test4 = {a: 5, b:2, operator: "divide"};
function mathMat(obj){
  for (var key in obj) {
    var idx = obj[key];
    var newTot;
    // console.log(idx);
    if (obj["operator"] === "add"){
      newTot = test1["a"] + test1 ["b"];
      return newTot;
    }
    else if (obj["operator"] === "subtract"){
      newTot = test1["a"] - test1 ["b"];
      return newTot;
    }
    else if (obj["operator"] === "multiply"){
      newTot = test1["a"] * test1 ["b"];
      return newTot;
    }
    else if (obj["operator"] === "divide"){
      newTot = test1["a"] / test1 ["b"];
      return newTot;
    }
    else {return "Thats not right."} 
  }
}
// function mathMat(obj){
//   for(i = 0; i < obj.length; i++){
//     console.log(obj[i]);
//   }  
// }


// Challenge 4

var names = ['fred', 'barney'];
var ages = [30,40];
zip = {};
names.forEach((key, i) => zip[key] = ages[i])
console.log(zip);


// Challenge 5

var candidate1 = {minSalary:950000}
let job1 = {maxSalary:100000}

function canIHire(job,cand){
  if (cand.minSalary <= job.maxSalary-job.maxSalary*.10)
  {
    console.log(true)
  } else
  {
    console.log(false)
  }
}
