/* Game asks questions to determine your taste and identifies ingredients
   to suit those tastes. */

// Create Constructor Functions for Questions, Ingredients, and the Pantry

// Use those Constructors to create Objects representing the Questions, Ingredients,
// and pantry

// When the user submits choice, you should build a preferences Object (if the user
// chooses wants a strong drink then this should be recording in the Object)

// Ingredient category and Question category
// create cunstroctors that create category

// createDrink would randomize what ingredients to pick based on answers

$(document).ready(function(event){
	
	$('.testButton').click(function(event){
		event.preventDefault();
		createDrink();
	})


/*====== CONSTRUCTORS =======*/

	var Question = function(tastePref, bartenderQuestion) {
		this.tastePref = tastePref;
		this.bartenderQuestion = bartenderQuestion;
	}

	var Ingredients = function(type, ingredients){
		this.type = type;
		this.ingredients = ingredients;
	}



/*======= VARIABLES ========*/

	var strong = new Question("strong", "Do you like your drinks strong?");
	var salty = new Question("salty", "Do you like it salty?");
	var bitter = new Question("bitter", "Bitter?");
	var sweet = new Question("sweet", "Sweet?");
	var fruity = new Question("fruity", "Some fruit flavor?");

	var questions = [strong, salty, bitter, sweet, fruity];


	// contains all of the available ingredients
	var ingredientList = {
		strong: ['rum', 'whiskey', 'gin'],
		salty: ['rumsalty', 'whiskeysalty', 'ginsalty'],
		bitter: ['rumbitter', 'whiskeybitter', 'ginbitter'],
		sweet: ['rumsweet', 'whiskeysweet', 'ginsweet'],
		fruity: ['rumfruity', 'whiskeyfruity', 'ginfruity']
	}


	var pantry = {
		"rum": 10, 
		"whiskey": 5,
		"gin": 12
	}


	askQuestion();
/*--------- FUNCTIONS ----------*/

	function askQuestion() {
		for (var i = 0; i < questions.length; i++) {
			$('.displayQuestion').append(questions[i].bartenderQuestion + '<input type="checkbox" id="' + questions[i].tastePref + '">YES<br>');
		};
	}

	function createDrink() {
		for (var i in ingredientList) {
			if ($('#' + i).prop('checked')) {
				
			} else {
				
			}
		}
	}	

});