$(function(){
  $("#submit").click(function(){

    var items = [$("#veggie").val(), $("#green").val(), $("#meat").val(), $("#fish").val(), $("#grain").val(), $("#other").val()];

    var upperItems = items.map(function(item){
      return item.toUpperCase();
    });
    upperItems.sort();

    upperItems.forEach(function(item){
      $("#finalList").append("<li>" + item + "</li>");
    });

    $("form").hide();
    // alert (upperItems);
  });

});


// // nesting forEach loops for cards
//
// var values= ["2","3","4","5","6","7","8","9","10", "ace", "king", "queen", "jack"];
//
// var suits = ["hearts", "diamonds", "clubs", "spades"];
//
// var cards = [];
//
// suits.forEach(function(suit){
//   values.forEach(function(value){
//     cards.push(value + " of " + suit);
//   });
// });
//
// alert(cards);
//
// // nesting forEach loops again for transport
//
// var values =  ["slow", "fast", "average"];
// var types = ["car", "moto", "bus"];
//
// var overall = [];
//
// types.forEach(function(value){
//   values.forEach(function(type){
//     overall.push(value + " is " + type) ;
//
//
//   });
// });
//
// alert(overall);
//
// // mapping cards for alternate method
//
// var values= ["2","3","4","5","6","7","8","9","10", "ace", "king", "queen", "jack"];
//
// var hearts = values.map(function(value){
//   return value + " of hearts";
// });
// var diamonds = values.map(function(value){
//   return value + " of diamonds";
// });
// var clubs = values.map(function(value){
//   return value + " of clubs";
// });
// var spades = values.map(function(value){
//   return value + " of spades";
// });
//
// alert(hearts + diamonds + clubs + spades);
