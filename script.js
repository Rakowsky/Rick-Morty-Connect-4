$(document).ready(function() {

    var row = 6;
    var column = 7;
    var $board = $('.gameboard');

    // /create board for 6x7 connect 4
    function createBoard() {
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < column; j++) {
                var $slot = $('<div>');
                // adding individual class names to each slot
                $slot.addClass('slot')
                $slot.addClass('column ' + j);
                $slot.addClass('row ' + i)
                $board.append($slot);

            }
        }
    }

    createBoard();



    // //setting players
    // var player1 = "player1";
    // var player2 = "player2";

    // var turn = ""; turn count 1

    var checkForWinner = function(row, column) {
        // pseudocode

    };

    // checkForWinner();

    //player 1 red turn
    var $player1 = $(function() {
        $('.slot').hover(
            function() {
                $(this).addClass('red')
            },
            function() {
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
            },
            function() {
                $(this).removeClass('yellow')
            });
    })
    $('.slot').click(function(event) {
        $(this).off().addClass('yellow');
        checkForWinner();
    });









});
