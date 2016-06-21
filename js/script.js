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


//	var Ingredients = function(type, ingredients){
//		this.type = type;
//		this.ingredients = ingredients;
//	}



/*============ VARIABLES ============*/

// Question/Taste Objects created using Question constructor
	var strong = new Question("strong", "Do ye like yer drinks strong?");
	var salty = new Question("salty", "Do ye like it with a salty tang?");
	var bitter = new Question("bitter", "Are ye a lubber who likes it bitter?");
	var sweet = new Question("sweet", "Would ye like a bit of sweetness with yer poison?");
	var fruity = new Question("fruity", "Are ye one for a fruity finish?");


// Array of all Question/Taste objects
	var questions = [strong, salty, bitter, sweet, fruity];


// All of the available ingredients
	var ingredientList = {
		strong: ['Glug of rum', 'slug of whiskey', 'splash of gin'],
		salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
		bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
		sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
		fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
	}


// Inventory of each ingredient
	var strongInv = {
		'Glug of rum': 9,
		'slug of whiskey': 7,
		'splash of gin': 8
	}

	var saltyInv = {
		'Olive on a stick': 5,
		'slat-dusted rim': 4,
		'rasher of bacon': 7
	}	

	var bitterInv = {
		'Shake of bitters': 5,
		'splash of tonic': 6,
		'twist of lemon peel': 3
	}

	var sweetInv = {
		'Sugar cube': 5,
		'spoonful of honey': 3,
		'splash of cola': 4
	}

	var fruityInv = {
		'Slice of orange': 6,
		'dash of cassis': 8,
		'cherry on top': 2
	}


// Array of Ingredients/Inventory objects
	var Pantry = [strongInv, saltyInv, bitterInv, sweetInv, fruityInv];
	

	askQuestion();


/*============ FUNCTIONS ==============*/

// Displays Questions and Yes checkbox's
	function askQuestion() {
		for (var i = 0; i < questions.length; i++) {
			$('.displayQuestion').append(questions[i].bartenderQuestion + '<input type="checkbox" id="' + questions[i].tastePref + '">AYE!<br>');
		};
	}


// Randomizes what ingredients to pick based on choices and displays drink
	function createDrink() {
		var ingredientsPicked = []; 

		for (var i in ingredientList) {
			if ($('#' + i).prop('checked')) {  // 'For In' Loop that determines if YES is checked
				// Get random item from array
				


				//var randomItem = ingredientList.i[Math.floor(Math.random()*items.length)];

				//ingredientsPicked.push(ingredientList[i][randomItem] + ', ');
				
			} else {
				// do nothing
			}
		}

	// Show completed drink 
		$('.drinkUp').append('Yer drink has these barnacles of goodness, matey:' + ingredientsPicked.strong + ingredientsPicked.salty + ingredientsPicked.bitter + ingredientsPicked.sweet + ingredientsPicked.fruity);		
		}		
});