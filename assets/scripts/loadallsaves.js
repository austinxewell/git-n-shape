var savedList = document.querySelector('.saved-table');
var allSavedData = JSON.parse(localStorage.getItem("saves")) || [];
var clearBtn = document.querySelector('#clear-btn');
var prevPlan = document.querySelector('#p-plan');
var nextPlan = document.querySelector('#n-plan');


//plan counter
var planNumber = 0;
var displaySaves = function() {
    //load savename
    var saveName = allSavedData[planNumber].name
    var nameEl =document.querySelector('#plan-title');
    nameEl.textContent=saveName;


    var workouts = allSavedData[planNumber].workout
    var dayNumber = 1;
    var workoutNumber = 0;
    for (i=0;i<5;i++){
        var slot = 0;
        for(var u = 0;u<5;u++){
            var workingDiv = document.querySelector("#workoutDay"+dayNumber+"-"+slot);
            workingDiv.textContent =workouts[workoutNumber];
            slot++;
            workoutNumber++;
        }
        dayNumber++
    }

    var recipies = allSavedData[planNumber].nutrition
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
        workingDivEl.innerHTML = "<h2 class='has-text-weight-semibold'>Breakfast:</h2><a target='_blank' >"+recipeName+"</a>";
    }
    // (lunch)
    else if (counter === 2) {
        // name the meal lunch
        // insert recipe info as html
        workingDivEl.innerHTML = "<h2 class='has-text-weight-semibold'>Lunch:</h2><a target='_blank' >"+recipeName+"</a>";
    }
    // (dinner)
    else if (counter === 3) {
        // name the meal dinner
        // insert recipe info as html
        workingDivEl.innerHTML = "<h2 class='has-text-weight-semibold'>Dinner:</h2><a target='_blank' >"+recipeName+"</a>";
    }

    // increment counter
    counter++
    }

}

displaySaves();

$(prevPlan).on('click', function(){
    if (planNumber <=0){
        planNumber = 0;
        displaySaves();
        return;
    }else {
    planNumber--;
    displaySaves();
    return planNumber;
    }
});

$(nextPlan).on('click', function(){
    if (planNumber >= (allSavedData.length)-1){
        planNumber = (allSavedData.length)-1;
        displaySaves();
        return;
    } else {
    planNumber++;
    displaySaves();
    return planNumber;
    }
})

$(clearBtn).on('click', function(){
    localStorage.clear();
    window.location.reload();
})