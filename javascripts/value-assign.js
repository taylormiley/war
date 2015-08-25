define(function(require) {
  var $ = require("jquery");
      
  return function(data) {
    var value = data.cards[0].value;
    console.log(value);
    switch (value) {
      case "JACK": data.cards[0].value = "11";
      break;
      case "QUEEN": data.cards[0].value = "12";
      break;
      case "KING": data.cards[0].value = "13";
      break;
      case "ACE": data.cards[0].value = "14";
      break;
    }
    data.cards[0].value = parseInt(data.cards[0].value);
  };
  
  // switch (data.cards[0].value) {
  //   case "JACK": data.cards
  // }
});