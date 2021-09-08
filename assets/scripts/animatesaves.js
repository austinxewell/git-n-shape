const savedDataCol = document.querySelector("#saved-data-column");
const planNamesCol = document.querySelector("#saved-plans-column");
const titleBar = document.querySelector("#plan-title-space");

const SavedPlansTL = new TimelineMax();

const introSavedSequence = function () {
    SavedPlansTL.fromTo(savedDataCol, 1.2, {x: "-140%"}, {x: "0%", ease: Power2.easeInOut})
    .fromTo(titleBar, 1.2, {x: "-140%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.3")
    .fromTo(planNamesCol, 1.2, {x: "-600%"}, {x: "0%", ease: Power2.easeInOut}, "-=1");
}

introSavedSequence();