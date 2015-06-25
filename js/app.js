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
  
    randNum = Math.ceil(Math.random()*100 + 1);
    console.log(randNum);
  
  $('#guessList li').hide();
  
    $('form').submit(function(event) {
      event.preventDefault();
      guesses = $('#userGuess').val();
      
      if (guessAmount >= userGuess) {
        return ("You're too high");
        console.log("You're too high!");

      } else if (guessAmount <= userGuess) {
        console.log("Why you be so low");

      }

      console.log(guesses);

      guessAmount++;
      console.log(guessAmount);
      $('#count').text(guessAmount);
      $('#guessList').append('<li>' + guesses + '</li>');
     
     });
    } 

    newGame();

   });



 





