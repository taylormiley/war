define(function(require) {
  var $ = require("jquery"),
      player1Score = 0,
      player2Score = 0;
      
  return function(data, data1) {
    var value1 = data.cards[0].value;
    console.log(value1);
    var value2 = data1.cards[0].value;
    console.log(value2);
    if (value1 > value2) {
      player1Score++;
    } else if (value2 > value1) {
      player2Score++;
    } else if (value1 === value2) {
      alert("Draw!");
    }
    console.log("player1Score", player1Score);
    console.log("player2Score", player2Score);
    
  };
  
  // switch (data.cards[0].value) {
  //   case "JACK": data.cards
  // }
});