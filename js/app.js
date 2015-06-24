 
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	var randNum;
	var guessAmount = 0;
	var guesses;


	var hiddenRandNum = function() {
		randNum = Math.ceil(Math.random()*100);
		return randNum;
	}

  	var newGame=function() {
  		$('#guessList li').hide();
  	}

    $('form').submit(function(event) {
      event.preventDefault();
      guesses = $('#userGuess').val();
      guessAmount += 1;
      $('#count').text(guessAmount);
      $('#guessList').append('<li>' + guesses + '</li>');
    
    });

        });

});




