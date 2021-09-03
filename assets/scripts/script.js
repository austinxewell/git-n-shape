//create variables for form input

//listen for form submit
$( "#workOutBtn" ).click(function() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
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
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=2000&exclude=shellfish%2C%20olives",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});    




//fetch data from APIs using for input