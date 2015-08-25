define(function(require) {
  var $ = require("jquery"),
      newGame = require("new-game"),
      draw = require("draw"),
      templates = require("get-templates"),
      valueAssign = require("value-assign"),
      valueCompare = require("value-compare"),
      id1,
      id2;
      

  $("#newGame").click(function() {
    newGame().then(function(data) {
      data.playerKey = "player1";
      id1 = data.deck_id;
      console.log(data);
      return data;
    });
    newGame().then(function(data) {
      data.playerKey = "player2";
      id2 = data.deck_id;
      console.log(data);
      return data;
    });
  });

  $(document).on("click", "#play", function() {
    draw(id1).then(function(data) {
      data.playerKey = "player1";
      valueAssign(data);
      $("#player1").html(templates.cardTemplate(data));
      draw(id2).then(function(data1) {
        data1.playerKey = "player2";
        valueAssign(data1);
        $("#player2").html(templates.cardTemplate(data1));
        valueCompare(data, data1);
      });
    });
    


  });

});