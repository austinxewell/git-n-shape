// create variables for exersiceDB
var upperLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs';
var waist = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist';
var lowerLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs';
var back = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back';
var cardio = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio';
var chest = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest';
var shoulders = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders';

// DOM elements
var workoutContainerEl = document.querySelector('#weekly-workout');
var workoutCard = document.createElement('div');


//5 upper legs workouts
function startPage() {
    $( "#workOutBtn" ).click(function() {
        for (i = 0; i < 5; i++) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": upperLegs,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
            }};

            $.ajax(settings).done(function (response) {
            console.log(response[i]);
            });
            // append to dom element
    
            // workoutContainerEl.innerHTML = '';
            // workoutCard.setAttribute(response[0]);
            // workoutContainerEl.appendChild(workoutCard);



        
    }

// 5 waist workouts
    for (i = 0; i < 5; i++) {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": waist,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
            }};

            $.ajax(settings).done(function (response) {
            console.log(response[i]);
            });
        }

    
// 5 lower legs workouts
for (i = 0; i < 5; i++) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": lowerLegs,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        }};

        $.ajax(settings).done(function (response) {
        console.log(response[i]);
        });
    }

// 5 back workouts
for (i = 0; i < 5; i++) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": back,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        }};

        $.ajax(settings).done(function (response) {
        console.log(response[i]);
        });
    }

// 5 cardio workouts
for (i = 0; i < 5; i++) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": cardio,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        }};

        $.ajax(settings).done(function (response) {
        console.log(response[i]);
        });
    }

// 5 chest workouts
for (i = 0; i < 5; i++) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": chest,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        }};

        $.ajax(settings).done(function (response) {
        console.log(response[i]);
        });
    }

// 5 shoulders workouts
for (i = 0; i < 5; i++) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": shoulders,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        }};

        $.ajax(settings).done(function (response) {
        console.log(response[i]);
        });
    }



});
}


startPage();


  


$( "#nutriBtn" ).click(function() {
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
            var recipeTitle = response.results[randomRecipe].title
            // create card for this recipe

            // add recipe title to card title
            
            // append card to HTML
             console.log(recipeTitle)
        }
    });
});    




//fetch data from APIs using for input