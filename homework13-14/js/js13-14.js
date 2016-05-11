'use strict';
var dataTest = [
  {question: 'Вопрос № 1',
   answer: [ 'Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3'],
   check: ['true', 'false', 'false'],
   name: 'first'
 },
 {question: 'Вопрос № 2',
  answer: [ 'Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3'],
  check: ['false', 'true', 'false'],
  name: 'second'
},
{question: 'Вопрос № 3',
 answer: [ 'Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3'],
 check: ['false', 'false', 'true'],
 name: 'third'
}];

localStorage.setItem('myTest', JSON.stringify(dataTest));

$(function() {

  var test = $('#test').html();

  var getTest = localStorage.getItem('myTest');
  getTest = JSON.parse(getTest);

  var content = tmpl(test, {
    data: getTest
  });
  $('.check').before(content);

  $('.check').on('click', function() {
    var $result = true;
    $('.checkbox').each(function() {
      if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
        $result = false;
        return false;
      };
    //  $('.modal-window__button').css("display", "block").animate({opacity: 1}, 500);
    });
    console.log($result);

    $('.modal-window__message')[0].innerHTML = $result ? 'Тест пройден' : 'Тест не пройден';
    $('.modal-window').css("display", "block").animate({opacity: 1}, 500);
  });


    $('.modal-window__button').on('click', function(){
      $('.modal-window').animate({opacity: 0}, 500, function() {
        $(this).css("display", "none");
      })
      $('.checkbox').each(function() {
        $(this).prop('checked', false);
      });
    });




});
