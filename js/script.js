
/*========= MAIN CODE BODY==========*/

$(document).ready(function(event){
	
	$('.create-drink-button').click(function(event){
		event.preventDefault();
		createDrink();
	});



/*========== CONSTRUCTORS ===========*/

	var DrinkStyle = function(tastePref, bartenderQuestion, ingredients) {
		this.tastePref = tastePref;
		this.bartenderQuestion = bartenderQuestion;
		this.ingredients = ingredients;
	};



/*============ VARIABLES ============*/

// Question/Taste Objects created using Question constructor
	var strong = new DrinkStyle("strong", "Do ye like yer drinks strong?", ['Glug of rum', 'slug of whiskey', 'splash of gin']);
	var salty = new DrinkStyle("salty", "Do ye like it with a salty tang?", ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
	var bitter = new DrinkStyle("bitter", "Are ye a lubber who likes it bitter?", ['Shake of bitters', 'splash of tonic', 'twist of lemon peel']);
	var sweet = new DrinkStyle("sweet", "Would ye like a bit of sweetness with yer poison?", ['Sugar cube', 'spoonful of honey', 'splash of cola']);
	var fruity = new DrinkStyle("fruity", "Are ye one for a fruity finish?", ['Slice of orange', 'dash of cassis', 'cherry on top']);


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
	var Pantry = {
		// strong 
		'Glug of rum': 0,
		'slug of whiskey': 0,
		'splash of gin': 3,
		// salty
		'Olive on a stick': 4,
		'slat-dusted rim': 2,
		'rasher of bacon': 2,
		// bitter
		'Shake of bitters': 4,
		'splash of tonic': 2,
		'twist of lemon peel': 3,
		// sweet
		'Sugar cube': 2,
		'spoonful of honey': 3,
		'splash of cola': 4,
		// fruity
		'Slice of orange': 2,
		'dash of cassis': 3,
		'cherry on top': 2,
	};
	

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
		// Array to store random ingredients
		var ingredientsPicked = []; 

		// Loops through Ingredient List, checks if YES, then adds random ingredient to ingredientsPicked array
		for (var i in ingredientList) {
			if ($('#' + i).prop('checked')) { 
				var randomItem = ingredientList[i][Math.floor(Math.random() * ingredientList[i].length)];
				
				ingredientsPicked.push(randomItem);
				console.log(ingredientsPicked);
			}
			// Show completed drink 
			$('#drinkUp').text('Here ye arr, matey! A ' + ingredientsPicked.join(", ") + "!");	
		}					
	}

});

				/*	while (ingredientList[i].length > 0) {

					var randomItem = ingredientList[i][Math.floor(Math.random() * ingredientList[i].length)];

					if (Pantry[randomItem] > 0) {

						ingredientsPicked.push(randomItem);
						Pantry[randomItem]--;
					}
					else {
						ingredientList[i].slice(ingredientList[i].indexOf(i), 1)
					}
				}

				if (ingredientList[i].length === 0) {
					alert('"Blimey!" No more ' + i + ' ingredients left!"');
				}
			*/