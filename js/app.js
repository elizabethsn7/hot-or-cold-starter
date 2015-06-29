 $(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



  var newGame = function() {
    var guessAmount = 0;
    var guesses;
  
    var randNum = Math.ceil(Math.random()*100 + 1);
    console.log(randNum);
  
  $('#guessList li').hide();
  
    $('form').submit(function(event) {
      event.preventDefault();
      userGuess = $('#userGuess').val();
      console.log(userGuess);


      if (randNum == userGuess) {
        console.log('equals number')
      }
      else if (randNum - 19 >= userGuess || randNum - 1 >= userGuess) {
        console.log("You're too low!");
      }
      else if (randNum - 40 >= userGuess || randNum - 20 >= userGuess) {
        console.log("You're way too low!");
      }
      else if (randNum + 1 <= userGuess) {
        console.log("Why you be so high");
      }
      else if (randNum + 30 <= userGuess) {
        console.log("Why you be way too high");


      }

      guessAmount++;
      console.log(guessAmount);
      $('#count').text(guessAmount);
      $('#guessList').append('<li>' + userGuess + '</li>');
     
     });
    } 

    newGame();

   });



 





