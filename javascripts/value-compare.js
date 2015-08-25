define(function(require) {
  var $ = require("jquery");
      
  return function() {
    var value1 = $("#player1").children("img").attr("value");
    console.log(value1);
    var value2 = $("#player2").children("img").attr("value");
    console.log(value2);

  };
  
  // switch (data.cards[0].value) {
  //   case "JACK": data.cards
  // }
});