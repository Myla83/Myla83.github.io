var ol = document.createElement('ol');
ol.classList.add('form');
var parentElem = document.body;
parentElem.insertBefore(ol, parentElem.children[0]);

var text = 'Тест по программированию';

var question1 = 'Вопрос №1';
var question2 = 'Вопрос №2';
var question3 = 'Вопрос №3';

var answer1 = 'Вариант ответа №1';
var answer2 = 'Вариант ответа №2';
var answer3 = 'Вариант ответа №3';

var buttonText = 'Проверить мои результаты';

var ol = {
	zagolovok : function(text) {
    var test = document.createElement('h3');
    test.classList.add('test');
    test.innerHTML = text;
    var parentElem = document.body;
    parentElem.insertBefore(test, parentElem.children[0]);

},

	theFirstQuestion : function(question1) {
	var li = document.createElement('li');
	li.classList.add('form-item');
	li.innerHTML = question1;
	var liParent = document.querySelector('.form');
	liParent.appendChild(li);
	ol.answers(answer1, answer2, answer3);
},

    answers : function(answer1, answer2, answer3) {

    var label = document.createElement('label');
    label.classList.add('answers');
	var liParent = document.querySelector('.form');
	liParent.appendChild(label);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	label.insertBefore(check, label.children[0]);

	var labelText = document.createElement('span');
	labelText.innerHTML = answer1;
	label.insertBefore(labelText, label.children[1]);

	var br = document.createElement('br');
	label.insertBefore(br, label.children[2]);

	var label = document.createElement('label');
	label.classList.add('answers');
	var liParent = document.querySelector('.form');
	liParent.appendChild(label);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	label.insertBefore(check, label.children[0]);

	var labelText = document.createElement('span');
	labelText.innerHTML = answer2;
	label.insertBefore(labelText, label.children[1]);

	var br = document.createElement('br');
	label.insertBefore(br, label.children[2]);

	var label = document.createElement('label');
	label.classList.add('answers');
	var liParent = document.querySelector('.form');
	liParent.appendChild(label);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	label.insertBefore(check, label.children[0]);

	var labelText = document.createElement('span');
	labelText.innerHTML = answer3;
	label.insertBefore(labelText, label.children[1]);
},
	theSecondQuestion : function(question2) {
    var li = document.createElement('li');
    li.classList.add('form-item');
	  li.innerHTML = question2;
	  var liParent = document.querySelector('.form');
	  liParent.appendChild(li);
	  ol.answers(answer1, answer2, answer3);
},
	theThirdQuestion : function(question3) {
    var li = document.createElement('li');
    li.classList.add('form-item');
	  li.innerHTML = question3;
	  var liParent = document.querySelector('.form');
	  liParent.appendChild(li);
	  ol.answers(answer1, answer2, answer3);
},
    testCheck : function(buttonText) {
    var button = document.createElement('button');
    button.classList.add('button');
    button.innerHTML = buttonText;
    var parentElem = document.body;
    parentElem.appendChild(button);
    }
}

ol.zagolovok(text);
ol.theFirstQuestion(question1);
ol.theSecondQuestion(question2);
ol.theThirdQuestion(question3);
ol.testCheck(buttonText);

console.log(ol);
