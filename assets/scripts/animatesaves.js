const savedDataCol = document.querySelector("#saved-data-column");
const planNamesCol = document.querySelector("#saved-plans-column");
const titleBar = document.querySelector("#plan-title-space");
const planButton = document.querySelector("#plan");


const SavedPlansTL = new TimelineMax();

const introSavedSequence = function () {
    SavedPlansTL.fromTo(savedDataCol, 1.2, {x: "-140%"}, {x: "0%", ease: Power2.easeInOut})
    .fromTo(titleBar, 1.2, {x: "-140%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.3")
    .fromTo(planNamesCol, 1.2, {x: "-900%"}, {x: "0%", ease: Power2.easeInOut}, "-=1")
    .staggerFromTo(plan, 1.2, {opacity: 0, y: -50}, {opacity: 1, y: 0, ease: Power2.easeInOut}, 0.1);
}

introSavedSequence();