
const total = document.querySelector('.Total_item');
const breakfast = document.getElementsByClassName("breakfast-food");
const snack = document.getElementsByClassName("snack-food");
const meal = document.getElementsByClassName("meal-food");
const vegan = document.getElementsByClassName("vegan-food");
const dessert = document.getElementsByClassName("desert-meal");

function displayFoodOn(type){
    console.log(type);
    for(let food = 0; food < type.length; food++){
        type[food].style.display = "block"; 
    }
}
function displayFoodOff(type){
    for(let food = 0; food < type.length; food++){
        type[food].style.display = "none"; 
    }
}
function clickElement(id) {
    const element = document.getElementById(id);
    if(element.checked){
        switch(id){
            case "breakfast":{
                displayFoodOn(breakfast);
                break;
            }
            case "snack":{
                displayFoodOn(snack);
                break;
            }
            case "main_course":{
                displayFoodOn(meal);
                break;
            }
            case "vegan":{
                displayFoodOn(vegan);
                break
            }
            case "dessert":{
                displayFoodOn(dessert);
                break
            }
            default:
                console.log("not found");
        }
        if(!document.getElementById("breakfast").checked){
            displayFoodOff(breakfast);
        }
        if(!document.getElementById("snack").checked){
            displayFoodOff(snack);
        }
        if(!document.getElementById("main_course").checked){
            displayFoodOff(meal);
        }
        if(!document.getElementById("vegan").checked){
            displayFoodOff(vegan);
        }
        if(!document.getElementById("dessert").checked){
            displayFoodOff(dessert);
        }    
    }else{
        switch(id){
            case "breakfast":{
                displayFoodOff(breakfast);
                if((!document.getElementById("dessert").checked) && (!document.getElementById("snack").checked)
                && (!document.getElementById("main_course").checked) && (!document.getElementById("vegan").checked)){
                    console.log("reached");
                    displayFoodOn(breakfast);
                    displayFoodOn(snack);
                    displayFoodOn(vegan);
                    displayFoodOn(meal);
                     displayFoodOn(dessert);
                }
                break;
            }
            case "snack":{
                displayFoodOff(snack);
                if((!document.getElementById("dessert").checked) && (!document.getElementById("breakfast").checked)
                && (!document.getElementById("main_course").checked) && (!document.getElementById("vegan").checked)){
                    console.log("reached");
                    displayFoodOn(breakfast);
                    displayFoodOn(snack);
                    displayFoodOn(vegan);
                    displayFoodOn(meal);
                     displayFoodOn(dessert);
                }
                break;
        }
            case "main_course":{
                displayFoodOff(meal);
                if((!document.getElementById("dessert").checked) && (!document.getElementById("snack").checked)
                && (!document.getElementById("breakfast").checked) && (!document.getElementById("vegan").checked)){
                    console.log("reached");
                    displayFoodOn(breakfast);
                    displayFoodOn(snack);
                    displayFoodOn(vegan);
                    displayFoodOn(meal);
                     displayFoodOn(dessert);
                }
                break;
            }
            case "vegan":{
                displayFoodOff(vegan);
                if((!document.getElementById("dessert").checked) && (!document.getElementById("snack").checked)
                && (!document.getElementById("main_course").checked) && (!document.getElementById("breakfast").checked)){
                    console.log("reached");
                    displayFoodOn(breakfast);
                    displayFoodOn(snack);
                    displayFoodOn(vegan);
                    displayFoodOn(meal);
                     displayFoodOn(dessert);
                }
                break
            }
            case "dessert":{
                displayFoodOff(dessert);
                if((!document.getElementById("breakfast").checked) && (!document.getElementById("snack").checked)
                && (!document.getElementById("main_course").checked) && (!document.getElementById("vegan").checked)){
                    console.log("reached");
                    displayFoodOn(breakfast);
                    displayFoodOn(snack);
                    displayFoodOn(vegan);
                    displayFoodOn(meal);
                     displayFoodOn(dessert);
                }
                break
            }
            default:  
        }
    }
}


//slide image
let slideIndex = 0;
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }  

    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
showSlides();
