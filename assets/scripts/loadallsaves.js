var savedList = document.querySelector('.saved-table');
var allSavedData = JSON.parse(localStorage.getItem("saves")) || [];
var clearBtn = document.querySelector('#clear-btn');
var prevPlan = document.querySelector('#p-plan');
var nextPlan = document.querySelector('#n-plan');
var buttonContainer = document.querySelector("#button-container");

// function retrieve saved data and display to page
var displaySaves = function(planName) {
    var nameEl =document.querySelector('#plan-title');
    nameEl.textContent=planName;

    // loop through allSavedData
    for (var i = 0; i < allSavedData.length; i++) {

        // if planName (that was clicked on) matches name in array, display it
        if (planName === allSavedData[i].name) {

            // 
            // display workout info
            // 
            var workouts = allSavedData[i].workout
            var dayNumber = 1;
            var workoutNumber = 0;
            for (y=0;y<5;y++){
                var slot = 0;
                for(var u = 0;u<5;u++){
                    var workingDiv = document.querySelector("#workoutDay"+dayNumber+"-"+slot);
                    workingDiv.textContent =workouts[workoutNumber];
                    slot++;
                    workoutNumber++;
                }
                dayNumber++
            }

            // 
            // display recipe info
            // 
            var recipies = allSavedData[i].nutrition
            var counter =1;
            for(i=0;i<recipies.length;i++){
                var recipeName = recipies[i];
                var workingDivEl = document.querySelector('#recipe'+i)
            // if counter gets too high (4), reset it
            if (counter == 4) {
                counter = 1
            }

            // check for meal of the day (breakfast)
            if (counter === 1) {
                // name the meal breakfast
                // insert recipe info as html
                workingDivEl.innerHTML = recipeName;
            }
            // (lunch)
            else if (counter === 2) {
                // name the meal lunch
                // insert recipe info as html
                workingDivEl.innerHTML = recipeName;
            }
            // (dinner)
            else if (counter === 3) {
                // name the meal dinner
                // insert recipe info as html
                workingDivEl.innerHTML = recipeName;
            }

            // increment counter
            counter++
            }
        }
    }
}

// create plan buttons
var createPlanButtons = function() {

    // wipe old buttons
    buttonContainer.innerHTML = '';

    // loop through all SavedData backwards, grabbing most recent additions first
    for (var i = allSavedData.length - 1; i >= 0; i--) {
        // grab plan name
        planName = allSavedData[i].name

        // create button
        $("#button-container").append("<button id='plan' class='mb-2 button is-fullwidth'>"+planName+"</button>");
    }
}


createPlanButtons();

displaySaves();

// plan button is clicked
$("#button-container").on("click", "button", function() {
    // grab the plan name to send to displaySaves
    var planName = this.textContent;

    // send plan name to displaySaves to retrieve plan info
    displaySaves(planName);
})

$(clearBtn).on('click', function(){

    // open confirmation modal
    $("#confirmation-modal").toggleClass("is-active");
})

$("#confirmation-modal-delete-button").click(function() {
    
    localStorage.clear();
    window.location.reload();
})

$("#confirmation-modal-exit-btn").click(function() {

    // close confirmation modal
    $("#confirmation-modal").toggleClass("is-active");
})

$("#confirmation-modal-return-button").click(function() {

    // close confirmation modal
    $("#confirmation-modal").toggleClass("is-active");
})

