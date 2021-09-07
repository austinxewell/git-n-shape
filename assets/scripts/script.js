// create variables for exersiceDB
// var upperLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs';
// var waist = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist';
// var lowerLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs';
// var back = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back';
// var cardio = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio';
// var chest = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest';
// var shoulders = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders';


var all = 'https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight';

// DOM elements
var workoutContainerEl = document.querySelector('#weekly-workout');
var workoutCard = document.createElement('div');


//5 upper legs workouts
function startPage() {
    $("#workOutBtn").on('click', (function () {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": all,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                    "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
                }
            };

            $.ajax(settings).done(function (response) {
                var workoutDayEl = document.querySelectorAll('.workoutInput');
                workoutDayEl.forEach(element => {
                    element.innerHTML='';
                });
                console.log(response);

                var placement = 0;
 
                
                for(var i = 0; i < 35; i++){

                    var workouts = (response[Math.floor(Math.random() * response.length)]);

                console.log(workouts)
                var workoutLink = (workouts.gifUrl);
                console.log(workoutLink)
                //APPENDS to workout area of the DOM
                if(placement == 0){
                    var workoutContainer = document.createElement('div');
                    var actualWorkout = document.createElement('a');
                    var docEl = document.querySelector('#workDay-1');

                    actualWorkout.setAttribute('href', workoutLink);
                    actualWorkout.setAttribute('target', '_blank');
                    var workoutName = document.createElement('h2');
                    workoutName.textContent= (workouts.name)
                    docEl.appendChild(workoutName);

                    // actualWorkout.setAttribute('href', workoutLink);
                    // actualWorkout.setAttribute('target', '_blank');
                    // actualWorkout.textContent = (workout.name);
                     workoutContainer.appendChild(actualWorkout);
                    // docEl.appendChild(workoutContainer);
       
                    placement++
                } else if (placement == 1) {
                    var workoutContainer = document.createElement('div');
                    var workoutLink = document.createElement('a');
                    var docEl = document.querySelector('#workDay-2');

                    var workoutName = document.createElement('h2');
                    workoutName.textContent= (workouts.name)
                    docEl.appendChild(workoutName);
                    placement++
                }   else if (placement == 2) {
                    var workoutContainer = document.createElement('div');
                    var workoutLink = document.createElement('a');
                    var docEl = document.querySelector('#workDay-3');

                    var workoutName = document.createElement('h2');
                    workoutName.textContent= (workouts.name)
                    docEl.appendChild(workoutName);
                    placement++
                }   else if (placement == 3) {
                    var workoutContainer = document.createElement('div');
                    var workoutLink = document.createElement('a');
                    var docEl = document.querySelector('#workDay-4');

                    var workoutName = document.createElement('h2');
                    workoutName.textContent= (workouts.name)
                    docEl.appendChild(workoutName);
                    placement++
                }   else if (placement == 4) {
                    var workoutContainer = document.createElement('div');
                    var workoutLink = document.createElement('a');
                    var docEl = document.querySelector('#workDay-5');

                    var workoutName = document.createElement('h2');
                    workoutName.textContent= (workouts.name)
                    docEl.appendChild(workoutName);
                    placement++
                }   else if (placement == 5) {
                    var workoutContainer = document.createElement('div');
                    var workoutLink = document.createElement('a');
                    var docEl = document.querySelector('#workDay-6');

                    var workoutName = document.createElement('h2');
                    workoutName.textContent= (workouts.name)
                    docEl.appendChild(workoutName);
                    placement++
                }   else if (placement == 6) {
                    var workoutContainer = document.createElement('div');
                    var workoutLink = document.createElement('a');
                    var docEl = document.querySelector('#workDay-7');

                    var workoutName = document.createElement('h2');
                    workoutName.textContent= (workouts.name)
                    docEl.appendChild(workoutName);
                    placement++
                }

        
        // workoutContainerEl.innerHTML = ;
        //   workoutCard.setAttribute(workouts.name);
        //   workoutContainerEl.appendChild(workoutCard);

        
    }})

  


 

 
        // 5 waist workouts
        // for (i = 0; i < 5; i++) {
        //     const settings = {
        //         "async": true,
        //         "crossDomain": true,
        //         "url": waist,
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        //             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        //         }
        //     };

        //     $.ajax(settings).done(function (response) {
        //         console.log(response[i]);
        //     });
        // }


        // 5 lower legs workouts
        // for (i = 0; i < 5; i++) {
        //     const settings = {
        //         "async": true,
        //         "crossDomain": true,
        //         "url": lowerLegs,
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        //             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        //         }
        //     };

        //     $.ajax(settings).done(function (response) {
        //         console.log(response);
        //     });



        //     $.ajax(settings).done(function (response) {
        //         console.log(response[i]);
        //     });
        // }

        // 5 back workouts
        // for (i = 0; i < 5; i++) {
        //     const settings = {
        //         "async": true,
        //         "crossDomain": true,
        //         "url": back,
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        //             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        //         }
        //     };

        //     $.ajax(settings).done(function (response) {
        //         console.log(response[i]);
        //     });
        // }

        // 5 cardio workouts
        // for (i = 0; i < 5; i++) {
        //     const settings = {
        //         "async": true,
        //         "crossDomain": true,
        //         "url": cardio,
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        //             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        //         }
        //     };

        //     $.ajax(settings).done(function (response) {
        //         console.log(response[i]);
        //     });
        // }

        // 5 chest workouts
        // for (i = 0; i < 5; i++) {
        //     const settings = {
        //         "async": true,
        //         "crossDomain": true,
        //         "url": chest,
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        //             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        //         }
        //     };

        //     $.ajax(settings).done(function (response) {
        //         console.log(response[i]);
        //     });
        // }

        // 5 shoulders workouts
        // for (i = 0; i < 5; i++) {
        //     const settings = {
        //         "async": true,
        //         "crossDomain": true,
        //         "url": shoulders,
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        //             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        //         }
        //     };

        //     $.ajax(settings).done(function (response) {
        //         console.log(response[i]);
        //     });
        // }



    })
    )};


startPage();

    //listen for form submit
    // $( "#workOutBtn" ).click(function() {
    //     const settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": waist,
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    //             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
    //         }
    //     };

    //     $.ajax(settings).done(function (response) {
    //         console.log(response);
    //     });
    //   });



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
            var title = recipes[i].title;
            var recipeLink = recipes[i].sourceUrl;
            if(placement == 0){
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var docEl = document.querySelector('#n-1');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast:'
                    docEl.appendChild(mealName);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch:'
                    docEl.appendChild(mealName);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner:'
                    docEl.appendChild(mealName);
                }
                //append random recipe as a link
                actualRecipe.setAttribute('href', recipeLink);
                actualRecipe.setAttribute('target', '_blank');
                actualRecipe.textContent = title;
                containerNut.appendChild(actualRecipe);
                docEl.appendChild(containerNut);
                //increase placement counter to move to next column
                placement++
            } else if (placement == 1) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var docEl = document.querySelector('#n-2');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast:'
                    docEl.appendChild(mealName);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch:'
                    docEl.appendChild(mealName);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner:'
                    docEl.appendChild(mealName);
                }
                actualRecipe.setAttribute('href', recipeLink);
                actualRecipe.setAttribute('target', '_blank');
                actualRecipe.textContent = title;
                containerNut.appendChild(actualRecipe);
                docEl.appendChild(containerNut);
                placement++

            } else if (placement == 2) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var docEl = document.querySelector('#n-3');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast:'
                    docEl.appendChild(mealName);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch:'
                    docEl.appendChild(mealName);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner:'
                    docEl.appendChild(mealName);
                }
                actualRecipe.setAttribute('href', recipeLink);
                actualRecipe.setAttribute('target', '_blank');
                actualRecipe.textContent = title;
                containerNut.appendChild(actualRecipe);
                docEl.appendChild(containerNut);
                placement++
                
            } else if (placement == 3) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var docEl = document.querySelector('#n-4');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast:'
                    docEl.appendChild(mealName);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch:'
                    docEl.appendChild(mealName);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner:'
                    docEl.appendChild(mealName);
                }
                actualRecipe.setAttribute('href', recipeLink);
                actualRecipe.setAttribute('target', '_blank');
                actualRecipe.textContent = title;
                containerNut.appendChild(actualRecipe);
                docEl.appendChild(containerNut);
                placement++
                
            } else if (placement == 4) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var docEl = document.querySelector('#n-5');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast:'
                    docEl.appendChild(mealName);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch:'
                    docEl.appendChild(mealName);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner:'
                    docEl.appendChild(mealName);
                }
                actualRecipe.setAttribute('href', recipeLink);
                actualRecipe.setAttribute('target', '_blank');
                actualRecipe.textContent = title;
                containerNut.appendChild(actualRecipe);
                docEl.appendChild(containerNut);
                placement++
                
            } else if (placement == 5) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var docEl = document.querySelector('#n-6');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast:'
                    docEl.appendChild(mealName);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch:'
                    docEl.appendChild(mealName);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner:'
                    docEl.appendChild(mealName);
                }
                actualRecipe.setAttribute('href', recipeLink);
                actualRecipe.setAttribute('target', '_blank');
                actualRecipe.textContent = title;
                containerNut.appendChild(actualRecipe);
                docEl.appendChild(containerNut);
                placement++
            
            } else if (placement == 6) {
                var containerNut = document.createElement('div');
                var actualRecipe = document.createElement('a');
                var docEl = document.querySelector('#n-7');
                //create Meal type element
                if (mealType == 0){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Breakfast:'
                    docEl.appendChild(mealName);
                } else if (mealType ==1){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Lunch:'
                    docEl.appendChild(mealName);
                } else if (mealType == 2){
                    var mealName = document.createElement('h2');
                    mealName.textContent='Dinner:'
                    docEl.appendChild(mealName);
                }
                actualRecipe.setAttribute('href', recipeLink);
                actualRecipe.setAttribute('target', '_blank');
                actualRecipe.textContent = title;
                containerNut.appendChild(actualRecipe);
                docEl.appendChild(containerNut);
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