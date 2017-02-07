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

		// Fx: Do this when user clicks a gem
		gemUp: function (gem) {
			this.userScore += gem;
			return this.userScore;
			console.log("User Score is " + userScore);
		},
	}


// PLAY THE game
$(document).ready(function() {

	// Assign random numbers to match-target & gems
	game.initialize();

	//Display Match-Target & User Score values
	$("#random-match-display").text(game.matchThis);
	console.log("matchThis is " + matchThis);
	$("#user-score").text(game.userScore);

	//@TODO: Assign data-vals to each gem
		// '<div data-gem="' + aquamarine + '"'></div>
		// '<div data-gem="' + emerald + '"'></div>
		// '<div data-gem="' + ruby + '"'></div>
		// '<div data-gem="' + topaz + '"'></div>

	// Define what happens when a user clicks a gem
	$("#gem").on("click", function(){
		// Pull data-gem value, convert to int, run gemUp
		game.gemUp(parseInt($(this).data("gem")));
		// Check if the user score is >= Match-Target
		if (userScore === matchThis) {
			alert("You Win!");
			winCount++;
			$("#win-count").text(game.winCount);
			game.initialize();
		} else if (userScore > matchThis) {
			alert("You Lose!");
			loseCount++;
			$("#lose-count").text(game.loseCount);
			$("#win-count").text(game.winCount);
			game.initialize();
		}
	});
	
});

