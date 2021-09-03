// create variables for exersiceDB
var upperLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs';
var waist = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist';
var lowerLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs';
var back = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back';
var cardio = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio';
var chest = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest';
var shoulders = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders';


// create variables for Recipe-Food-Nutrition
// (i=0, i<5, i++)


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


  
  

// $( "#nutriBtn" ).click(function() {

    
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=2000&exclude=shellfish%2C%20olives",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
//         }
//     };
    
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// });    




//fetch data from APIs using for input