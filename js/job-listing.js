// Search Function

const searchInput = document.querySelector(".search-section input");
const jobCards = document.querySelectorAll(".job-card");

searchInput.addEventListener("keyup", function () {

let searchValue = searchInput.value.toLowerCase();

jobCards.forEach(function(card){

let title = card.querySelector("h3").innerText.toLowerCase();
let company = card.querySelector(".company").innerText.toLowerCase();

if(title.includes(searchValue) || company.includes(searchValue)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});


// Category Filter

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(function(button){

button.addEventListener("click", function(){

document.querySelector(".filters .active").classList.remove("active");
button.classList.add("active");

let category = button.innerText.toLowerCase();

jobCards.forEach(function(card){

let skills = card.querySelector(".skills").innerText.toLowerCase();

if(category === "all"){
card.style.display = "block";
}
else if(skills.includes(category)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});

});


// Apply Button

const applyButtons = document.querySelectorAll(".job-footer button");

applyButtons.forEach(function(btn){

btn.addEventListener("click", function(){

alert("Application Submitted Successfully!");

});

});