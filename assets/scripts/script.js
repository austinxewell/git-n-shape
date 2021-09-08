// create variables for exersiceDB
var upperLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs';
var waist = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist';
var lowerLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs';
var back = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back';
var cardio = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio';
var chest = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest';
var shoulders = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders';

// set dayId to begin with Sunday(1)
dayId = 1

// grab user input from body part selector
var bodyPartSelectorEl = document.getElementById("body-part");

var bodyPart = bodyPartSelectorEl.options[bodyPartSelectorEl.selectedIndex].text;

// random number generator to pull random response index slot
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Listen for workout button click and grab response data
$("#workOutBtn").on('click', (function() {
    console.log(bodyPart);
    for (var i = 0; i < 5; i++) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs',
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
            }
        };
        
        $.ajax(settings).done(function (response) {
            for (var i = 0; i < 5; i++) {
                // generate random number from 0-length of array
                var random = getRandomInt(response.length);
                
                // grab workout from that random index in array
                var workoutName = response[random].name;
                
                // send workoutName, dayId and index number to the displayHandler
                workoutDisplayHandler(workoutName, dayId, i);
            }
            
            dayId++;
        });
    }
}));

// generate html content to rest inside workout<day>-<slot> divs. Accept workoutName, day ID, and day slot as arguments from api fetch
var workoutDisplayHandler = function(workoutName, dayId, slot) {
    // grab the div by id
    var workingDiv = document.querySelector("#workoutDay"+dayId+"-"+slot);

    // insert workoutName as html
    workingDiv.innerHTML = "<p>"+workoutName+"</p>";
}


// 
// 
// NUTRITION SECTION LOGIC BEGINS
// 
// 

// get calorie value
var calorieInput = document.getElementById("#calories")

// listen for generate nutrition button 'click', then fetch api to send to display handler
$("#nutriBtn").click(function () {

        // var calories = calorieInput

    const settings = {

        "url": `https://api.spoonacular.com/recipes/random?number=21&addRecipeInformation=true&addRecipeNutrition=true&apiKey=21fc282010dd4a55b9f7abe8cc4b3058`,
        "method": "GET",

    };

    $.ajax(settings).then(function (response) {

        // grab recipes list from response
        var recipes = response.recipes;
        console.log(recipes);
        
        for(var i = 0; i < recipes.length; i++){

            // grab recipe name
            var recipeName = recipes[i].title;

            // grab recipe link
            var recipeLink = recipes[i].sourceUrl;

            // send info to recipe display handler
            recipeDisplayHandler(recipeName, recipeLink, i)
        }
    });
});

// Use a counter to assign meal of the day
var counter = 1

// generate html content to rest inside recipe<number> divs. Accept recipeName, recipeLink, and number as arguments from api fetch
var recipeDisplayHandler = function(recipeName, recipeLink, number) {

    // grab the div by id
    var workingDiv = document.querySelector("#recipe"+number);

    // if counter gets too high (4), reset it
    if (counter == 4) {
        counter = 1
    }

    // check for meal of the day (breakfast)
    if (counter === 1) {
        // name the meal breakfast
        // insert recipe info as html
        workingDiv.innerHTML = "<h2 class='has-text-weight-semibold'>Breakfast:</h2><a target='_blank' href="+recipeLink+">"+recipeName+"</a>";
    }
    // (lunch)
    else if (counter === 2) {
        // name the meal lunch
        // insert recipe info as html
        workingDiv.innerHTML = "<h2 class='has-text-weight-semibold'>Lunch:</h2><a target='_blank' href="+recipeLink+">"+recipeName+"</a>";
    }
    // (dinner)
    else if (counter === 3) {
        // name the meal dinner
        // insert recipe info as html
        workingDiv.innerHTML = "<h2 class='has-text-weight-semibold'>Dinner:</h2><a target='_blank' href="+recipeLink+">"+recipeName+"</a>";
    }

    // increment counter
    counter++
};

// bulma logic for mobile navbar toggle animation
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});

// 
// 
// SAVE BUTTON LOGIC BEGINS
// 
// 


//save button click function
$(saveBtn).on('click', function(){
    //array for all of the saved data ever
    var allSavedData = JSON.parse(localStorage.getItem("saves")) || [];
    
    //saves workout data

    workoutArr=[];

    var dayNumber = 1;
    for(var i =0; i<7; i++){
        for(var u = 0;u<5;u++){
            var workingDiv = document.querySelector("#workoutDay"+dayNumber+"-"+u);
            var workouts = workingDiv.textContent;
            workoutArr.push(workouts);
        }
        dayNumber++;
    }

    //gets user to set name for the save
    var setName = prompt('enter a name for the save');

    //array for all food items
    var foodItems = [];

    var eachDayNutEl = document.querySelectorAll('.recipeInput');

    //gets name of food item and puts in in foodItems array
    eachDayNutEl.forEach(element =>{
        dailyFood = element.textContent;
        foodItems.push(dailyFood);
    });

    //sets name of save and the food items to an object
    var savedObject= {
        name: setName,
        nutrition: foodItems,
        workout: workoutArr
    }

    //adds object to main array
    allSavedData.push(savedObject);

    //adds
    localStorage.setItem('saves', JSON.stringify(allSavedData));
})