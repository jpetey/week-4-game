// CREATE OUR Game OBJECT 
	// Define the properties of the object
	var game = {
		//set default win & loss counters  
		winCount: 0,
		loseCount: 0,
		// Set inital user & match-target scores
		matchThis: "",
		userScore: 0,
		// Set initial gem values
		aquamarine: "",
		emerald: "",
		ruby: "",
		topaz: "",	

		// Fx: Define game Start / Restart
		initialize: function() {
			//set game state
			matchThis = this.getRandom(19,120);
				console.log("matchThis is " + matchThis);
			aquamarine = this.getRandom(1,12);
				console.log("aquamarine is " + aquamarine);
			emerald = this.getRandom(1,12);
				console.log("emerald is " + emerald);
			ruby = this.getRandom(1,12);
				console.log("ruby is " + ruby);
			topaz = this.getRandom(1,12);	
				console.log("topaz is " + topaz);
			userScore = 0;


		},

		// Fx: Randomly assign number, given a min & max value
		getRandom: function (min,max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;		
		},

		// Fx: When a user clicks a gem. identify gem
		gemId: function (gem) {
			this.userScore += gem;
			return this.userScore;
			console.log("User Score is " + userScore);
		},
	}


// PLAY THE game
$(document).ready(function() {

	// Assign random numbers to match-target & gems
	game.initialize();



	//@TODO: Assign data-vals to each gem
		$("#aquamarine").attr("data-gem", aquamarine);
		$("#emerald").attr("data-gem", emerald);
		$("#ruby").attr("data-gem", ruby);
		$("#topaz").attr("data-gem", topaz);

		//(parseInt($(this).data("cup")))

	// Define what happens when a user clicks a gem
	$(".gem").on("click", function(){
		// Clear You Win / You Lose after restart
		$("#announce").empty();
		
		// Add gem value to userScore
		userScore += parseInt($(this).data("gem"));
		console.log("User Score after 1st click is: " + userScore);

		//Display Match-Target & User Score values
		$("#random-match-display").html(matchThis);
		console.log("matchThis is " + matchThis);
		$("#user-score").html(userScore);
		console.log("userScore at this point should be 0: " + userScore);

		// Check if the user score is >= Match-Target
		if (userScore === matchThis) {
			console.log("winCount before ++: " + game.winCount);
			game.winCount++;
			console.log("winCount after ++: " + game.winCount);
			
			$("#announce").html("YOU WIN!");			
			$("#win-display").text(game.winCount);
			
			game.initialize();
		
		} else if (userScore > matchThis) {
			console.log("winCount before ++: " + game.loseCount);	
			game.loseCount++;
			console.log("winCount before ++: " + game.loseCount);	

			$("#announce").html("YOU LOSE!");
			$("#loss-display").html(game.loseCount);
			
			game.initialize();
		}
	});
	
});

