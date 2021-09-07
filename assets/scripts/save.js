//save button element
var saveBtn = document.querySelector('#saveBtn');

//all workout elements
var workoutSundayEl = document.querySelector('#workoutSunday');
var workoutMondayEl = document.querySelector('#workoutMonday');
var workoutTuesdayEl = document.querySelector('#workoutTuesday');
var workoutWednesdayEl = document.querySelector('#workoutWednesday');
var workoutThursdayEl = document.querySelector('#workoutThursday');
var workoutFridayEl = document.querySelector('#workoutFriday');
var workoutSaturdayEl = document.querySelector('#workoutSaturday');

//nutrition elements
var eachDayNutEl = document.querySelectorAll('.recipeInput');

//all data needed for save
var saveData = eachDayNutEl

//button click function
$(saveBtn).on('click', function(){
    //array for all of the saved data ever
    var allSavedData = JSON.parse(localStorage.getItem("saves")) || [];

    //gets user set name for the save
    var setName = prompt('enter a name for the save');

    //array for all food items
    var foodItems = [];

    //gets name of food item and puts in in foodItems array
    eachDayNutEl.forEach(element =>{
        dailyFood = element.textContent;
        foodItems.push(dailyFood);
    });

    //sets name of save and the food items to an object
    var savedObject= {
        name: setName,
        data: foodItems
    }

    //adds object to main array
    allSavedData.push(savedObject);

    //adds
    localStorage.setItem('saves', JSON.stringify(allSavedData));
})

//load onto saved plans
var savedList = document.querySelector('.saved-table');

