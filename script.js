$(document).ready(function(){
// create lenght of rows and columns

var row = 6;
var column = 7;
var index = 0;
var board = [];


// create board for 6x7 connect 4
function createBoard(){
   for(var i = 0; i < row; i++) {
    board[i] = [];
      for(var j = 0; j < column; j++) {
            var $slot = $('<div>');
            $slot.value = null;
            // adding individual class names to each slot
            $slot.addClass('slot');
            $slot.addClass('column-' + j);
            $slot.addClass('row-' + i);
            $('.gameboard').append($slot);
            board[i][j] = 0;
      }
   }
}


createBoard();

console.table(board);
console.log(board);



/*var changeTurn = function(){
  if(turn = true){
    return $player1();
    else {
      return $player2();
    }
  }
};*/

function changeTurn(){
    if(turn === true){
  //     $('.slot').click(function(event) {
  //           $(this).off().addClass('red');
  //             var x = event.target.classList[1][event.target.classList[1].length-1];
  //             var y = event.target.classList[2][event.target.classList[2].length-1];
  //             board[parseInt(y)][parseInt(x)] = 1;
  //             checkForWinner();
  //             turn = false;
                player1();
                turn = false;

  // });
    } else{
       // $('.slot').click(function(event) {
       //  $(this).off().addClass('yellow');
       //  var x = event.target.classList[1][event.target.classList[1].length-1];
       //  var y = event.target.classList[2][event.target.classList[2].length-1];
       //  board[parseInt(y)][parseInt(x)] = 2;
       //  checkForWinner();
        // console.table(board);
        player2();
        turn = true;
    }
}

// changeTurn();


function player1(){
  $('.slot').click(function(event) {
            $(this).off().addClass('red');
              var x = event.target.classList[1][event.target.classList[1].length-1];
              var y = event.target.classList[2][event.target.classList[2].length-1];
              board[parseInt(y)][parseInt(x)] = 1;
              checkForWinner();
              changeTurn();
});
}

function player2(){
     $('.slot').click(function(event) {
        $(this).off().addClass('yellow');
        var x = event.target.classList[1][event.target.classList[1].length-1];
        var y = event.target.classList[2][event.target.classList[2].length-1];
        board[parseInt(y)][parseInt(x)] = 2;
        checkForWinner();
        changeTurn();
});
}

var turn = true;

var checkForWinner = function(){
  // check for both winners

  for(var r = 0; r < 6; r++) {
    for (var c = 0; c < 7; c++) {
    // loop through vertically
      if(
        // (board[r][c] !== 0) &&
        (board[r][c] === 1)&&
        (board[r + 1][c] === 1) &&
        (board[r + 2][c] === 1) &&
        (board[r + 3][c] === 1)

        ){
          alert('red win ver');
        }
      if(
        // (board[r][c] !== 0) &&
        (board[r][c] === 2)&&
        (board[r + 1][c] === 2) &&
        (board[r + 2][c] === 2) &&
        (board[r + 3][c] === 2)

        ){
          alert('yellow win ver');
        }
        // loop through horizontally
        if(

        // (board[r][c] !== 0) &&
        (board[r][c] === 1)&&
        (board[r][c+1] === 1) &&
        (board[r][c+2] === 1) &&
        (board[r][c+3] === 1)

        ){
          alert('red win hor');
        }
        if(

        // (board[r][c] !== 0) &&
        (board[r][c] === 2)&&
        (board[r][c+1] === 2) &&
        (board[r][c+2] === 2) &&
        (board[r][c+3] === 2)

        ){
          alert('yellow win hor');
        }

        // check diagonally down
         if(

          // (board[r][c] !== 0) &&
          (board[r][c] ===  1) &&
          (board[r + 1][c + 1] === 1) &&
          (board[r + 2][c + 2] === 1) &&
          (board[r + 3][c + 3] === 1)

           ) {
           alert('red win dia down');
        }
         if(

          // (board[r][c] !== 0) &&
          (board[r][c] ===  2) &&
          (board[r + 1][c + 1] === 2) &&
          (board[r + 2][c + 2] === 2) &&
          (board[r + 3][c + 3] === 2)

           ) {
           alert('yellow win dia down');
        }
        // check diagonally up
         if(

          // (board[r][c] !== 0) &&
          (board[r][c] ===  1) &&
          (board[r + 1][c - 1] === 1) &&
          (board[r + 2][c - 2] === 1) &&
          (board[r + 3][c - 3] === 1)

           ) {
           alert('red win dia up');
        }
        if(

          // (board[r][c] !== 0) &&
          (board[r][c] === 2) &&
          (board[r + 1][c - 1] === 2) &&
          (board[r + 2][c - 2] === 2) &&
          (board[r + 3][c - 3] === 2)

           ) {
           alert('yellow win dia up');
        }
        // debugger;
        // else {
        //   return false;
        // }
    }
  }
};

/*checkForWinner();

function handleClick(){
  if(turn === true){
    $(this).addClass('red')
  } else{
    $(this).off().addClass('yellow');
  }
}


// //player 1 red turn
var $player1 = $(function() {
    $('.slot').hover(
    function() {
        $(this).addClass('red');
    }, function() {
        $(this).removeClass('red');
    });
$('.slot').click(function(event) {
          $(this).off().addClass('red');
          // board[parseInt(event.target.classList[2])][parseInt(event.target.classList[4])] = 2;
          // console.table(board);
             var x = event.target.classList[1][event.target.classList[1].length-1];
            var y = event.target.classList[2][event.target.classList[2].length-1];
            board[parseInt(y)][parseInt(x)] = 1;
              console.table(board);
            checkForWinner();
           // $(this).toggle($player1, $player2);
            changeTurn();

});
});
    $('.slot').click(function(event) {
          $(this).off().addClass('red');
          // board[parseInt(event.target.classList[2])][parseInt(event.target.classList[4])] = 2;
          // console.table(board);
             var x = event.target.classList[1][event.target.classList[1].length-1];
            var y = event.target.classList[2][event.target.classList[2].length-1];
            board[parseInt(y)][parseInt(x)] = 1;
          checkForWinner();
           // $(this).toggle($player1, $player2);
          changeTurn();

});


player 2 yellow turn
var $player2 = $(function() {
    $('.slot').hover(
    function() {
        $(this).addClass('yellow');
    }, function() {
        $(this).removeClass('yellow');
    });$('.slot').click(function(event) {
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
      console.log(event.target.classList[1][event.target.classList[1].length-1], event.target.classList[2][event.target.classList[2].length-1]);
      var x = event.target.classList[1][event.target.classList[1].length-1];
      var y = event.target.classList[2][event.target.classList[2].length-1];
      board[parseInt(y)][parseInt(x)] = 2;
      console.table(board);
      checkForWinner();
      // $(this).toggle($player1, $player2);
      changeTurn();

});
});*/





});




