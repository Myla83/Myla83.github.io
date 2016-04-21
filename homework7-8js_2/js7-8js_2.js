$(function() {

var $firstName = $('#firstname');
var $lastName = $('#lastname');
var $adress = $('#address');
var $button = $('button');

$firstName.hover(function(){
  $('.firstname').css({
    opacity: 1

})}, function() {$('.firstname').css({
    opacity: 0

})});
$lastName.hover(function(){$('.lastname').css({
    opacity: 1

})}, function() {$('.lastname').css({
    opacity: 0

})});
$adress.hover(function(){$('.address').css({
    opacity: 1

})}, function() {$('.address').css({
    opacity: 0

})});

$button.click(function(e){
e.preventDefault();
        $('span').css({
               opacity: 1
          });

console.log($button)
  });

});
