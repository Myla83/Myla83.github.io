/*'use strict';*/
/*var animal = {
  name: 'Jack',
  age: 11,
  color: 'grey'
};
var str = JSON.stringify(animal);
console.log(str);

var obj = JSON.parse(str);
console.log(obj);*/

/*var dog = {
  name: 'Bob',
  age: 3,
  color: 'black'
};

localStorage.setItem('animal', JSON.stringify(dog));
var test = localStorage.getItem('animal');

test = JSON.parse(test);
console.log(test);*/

var str = '{name: "dad"}';
try {
var obj = JSON.parse(str);
console.log('obj.name', obj.name);
} catch (e) {
  alert('error');
} finally {
  console.log('finaly');
}
