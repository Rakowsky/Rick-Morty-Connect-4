$(document).ready(function(){



var row = 6;
var column = 7;


// /create board for 6x7 connect 4
function createBoard(){
   for (var i = 0; i < row; i++) {
      for (var j = 0; j < column; j++) {
            var $slot = $('<div>');
            // adding individual class names to each slot
            $slot.addClass('slot')
            $slot.addClass('column ' + j);
            $slot.addClass('row ' + i)
            $('.gameboard').append($slot);

      }
   }
}

createBoard();


// //setting players
// var player1 = "player1";
// var player2 = "player2";

// var turn = ""; turn count 1

var checkForWinner = function(row, column){
// pseudocode
// for(i = 0; i< row; i++)
// for(j = 0; j< column; j++)

  // checks columns
  if (
    for(let r=3; r<6; r++)
      forr(let c=0; c<7; c++)



  // ($('.slot.column.0.row.yellow').length > 3) ||
  // ($('.slot.column.1.row.yellow').length > 3) ||
  // ($('.slot.column.2.row.yellow').length > 3) ||
  // ($('.slot.column.3.row.yellow').length > 3) ||
  // ($('.slot.column.4.row.yellow').length > 3) ||
  // ($('.slot.column.5.row.yellow').length > 3) ||
  // ($('.slot.column.6.row.yellow').length > 3) ||

  // // checks rows
  // ($('.slot.column.row.yellow').length > 3) ||
  // ($('.slot.column.row.1.yellow').length > 3) ||
  // ($('.slot.column.row.2.yellow').length > 3) ||
  // ($('.slot.column.row.3.yellow').length > 3) ||
  // ($('.slot.column.row.4.yellow').length > 3) ||
  // ($('.slot.column.row.5.yellow').length > 3)

  // checks diagonally
  // ($('.slot.column.0.row.yellow').length > 3) ||
  // ($('.slot.column.1.row.yellow').length > 3) ||
  // ($('.slot.column.2.row.yellow').length > 3) ||
  // ($('.slot.column.3.row.yellow').length > 3) ||
  // ($('.slot.column.4.row.yellow').length > 3) ||
  // ($('.slot.column.5.row.yellow').length > 3) ||
  // ($('.slot.column.6.row.yellow').length > 3)


  ) {
    alert('player 1 won');
  } else {
    console.log('hi');
    // next turn
  }

};

checkForWinner();

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

// player 2 yellow turn
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
