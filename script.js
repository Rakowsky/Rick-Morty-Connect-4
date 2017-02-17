$(document).ready(function(){

var row = 6;
var column = 7;

var board = [], i=0;
// var boardLog = [];
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
            // boardLog.push($slot);
            board[i][j] = 0;
      }
   }
}


createBoard();

console.table(board);
// console.table(boardLog);
console.log(board.length);

// //setting players
// var player1 = "player1";
// var player2 = "player2";

// var turn = ""; turn count 1

// pseudocode
// when a div slot is clicked, adds 1 or 2 to board array

// var checkForWinner = function(row, column){
//   // check down
// for(r = 0; r <6; r++){
//   for(c = 0; c < 7; c++){
//     // if row.0+3 =
//   }
// }
// };

// checkForWinner(board);

//player 1 red turn
// var $player1 = $(function() {
//     $('.slot').hover(
//     function() {
//         $(this).addClass('red');
//     }, function() {
//         $(this).removeClass('red');
//     });
// });
//     $('.slot').click(function(event) {
//           $(this).off().addClass('red');
//           // checkForWinner();

// });

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
      // Taka wrote some stuff here but it was a mess and didn't work
      // console.log(this, event);
      // console.log(event.target.classList);
      // let yes = event.target.classList;
      // let newXIndex = 0;
      // let newYIndex = 0;
      // yes.forEach((ye, i) => {
      //   console.log(ye);
      //   if(ye === 'column') {
      //     console.log('its a column');
      //     newXIndex = parseInt(i)+1;
      //     console.log('newxindex --> ', newXIndex)
      //   } else if (ye === 'row') {
      //     console.log('its a row');
      //     newYIndex = parseInt(i)+1;
      //     console.log('newyindex --> ', newYIndex);
        // }
      // })
      // debugger
      // if(i=== board.length){
      //   i = 0;
      // }
      // debugger
      $(this).off().addClass('yellow');
      // checkForWinner();
      // board.splice(i,1,2);
      // board[parseInt(event.target.classList[3])][parseInt(event.target.classList[4])] = 2;
      // console.table(board);
});







});
