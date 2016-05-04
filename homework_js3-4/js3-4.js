var test = {
  questions: [
  {question: 'Вопрос № 1',
    answers: [
      {answer: 'Вариант ответа № 1'},
      {answer: 'Вариант ответа № 2'},
      {answer: 'Вариант ответа № 3'}
    ]
  },
  {question: 'Вопрос № 2',
      answers: [
        {answer: 'Вариант ответа № 1'},
        {answer: 'Вариант ответа № 2'},
        {answer: 'Вариант ответа № 3'}
      ]
    },
    {question: 'Вопрос № 3',
    answers: [
      {answer: 'Вариант ответа № 1'},
      {answer: 'Вариант ответа № 2'},
      {answer: 'Вариант ответа № 3'}
    ]
  }],
  createQuestions: function () {
    var nameText = document.createTextNode("Тест по программированию");
    var header = document.createElement("h2");
    header.appendChild(nameText);
    document.body.appendChild(header);
		
      for (var i = 0; i < test.questions.length; i++) {
        var question = (i+1) + '. ' + test.questions[i].question;
        var questionOne = document.createTextNode(question);
        var questionOneP = document.createElement("p");
        document.body.appendChild(questionOneP);
        questionOneP.appendChild(questionOne);
          for (var key in test.questions[i].answers) {
          var answer = test.questions[i].answers[key].answer;
          var container = document.createElement('div');
          var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.id = "answer-" + (+key + 1) + '-' + (+i + 1);
          var label = document.createElement('label');
          label.text = "answer-" + (+key + 1) + '-' + (+i + 1);
          label.appendChild(document.createTextNode(answer));
          document.body.appendChild(container);
          container.appendChild(checkbox);
          container.appendChild(label);
          }
        }
      },
      createButton: function () {
        var buttonBefore = document.createElement('br');
        document.body.appendChild(buttonBefore);

        var button = document.createElement('div');
        button.id = 'button';
        document.body.appendChild(button);

        var newButton = document.createElement("input");
        newButton.type = "submit";
        newButton.value = "Проверить мои результаты";
        document.getElementById('button').appendChild(newButton);
      }
    }
test.createQuestions()
test.createButton()
