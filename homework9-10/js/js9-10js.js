$(function() {
    $('.jcarousel').jcarousel({

  });
  $('.jcarousel-prev').jcarouselControl({
    target: '+=1'
});

$('.jcarousel-next').jcarouselControl({
    target: '-=1'
});

 $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '-=1',
      autostart: true
  });
});
    console.log('.jcarousel');

$(function() {
  $("#default-usage-select").selectbox();
  $("#default-usage-select").parents('.jquery-selectbox').unselectbox();
  $("select").selectbox();
});

//Задание №3 (Подключить к странице нестандартные чекбоксы с помощью jquery).
jQuery(document).ready(function(){

jQuery(".niceCheck").each(

function() {

     changeCheckStart(jQuery(this));

});

                                        });


function changeCheck(el)

{

	var el = el,
		input = el.find("input").eq(0);

	if(el.attr("class").indexOf("niceCheckDisabled")==-1)
	{
   		if(!input.attr("checked")) {
			el.addClass("niceChecked");
			input.attr("checked", true);
		} else {
			el.removeClass("niceChecked");
			input.attr("checked", false).focus();
		}
	}

    return true;
}

function changeVisualCheck(input)
{

var wrapInput = input.parent();
	if(!input.attr("checked")) {
		wrapInput.removeClass("niceChecked");
	}
	else
	{
		wrapInput.addClass("niceChecked");
	}
}

function changeCheckStart(el)

{

try
{
var el = el,
	checkName = el.attr("name"),
	checkId = el.attr("id"),
	checkChecked = el.attr("checked"),
	checkDisabled = el.attr("disabled"),
	checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
	if(checkChecked)
		el.after("<span class='niceCheck niceChecked'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
			"checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
	else
		el.after("<span class='niceCheck'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
             "value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");


	if(checkDisabled)
	{
		el.next().addClass("niceCheckDisabled");
		el.next().find("input").eq(0).attr("disabled","disabled");
	}


	el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
	el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
	if(jQuery.browser.msie)
	{
		el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });
	}
	el.remove();
}
catch(e)
{
}
    return true;
}

//Задание №4 Создать анимированную выпадающую двухуровневую меню.

$(function() {
    $( '.li3' ).hover(
        function(){
            $(this).children('.nav3').slideDown(200);
        },
        function(){
            $(this).children('.nav3').slideUp(200);
        }
    );
});
$(function() {
    $( '.li34' ).hover(
        function(){
            $(this).children('.nav34').slideDown(200);
        },
        function(){
            $(this).children('.nav34').slideUp(200);
        }
    );
});
$(function() {
    $( '.li342' ).hover(
        function(){
            $(this).children('.nav342').slideDown(200);
        },
        function(){
            $(this).children('.nav342').slideUp(200);
        }
    );
});
