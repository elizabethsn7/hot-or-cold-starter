 $(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    var randNum

  var newGame = (function() {
    var guessAmount = 0;
    var guesses;
  
    randNum = Math.ceil(Math.random()*100);
    console.log(randNum);

    $('#guessList li').hide();

    $('form').submit(function(event) {
      event.preventDefault();
      var userGuess = $('#userGuess').val();
      console.log(userGuess);

      if ($.isNumeric(userGuess) && userGuess < 101) {
        
        guessAmount++;
        console.log(guessAmount);
        
        $('#count').text(guessAmount);
        $('#guessList').append('<li>' + userGuess + '</li>');
        $('#userGuess').val('');

        if (randNum == userGuess) {
          $('#feedback').text('you win');
          console.log('equals number');
        }
        else if (randNum - 99 >= userGuess) {
          console.log('You cool baby, real cool');
        }
        else if (randNum - 75 >= userGuess) {
          console.log('You\'re cold, ice cold!');
        }
        else if (randNum - 50 >= userGuess) {
          console.log('You\'re warmish but not really');
        }
        else if (randNum - 25 >= userGuess) {
          console.log('You\'re warm...ish');
        }
        else if (randNum - 1 >= userGuess) {
          console.log('Ouch! Fire');
        }
        else if (randNum + 1 >= userGuess) {
           console.log('You so hot you on fire!');
        }
        else if (randNum + 25 >= userGuess) {
         console.log('There\'s a cool breeze');
        }
        else if (randNum + 50 >= userGuess) {
         console.log('Ice Ice Baby, too cold but your warmer than Elsa');
        }
        else if (randNum + 75 >= userGuess) {
         console.log('Let it go...It\'s frozen');
        }
        else if (randNum + 99 >= userGuess) {
         console.log('You have entered Antartica');
        }
      } 
      else { 
        $('#feedback').text('enter a number under 100');
      } 
      
     
     });
   
  });


  $('.new').click(function() {
    newGame();
    $('#feedback').text('Make Your Guess');
  });

  newGame();



});




 





