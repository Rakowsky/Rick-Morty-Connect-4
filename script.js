$(document).ready(function(){

var row = 6;
var column = 7;

var board = [];
// /create board for 6x7 connect 4
function createBoard(){
   for (var i = 0; i < row; i++) {
    board[i] = [];
      for (var j = 0; j < column; j++) {
            var $slot = $('<div>');
            // adding individual class names to each slot
            $slot.addClass('slot');
            $slot.addClass('column ' + j);
            $slot.addClass('row ' + i);
            $('.gameboard').append($slot);
            board[i][j] = 0;
      }
   }
}


createBoard();

console.table(board);

// //setting players
// var player1 = "player1";
// var player2 = "player2";

// var turn = ""; turn count 1

var checkForWinner = function(row, column){

};

// checkForWinner();

//player 1 red turn
var $player1 = $(function() {
    $('.slot').hover(
    function() {
        $(this).addClass('red');
    }, function() {
        $(this).removeClass('red');
    });
});
    $('.slot').click(function(event) {
          $(this).off().addClass('red');
          checkForWinner();

});

// player 2 yellow turn
var $player2 = $(function() {
    $('.slot').hover(
    function() {
        $(this).addClass('yellow');
    }, function() {
        $(this).removeClass('yellow');
    });
});
    $('.slot').click(function(event) {
          $(this).off().addClass('yellow');
         checkForWinner();
});









});
