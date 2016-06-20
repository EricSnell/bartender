/* Game asks questions to determine your taste and identifies ingredients
   to suit those tastes. */

// Create Constructor Functions for Questions, Ingredients, and the Pantry

// Use those Constructors to create Objects representing the Questions, Ingredients,
// and pantry

// The UI will ask a Question and provide an input for the answer

// When the user submits choice, you should build a preferences Object (if the user
// chooses wants a strong drink then this should be recording in the Object)

// Ingredient category and Question category
// create cunstroctors that create category

// createDrink would randomize what ingredients to pick based on answers

$(document).ready(function(event){


/*var Person = function(firstName, Lastname){
    this.firstName = firstName;
    this.lastName = lastName;
}

var joe = new Person('joe', 'doe'); */

var Question = function(tastePref, bartenderQuestion) {
	this.tastePref = tastePref;
	this.bartenderQuestion = bartenderQuestion;
}

var strong = new Question("strong", "Do you like your drinks strong?");
var salty = new Question("salty", "Do you like it salty?");
var bitter = new Question("bitter", "Bitter?");
var sweet = new Question("sweet", "Sweet?");
var fruity = new Question("fruity", "Some fruit flavor?");

var questions = [strong, salty, bitter, sweet, fruity];


$('.displayQuestion').text('questions[0].bartenderQuestion');

	// contains all of the available ingredients
	var ingredientList = {
		strong: ['rum', 'whiskey', 'gin'],
		salty: ['rumsalty', 'whiskeysalty', 'ginsalty'],
		bitter: ['rumbitter', 'whiskeybitter', 'ginbitter'],
		sweet: ['rumsweet', 'whiskeysweet', 'ginsweet'],
		fruity: ['rumfruity', 'whiskeyfruity', 'ginfruity']
	}


	var inventory = {
		"rum": 10, 
		"whiskey": 5,
		"gin": 12
	}

//var Ingredients = function()
	$('.testButton').click(function(){
		event.preventDefault();
		console.log('works');
		$('.displayQuestion').text('questions[0].bartenderQuestion');
	})


/*--------- FUNCTIONS ----------*/
	//var newQuestion = function(question) {

	//}


});