$(document).ready(function(){

// /create board for 6x7 connect 4

var row = [6];
var column = [7];
var boardCircles = [];
var characters = "abcdefg";

function createBoard(){
   for (var i = 0; i < row; i++) {
        // var $slotRow = $('<div>');
        // $slotRow.addClass('slotRow');
        // $('.gameboard').append($slotRow)
      for (var j = 0; j < column; j++) {
           var $slot = $('<div>');
           $slot.addClass('slot ' + (i+1));
           $('.gameboard').append($slot);
      }
   }
}

createBoard();



// //setting players
// var player1 = "player1";
// var player2 = "player2";

// var turn = ""; turn count 1

var checkForWinner = function(){


}


//player 1 red turn
var $player1 = $(function() {
    $('.slot').hover(
    function() {
        $(this).addClass('red')
    }, function() {
        $(this).removeClass('red')
    });
})
    $('.slot').click(function(event) {
          $(this).off().addClass('red');
          checkForWinner();

});

//player 2 yellow turn
var $player2 = $(function() {
    $('.slot').hover(
    function() {
        $(this).addClass('yellow')
    }, function() {
        $(this).removeClass('yellow')
    });
})
    $('.slot').click(function(event) {
          $(this).off().addClass('yellow');
         checkForWinner();
});



});
