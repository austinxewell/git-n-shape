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

// bulma logic for mobile navbar toggle animation
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
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


//fetch data from APIs using for input