/* Game asks questions to determine your taste and identifies ingredients
   to suit those tastes. */

// Create Constructor Functions for Questions, Ingredients, and the Pantry

// Use those Constructors to create Objects representing the Questions, Ingredients,
// and pantry

// When the user submits choice, you should build a preferences Object (if the user
// chooses wants a strong drink then this should be recording in the Object)

// Ingredient category and Question category
// create cunstroctors that create category

/*-------------------------------------------------------------------*/

/*========= MAIN CODE BODY==========*/

$(document).ready(function(event){
	
	$('.create-drink-button').click(function(event){
		event.preventDefault();
		createDrink();
	});



/*========== CONSTRUCTORS ===========*/

	var Question = function(tastePref, bartenderQuestion) {
		this.tastePref = tastePref;
		this.bartenderQuestion = bartenderQuestion;
	}

	var Ingredients = function(type, ingredients){
		this.type = type;
		this.ingredients = ingredients;
	}



/*============ VARIABLES ============*/

	var strong = new Question("strong", "Do ye like yer drinks strong?");
	var salty = new Question("salty", "Do ye like it with a salty tang?");
	var bitter = new Question("bitter", "Are ye a lubber who likes it bitter?");
	var sweet = new Question("sweet", "Would ye like a bit of sweetness with yer poison?");
	var fruity = new Question("fruity", "Are ye one for a fruity finish?");

	var questions = [strong, salty, bitter, sweet, fruity];


// All of the available ingredients
	var ingredientList = {
		strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
		salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
		bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
		sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
		fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
	}


// Inventory of each ingredient
/*	var pantry = {
		"rum": 10, 
		"whiskey": 5,
		"gin": 12
	}		*/

	askQuestion();


/*--------- FUNCTIONS ----------*/

// Displays Questions and Yes checkbox's
	function askQuestion() {
		for (var i = 0; i < questions.length; i++) {
			$('.displayQuestion').append(questions[i].bartenderQuestion + '<input type="checkbox" id="' + questions[i].tastePref + '">AYE!<br>');
		};
	}


// Randomizes what ingredients to pick based on choices	
	function createDrink() {
		var ingredients; 

		for (var type in ingredientList) {
			if ($('#' + type).prop('checked')) {
				// Get random item from array
				//ingredients.push(ingredientList[type][0] + ', ');
				ingredients[i] = 'rum'
			} else {
				// do nothing
			}
		}

	/*	ingredients = {
			strong: 'rum',
			salty: 'rumsalty'
			bitter: : ''
		}
	 Show completed drink after 
	$('.drinkUp').append('' + ingredients.strong + ingredients.salty + ingredients.bitter + ingredients.sweet + ingredients.fruity);		
	}	

		var drinks = {
		strong: 'You want the Pina Coloada'
		}
	}
	

});