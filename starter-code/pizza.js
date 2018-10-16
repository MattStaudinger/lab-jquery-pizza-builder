// Write your Pizza Builder JavaScript in this file.
// console.log($("#pizza"));

var pepperoniButton = $(".btn-pepperonni");
var mushroomsButton = $(".btn-mushrooms");
var greenPeppersButton = $(".btn-green-peppers");
var sauceButton = $('.btn-sauce');
var glutenButton = $('.btn-crust');
var pizza = $("#pizza");
var pepperoni = $(".pep");
var mushroom = $(".mushroom");
var peppers = $(".green-pepper");
var sauce = $('.sauce-white');
var gluten = $('.crust-gluten-free');

sauce.removeClass('sauce-white');
gluten.removeClass('crust-gluten-free');
sauce.hasClass("sauce-white") ? sauceButton.addClass("active") : sauceButton.removeClass("active");
gluten.hasClass("crust-gluten-free") ? glutenButton.addClass("active") : glutenButton.removeClass("active");



// function checkTopping(element){
//     if (element.css("display", "block");
// }


function checkActive(ingredient, button) {
    ingredient.hasClass("sauce-white") ? button.removeClass("active") : button.addClass("active");
};


pepperoniButton.click(function() {
    pepperoni.toggle();
    pepperoni.css("display") == "none" ? pepperoniButton.removeClass("active") : pepperoniButton.addClass("active");
})

mushroomsButton.click(function() {
    mushroom.toggle();
    mushroom.css("display") == "none" ? mushroomsButton.removeClass("active") : mushroomsButton.addClass("active");

})

greenPeppersButton.click(function() {
    peppers.toggle();
    peppers.css("display") == "none" ? greenPeppersButton.removeClass("active") : greenPeppersButton.addClass("active");
})

sauceButton.click(function() {
    sauce.toggleClass("sauce-white");
    sauce.hasClass("sauce-white") ? sauceButton.addClass("active") : sauceButton.removeClass("active");
})


glutenButton.click(function(){
    gluten.toggleClass('crust-gluten-free')
    gluten.hasClass("crust-gluten-free") ? glutenButton.addClass("active") : glutenButton.removeClass("active");
})



