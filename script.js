$(document).ready(function(){

//making each slot for the game board
// var $slotmaker = function(){
//   var $slot = $('<div>');
//   var $gameboard = $('.gameboard')
//   $slot.addClass('slot');
//   $gameboard.append($slot);
// }
// //make 42 total slots, 6 x 7
// for(var i = 0; i< 42; i++){
//   $slotmaker();
// }

var $slotRowMaker = function(){
  var $slotRow = $('<div>');
  var $gameboard = $('.gameboard')
  $slotRow.addClass('row');
  $('gameboard').append($slotRow);
}
//make 42 total slots, 6 x 7
for(var i = 0; i< 6; i++){
  $slotRowMaker();
}
// make 7 slots per column
 var $slotmaker = function(){
  var $slot = $('<div>');
  var $gameboard = $('.gameboard')
  $slot.addClass('slot');
  $('slotRow').append($slot);
}
//make 42 total slots, 6 x 7
for(var i = 0; i< 7; i++){
  $slotmaker();
}



// //setting players
// var player1 = "player1";
// var player2 = "player2";

// var turn = "";

// var checkForWinner = function(){

// }

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
          $(this).off().addClass('red')
          $(this).toggle($player2);

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
});














});
