$(document).ready(function(){

  // hiding the player name input field

  $('#player-name-button').on('click',function(){
    var playerName = $('#player-name-form').val();
    $('#player-name-input').html('<h1>welcome, ' + playerName + '</h1>');
    $('#pacman-living').css('visibility', 'visible');
    $('#player-name-form').css('visibility', 'hidden');
    $('#player-name-button').css('visibility', 'hidden');
  });

  // rotating Pacman sprite

   $(document).on('keyup', function(e){
      var direction = e.keyCode
      if(direction == '38') { $('.pacman').css('transform', 'rotate(270deg)') }
      if(direction == '40') { $('.pacman').css('transform', 'rotate(90deg)') }
      if(direction == '37') { $('.pacman').css('transform', 'rotate(180deg)') }
      if(direction == '39') { $('.pacman').css('transform', 'rotate(0deg)') }
    });


})