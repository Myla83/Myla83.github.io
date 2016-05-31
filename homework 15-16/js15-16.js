/*var API_KEY = '2591951-51ea37382264aef0ecc9d089f';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
$.getJSON(URL, function(data){
	if (parseInt(data.totalHits) > 0)
			$.each(data.hits, function(i, hit){
				console.log(hit.pageURL);
			});
	else
			console.log('No hits');
});*/
function PixabayCallback(func, data){
	window[func] (data);
};

$(function(data) {
	$('form').on('submit', function(){
	$.ajax({
		url: "https://pixabay.com/api/?key="+"2591951-51ea37382264aef0ecc9d089f"+"&q="+encodeURIComponent($('.search').val()) + "&callback=PixabayCallback&context=?",
    method: 'GET',
		dataType: 'jsonp',
		success: function () {
			var ul = document.createElement('ul');
			$.each(data.results, function(i, val) {
				var li = document.createElement('li');
				li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;
				ul.appendChild(li);
			});
			$('.results').html(ul);
		},
			});
			return false;
});
});





var human = {
  name: 'Tanya',
  age: 20,
  sex: 'w',
  height: 150,
  weight: 50
}
var worker = {
  workPlace: 'firm',
  salary: 100000,
  method: 'working'

}
var student = {
  placeStuding: 'KPI',
  studentSalary: 1000,
  method: 'watching TV'
}

worker.__proto__ = human;
console.log('worker', worker);
console.log('worker-name', worker.name);
console.log('worker-age', worker.age);
console.log('worker-sex', worker.sex);
console.log('worker-height', worker.height);
console.log('worker-weight', worker.weight);

student.__proto__= human;
console.log('student', student);
console.log('student-name', student.name);
console.log('student-age', student.age);
console.log('student-sex', student.sex);
console.log('student-height', student.height);
console.log('student-weight', student.weight);
