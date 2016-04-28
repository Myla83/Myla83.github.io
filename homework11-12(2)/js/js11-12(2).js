$(function() {

 var anketa = $('#anketa').html();

 var data = {
   title: '<h1>Людмила Лунева</h1><br><img src="http://media5.picsearch.com/is?1day0QUYY7rKkNEUJ4MchT_-xh4HJYanuswXiRa-ygU&height=332"><br><hr></hr><span>Хочу учить фронтенд, потому что:<ul><li>Это мне интересно.</li><li>Хочу получить новую профессию.</li><li>Возможность работать дистанционно.</li></ul></span><hr></hr><span>Мой контактный телефон<br>+380505181338</span><br><span>Мой профиль вконтакте<br><a href="https://vk.com/id202850372">vk.com</a></span><hr></hr> '
 };
 var content = tmpl(anketa, data);
 $('body').append(content);
});
