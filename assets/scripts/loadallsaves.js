var savedList = document.querySelector('.saved-table');
var allSavedData = JSON.parse(localStorage.getItem("saves")) || [];
var clearBtn = document.querySelector('#clear-btn');

var displaySaves = function() {
    var workouts = allSavedData[0].workout
    console.log(workouts);
    var dayNumber = 1;
    for (i=0;i<7;i++){
        var slot = 0;
        for(var u = 0;u<5;u++){
            var workingDiv = document.querySelector("#workoutDay"+dayNumber+"-"+slot);
            workingDiv.textContent =workouts[slot];
            slot++;
        }
        dayNumber++
    }


    allSavedData.forEach(element => {
        // var linkEl = document.createElement('a');
        var listItem = document.createElement('li');

        listItem.textContent = element.name+' - '+element.nutrition;

        savedList.appendChild(listItem);
    });
}

displaySaves();

$(clearBtn).on('click', function(){
    localStorage.clear();
    window.location.reload();
})