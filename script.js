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
            $slot.addClass('column' + j);
            $slot.addClass(j);
            $slot.addClass('row' + i);
            $slot.addClass(i);
            // console.log(`row ${i}`)
            // console.log(`column ${j}`)
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

var checkForWinner = function(row,column){
  // check columns

  for(var j = 0; j<$('.column').length; j++) {
    if($('.yellow').length>3){
      console.log('yellow wins!');
    }
        else if($('.red').length>3){
          console.log('red wins!');
        } else{
          console.log('hi');
        }


    //test
  } for(var i = 0; i<$('.row').length; i++) {
    if($('.yellow').length>3){
      console.log('yellow wins!');
    }
        else if($('.red').length>3){
          console.log('red wins!');
        } else{
          console.log('hi');
        }



  }
  console.log($('.column[i]'));
};
//   var $row = $('.row');
//   var $column = $('.column');

// for($row = 0; $row < $row.length; $row++){
//   for($column = 0; $column < $column.length; $column++){
//     if($('.yellow')>3){
//       alert('youwin');
//       console.log('hi');
//     } else {
//       console.log('bye');
//     }
//   }
// }
// };

checkForWinner();

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
//           // board[parseInt(event.target.classList[2])][parseInt(event.target.classList[4])] = 2;
//           // console.table(board);
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

      // board.splice(i,1,2);
      // board[parseInt(event.target.classList[2])][parseInt(event.target.classList[4])] = 2;
      // console.table(board);
      checkForWinner();
});







});
