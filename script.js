var slot = function() {
  //value placeholder that will take player value.
  this.value = null;
}

//Board constructors
var Board = function() {
  this.slotsArray = [];
  this.currentPlayer = null;
  this.image = null;
  this.winner = null;
  this.winnerFound = false;
};

//Start Game prototype
Board.prototype.startGame = function() {
  var $player1Marker = $('<div>').html("Rick");
  var $player2Marker = $('<div>').html('Morty');
  $('.player1').append($player1Marker);
  this.slotsArray = [];
  this.currentPlayer = "Rick";
  this.image = $("<img class='Rick' src='rick2.png'/>");
  this.player1Marker = $player1Marker;
  this.player2Marker = $player2Marker;

  console.log('Current Player is Rick');

  //Gives a board of objects with acessible rows and columns
  //Temp Array with all the slots
  var bigArray = [];
  //Temporary array to store Column slots
  var columnArray = [];
  //Create bigArray of slot objects
  for (var i = 0; i < 42; i++) {
    bigArray.push(new slot());
  }
  console.log(bigArray);
  //creating 7 columns
  for (var j = 0; j < 7; j++) {
    //creating 6 rows
    for (var i = 0; i < 6; i++) {
      //each time it pushes into the column Array, and then takes one from the big array
      columnArray.push(bigArray[0]);
      bigArray.shift();
    }
    //[pushes that column array into the final array for the board]
    this.slotsArray.push(columnArray);
    //resets column array to be used for bigger outer loop.
    columnArray = [];
  }
  console.log(this.slotsArray);
};

//Player turns
Board.prototype.switchPlayer = function() {
  switch (this.currentPlayer) {
    case 'Rick':
      this.currentPlayer = 'Morty';
      this.image = $("<img class='Morty' src='morty2.png'/>");
      break;
    case 'Morty':
      this.currentPlayer = 'Rick';
      this.image = $("<img class='Rick' src='rick2.png'/>");
      break;
  }
};

//Checks Win
Board.prototype.checkWin = function(currentPlayer) {
  var board = this.slotsArray

  //Check horizontal
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 6; c++) {
      if ((board[r][c].value === board[r + 1][c].value) && (board[r + 1][c].value === board[r + 2][c].value) && (board[r + 2][c].value === board[r + 3][c].value)) {
        if (board[r][c].value !== null) {
          this.winner = currentPlayer;
          this.winnerFound = true;
        }
      }
    }
  };

  // Check Vertical
  for (var r = 0; r < 7; r++) {
    for (var c = 0; c < 3; c++) {
      if ((board[r][c].value === board[r][c + 1].value) && (board[r][c + 1].value === board[r][c + 2].value) && (board[r][c + 2].value === board[r][c + 3].value)) {
        if (board[r][c].value !== null) {
          this.winner = currentPlayer;
          this.winnerFound = true;
        }
      }
    }
  };

  //Check Diagonal Left to Right
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 3; c++) {
      if ((board[r][c].value === board[r + 1][c + 1].value) && (board[r + 1][c + 1].value === board[r + 2][c + 2].value) && (board[r + 2][c + 2].value === board[r + 3][c + 3].value)) {
        if (board[r][c].value !== null) {
          this.winner = currentPlayer;
          this.winnerFound = true;
        }
      }
    }
  };

  //  Check Diagonal Right to Left
  for (var r = 3; r < 7; r++) {
    for (var c = 0; c < 3; c++) {
      if ((board[r][c].value === board[r - 1][c + 1].value) && (board[r - 1][c + 1].value === board[r - 2][c + 2].value) && (board[r - 2][c + 2].value === board[r - 3][c + 3].value)) {
        if (board[r][c].value !== null) {
          this.winner = currentPlayer;
          this.winnerFound = true;
        }
      }
    }
  }
};

//Clears body and displays win message and image.
Board.prototype.displayWinner = function(currentPlayer) {
  $('body').empty().append("<div class = 'winner-message'>");
  if(currentPlayer === 'Rick'){
    $('div').text(currentPlayer + " has won! Wubalubadubdub!")
    $('body').append('<img src="rick.gif">');
  } else {
    $('div').text(currentPlayer + " has won! Oh, geez.")
    $('body').append('<img src="morty.gif">');
  }
}

//Game Object
var Game = {
  //Blank board
  board: null,
  makeBoard: function() {
    this.board = new Board();
    console.log('New board is made!');
  },
  start: function() {
    this.board.startGame();
    console.log('Game has started!');
  },
  play: function() {
    console.log('Play going!');
    var $columns = $('.column');

    //Click event on each Column
    $columns.click(function() {
      var currentPlayer = Game.board.currentPlayer;
      //used to change game piece
      var tokenImage = Game.board.image;

      if (currentPlayer === "Rick") {
        Game.board.player1Marker.remove();
        $('.player2').append(Game.board.player2Marker);
      } else if (currentPlayer === 'Morty') {
        Game.board.player2Marker.remove();
        $('.player1').append(Game.board.player1Marker);
      }
      //If Column Zero is clicked, do it for each column
      if (this.id === 'column0') {
        //Check for the lowest free spot and add piece.
        console.log('Column 0' + ' has been clicked by ' + currentPlayer);
        for (var j = 0; j < 6; j++) {
          if ($('#0-' + j).text() === "") {
            var $this = $('#0-' + j);
            var image = $(tokenImage);
            image.hide();
            $('#0-' + j).text(currentPlayer);
            $this.append(image);
            image.velocity("transition.bounceDownIn")

            $('#0-' + j).append(image);
            Game.board.slotsArray[0][j].value = currentPlayer;
            Game.board.switchPlayer();
            Game.board.checkWin(currentPlayer);
            if (Game.board.winnerFound === true) {
              Game.board.displayWinner(currentPlayer);
            }
            return;
          }
        }
        alert('This column is full!')
      }

      //If Column One is clicked
      else if (this.id === 'column1') {
        //Check for the lowest free spot and add piece.
        console.log('Column 1' + ' has been clicked by ' + currentPlayer);
        for (var j = 0; j < 6; j++) {
          if ($('#1-' + j).text() === "") {
            $('#1-' + j).text(currentPlayer);
            $('#1-' + j).append(tokenImage);
            tokenImage.velocity("transition.bounceDownIn");
            Game.board.slotsArray[1][j].value = currentPlayer;
            Game.board.switchPlayer();
            Game.board.checkWin(currentPlayer);
            if (Game.board.winnerFound === true) {
              Game.board.displayWinner(currentPlayer);
            }
            return;
          }
        }
        alert('This column is full!')
      }

      //If Column Two is clicked
      else if (this.id === 'column2') {
        //Check for the lowest free spot and add piece.
        console.log('Column 2' + ' has been clicked by ' + currentPlayer);
        for (var j = 0; j < 6; j++) {
          if ($('#2-' + j).text() === "") {
            $('#2-' + j).text(currentPlayer);
            $('#2-' + j).append(tokenImage);
            tokenImage.velocity("transition.bounceDownIn");
            Game.board.slotsArray[2][j].value = currentPlayer;
            Game.board.switchPlayer();
            Game.board.checkWin(currentPlayer);
            if (Game.board.winnerFound === true) {
              Game.board.displayWinner(currentPlayer);
            }
            return;
          }
        }
        alert('This column is full!');
      }

      //If Column Three is clicked
      else if (this.id === 'column3') {
        //Check for the lowest free spot and add piece.
        console.log('Column 3' + ' has been clicked by ' + currentPlayer);
        for (var j = 0; j < 6; j++) {
          if ($('#3-' + j).text() === "") {
            $('#3-' + j).text(currentPlayer)
            $('#3-' + j).append(tokenImage);
            tokenImage.velocity("transition.bounceDownIn");
            Game.board.slotsArray[3][j].value = currentPlayer;
            Game.board.switchPlayer();
            Game.board.checkWin(currentPlayer);
            if (Game.board.winnerFound === true) {
              Game.board.displayWinner(currentPlayer);
            }
            return;
          }
        }
        alert('This column is full!')
      }

      //If Column Four is clicked
      else if (this.id === 'column4') {
        //Check for the lowest free spot and add piece.
        console.log('Column 4' + ' has been clicked by ' + currentPlayer);
        for (var j = 0; j < 6; j++) {
          if ($('#4-' + j).text() === "") {
            $('#4-' + j).text(currentPlayer);
            $('#4-' + j).append(tokenImage);
            tokenImage.velocity("transition.bounceDownIn");
            Game.board.slotsArray[4][j].value = currentPlayer;
            Game.board.switchPlayer();
            Game.board.checkWin(currentPlayer);
            if (Game.board.winnerFound === true) {
              Game.board.displayWinner(currentPlayer);
            }
            return;
          }
        }
        alert('This column is full!')
      }

      //If Column Five is clicked
      else if (this.id === 'column5') {
        //Check for the lowest free spot and add piece.
        console.log('Column 5' + ' has been clicked by ' + currentPlayer);
        for (var j = 0; j < 6; j++) {
          if ($('#5-' + j).text() === "") {
            $('#5-' + j).text(currentPlayer);
            $('#5-' + j).append(tokenImage);
            tokenImage.velocity("transition.bounceDownIn");
            Game.board.slotsArray[5][j].value = currentPlayer;
            Game.board.switchPlayer();
            Game.board.checkWin(currentPlayer);
            if (Game.board.winnerFound === true) {
              Game.board.displayWinner(currentPlayer);
            }
            return;
          }
        }
        alert('This column is full!')
      }
      //If Column Six is clicked
      else if (this.id === 'column6') {
        //Check for the lowest free spot and add piece.
        console.log('Column 6' + ' has been clicked by ' + currentPlayer);
        for (var j = 0; j < 6; j++) {
          if ($('#6-' + j).text() === "") {
            $('#6-' + j).text(currentPlayer);
            $('#6-' + j).append(tokenImage);
            tokenImage.velocity("transition.bounceDownIn");
            Game.board.slotsArray[6][j].value = currentPlayer;
            Game.board.switchPlayer();
            Game.board.checkWin(currentPlayer);
            if (Game.board.winnerFound === true) {
              Game.board.displayWinner(currentPlayer);
            }
            return;
          }
        }
        alert('This column is full!')
      }
    })
  }
}

// start game

$(document).ready(function() {
  Game.makeBoard();
  Game.start();
  Game.play();
})
