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
                displayHandler(workoutName, dayId, i);
            }
            
            dayId++;
        });
    }
}));

// generate html content to rest inside workout<day>-<slot> divs. Accept workoutName, day ID, and day slot as arguments from api fetch
var displayHandler = function(workoutName, dayId, slot) {
    // grab the div by id
    var workingDiv = document.querySelector("#workoutDay"+dayId+"-"+slot);

    // insert workoutName as html
    workingDiv.innerHTML = "<p>"+workoutName+"</p>";
}


// 
// 
// I BELIEVE THIS IS WHERE NUTRITION SECTION LOGIC BEGINS - TAYLOR
// 
// 


// get calorie value
var calorieInput = document.getElementById("#calories")

$("#nutriBtn").click(function () {

        // var calories = calorieInput

    const settings = {

        "url": `https://api.spoonacular.com/recipes/random?number=21&addRecipeInformation=true&addRecipeNutrition=true&apiKey=21fc282010dd4a55b9f7abe8cc4b3058`,
        "method": "GET",

    };

    $.ajax(settings).then(function (response) {

        var eachDayNutEl = document.querySelectorAll('.recipeInput');
        eachDayNutEl.forEach(element => {
            element.innerHTML='';
        });
        var recipes = response.recipes;
        console.log(recipes);
        var placement = 0;
        var mealType = 0;
        for(var i = 0; i < recipes.length; i++){
            var title = recipes[i].title+' ';
            var recipeLink = recipes[i].sourceUrl;
            if(placement == 0){
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var breakfastDivEl = document.querySelector('#breakfast-1');
                var lunchDivEl = document.querySelector('#lunch-1');
                var dinnerDivEl = document.querySelector('#dinner-1');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast: '
                    mealName.classList.add("has-text-weight-semibold");
                    breakfastDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    breakfastDivEl.appendChild(containerNut);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch: '
                    mealName.classList.add("has-text-weight-semibold");
                    lunchDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    lunchDivEl.appendChild(containerNut);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner: '
                    mealName.classList.add("has-text-weight-semibold");
                    dinnerDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    dinnerDivEl.appendChild(containerNut);
                }
                //increase placement counter to move to next column
                placement++
            } else if (placement == 1) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var breakfastDivEl = document.querySelector('#breakfast-2');
                var lunchDivEl = document.querySelector('#lunch-2');
                var dinnerDivEl = document.querySelector('#dinner-2');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast: '
                    mealName.classList.add("has-text-weight-semibold");
                    breakfastDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    breakfastDivEl.appendChild(containerNut);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch: '
                    mealName.classList.add("has-text-weight-semibold");
                    lunchDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    lunchDivEl.appendChild(containerNut);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner: '
                    mealName.classList.add("has-text-weight-semibold");
                    dinnerDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    dinnerDivEl.appendChild(containerNut);
                }
                //increase placement counter to move to next column
                placement++
            } else if (placement == 2) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var breakfastDivEl = document.querySelector('#breakfast-3');
                var lunchDivEl = document.querySelector('#lunch-3');
                var dinnerDivEl = document.querySelector('#dinner-3');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast: '
                    mealName.classList.add("has-text-weight-semibold");
                    breakfastDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    breakfastDivEl.appendChild(containerNut);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch: '
                    mealName.classList.add("has-text-weight-semibold");
                    lunchDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    lunchDivEl.appendChild(containerNut);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner: '
                    mealName.classList.add("has-text-weight-semibold");
                    dinnerDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    dinnerDivEl.appendChild(containerNut);
                }
                //increase placement counter to move to next column
                placement++
            } else if (placement == 3) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var breakfastDivEl = document.querySelector('#breakfast-4');
                var lunchDivEl = document.querySelector('#lunch-4');
                var dinnerDivEl = document.querySelector('#dinner-4');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast: '
                    mealName.classList.add("has-text-weight-semibold");
                    breakfastDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    breakfastDivEl.appendChild(containerNut);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch: '
                    mealName.classList.add("has-text-weight-semibold");
                    lunchDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    lunchDivEl.appendChild(containerNut);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner: '
                    mealName.classList.add("has-text-weight-semibold");
                    dinnerDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    dinnerDivEl.appendChild(containerNut);
                }
                //increase placement counter to move to next column
                placement++
            } else if (placement == 4) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var breakfastDivEl = document.querySelector('#breakfast-5');
                var lunchDivEl = document.querySelector('#lunch-5');
                var dinnerDivEl = document.querySelector('#dinner-5');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast: '
                    mealName.classList.add("has-text-weight-semibold");
                    breakfastDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    breakfastDivEl.appendChild(containerNut);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch: '
                    mealName.classList.add("has-text-weight-semibold");
                    lunchDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    lunchDivEl.appendChild(containerNut);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner: '
                    mealName.classList.add("has-text-weight-semibold");
                    dinnerDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    dinnerDivEl.appendChild(containerNut);
                }
                //increase placement counter to move to next column
                placement++
            } else if (placement == 5) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var breakfastDivEl = document.querySelector('#breakfast-6');
                var lunchDivEl = document.querySelector('#lunch-6');
                var dinnerDivEl = document.querySelector('#dinner-6');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast: '
                    mealName.classList.add("has-text-weight-semibold");
                    breakfastDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    breakfastDivEl.appendChild(containerNut);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch: '
                    mealName.classList.add("has-text-weight-semibold");
                    lunchDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    lunchDivEl.appendChild(containerNut);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner: '
                    mealName.classList.add("has-text-weight-semibold");
                    dinnerDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    dinnerDivEl.appendChild(containerNut);
                }
                //increase placement counter to move to next column
                placement++
            } else if (placement == 6) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var breakfastDivEl = document.querySelector('#breakfast-7');
                var lunchDivEl = document.querySelector('#lunch-7');
                var dinnerDivEl = document.querySelector('#dinner-7');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast: '
                    mealName.classList.add("has-text-weight-semibold");
                    breakfastDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    breakfastDivEl.appendChild(containerNut);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch: '
                    mealName.classList.add("has-text-weight-semibold");
                    lunchDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    lunchDivEl.appendChild(containerNut);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner: '
                    mealName.classList.add("has-text-weight-semibold");
                    dinnerDivEl.appendChild(mealName);
                    //append random recipe as a link
                    actualRecipe.setAttribute('href', recipeLink);
                    actualRecipe.setAttribute('target', '_blank');
                    actualRecipe.textContent = title;
                    containerNut.appendChild(actualRecipe);
                    dinnerDivEl.appendChild(containerNut);
                }
                //reset placement counter to go back to first coloumn
                placement = 0;
                //increase meal type so next set of recipies fall under the next meal type
                mealType++;
                
            }
        }
        
    });
});

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




    // get calorie value
    var calorieInput = document.getElementById("#calories")

    $("#nutriBtn").submit(function () {
        // var calories = calorieInput
        var numberRecipe = 21;

        const settings = {

            "url": `https://api.spoonacular.com/recipes/complexSearch?query=paleo&number=${numberRecipe}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=21fc282010dd4a55b9f7abe8cc4b3058`,
            "method": "GET",

        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            for (var i = 0; i < 5; i++) {
                // generate random number to identify make recipe selection random
                var randomRecipe = Math.floor(Math.random() * numberRecipe);

                // store title recipe inside variable
                // var recipeTitle = response.results[randomRecipe].title
                var recipeTitle = response.results[randomRecipe].nutrition.nutrients[0].amount
                // create card for this recipe

                // add recipe title to card title

                // append card to HTML
                console.log(recipeTitle)
            }
        });
    });

//fetch data from APIs using for input


//button click function
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

    //gets user set name for the save
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