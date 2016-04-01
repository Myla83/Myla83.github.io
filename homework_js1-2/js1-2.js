//the first
function pow(base, exp){
    var result = 1;
    for(var i = 0; i <exp; i++)
    {
        result = result * base;
    }
    return(result);
}
result = prompt(pow(10,2));
console.log(pow(10,2));

result = prompt(pow(2,10));
console.log(pow(2,10));

result = prompt(pow(6,777));
console.log(pow(6,777));

result = prompt(pow(1000,-11));
console.log(pow(1000,-11));

result = prompt(pow(1002,1));
console.log(pow(1002,1));

result = prompt(pow(2,0));
console.log(pow(2,0));

//the second
   var arr = [];
    var n = prompt('Задание2: Введите количество имен в массива (по заданию 5):', '');
    for(var i=0; i < n; i++)
    {
        arr[i] = prompt('Введите arr['+i+']', ''); //Заполняем массив
    }
    for(i=0;i<n;i++)
        document.write('arr['+i+']='+arr[i]+'</br>'); //Выводим

    var x = prompt('Введите Ваше имя:', '');
    var isExists = false;
    for (var i = 0; i < n; i++) {
      if (arr[i] == x) {
        isExists = true;
        break;
      }
    }
    if (isExists) {
      alert( x + ', Вы успешно вошли.' );
    }
    else {
      alert('Error');
    }
