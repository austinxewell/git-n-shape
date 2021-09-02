//create variables for form input
// function getWorkOutInput() {

//     var WorkOutValue = document.getElementById("generateBtn");

// }
$( "#workOutBtn" ).click(function() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://exercisedb.p.rapidapi.com/exercises",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "cc91c1ac69mshaa10f9c0fe00529p1d6942jsn7ba7e69d7ebb"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
  });


  

$( "#nutriBtn" ).click(function() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "cc91c1ac69mshaa10f9c0fe00529p1d6942jsn7ba7e69d7ebb"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});    
//listen for form submit



//fetch data from APIs using for input