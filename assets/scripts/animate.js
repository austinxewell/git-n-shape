const tester = document.querySelector("#tester");
const slider = document.querySelector("#slider");
const dataSpace = document.querySelector(".data-space");
const main = document.querySelector("main");
const navbar = document.querySelector(".navbar");
const formSpace = document.querySelector(".form-space");
const introText = document.querySelector("#intro");
const sloganText = document.querySelector("#slogan");

const tl = new TimelineMax();

tl.fromTo(slider, 1.5, {height: "0%"}, {height: "65%", ease: Power2.easeInOut})
.fromTo(introText, 1.5, {opacity: 0}, {opacity: 1}, "-=.7")
.fromTo(sloganText, 1.5, {opacity: 0, y: -50}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "-=1")
.fromTo(slider, 1, {x: "0%"}, {x: "-200%", ease: Power2.easeInOut}, "+=.5")
.fromTo(dataSpace, 1.2, {x: "140%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(formSpace, 1.2, {x: "500%"}, {x: "0%", ease: Power2.easeInOut}, "-=1")
.fromTo(navbar, 1.2, {y: "-100%"}, {y: "0%", ease: Power2.easeInOut}, "-=1")