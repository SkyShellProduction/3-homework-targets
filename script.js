var userAge = prompt('Сколько вам лет? ');

if (userAge <= 18){
    alert('Вы еще молоды');
}
else if(userAge > 18 && userAge <= 50){
    alert('Нужно работать');
}
else if(userAge > 50 && userAge <= 60){
    alert('Готовься к пенсии');
}
else{
    alert('Вы пенсионер')
} 
var time = +prompt('Укажите время? ');


switch (time){
    case 0:
        alert('Сейчас полночь');
        break;
    case 1:
        alert('Сейчас час ночи');
        break;
    case 2:
        alert('Сейчас 2 часа ночи');
        break;
    case 3:
        alert('Сейчас 3 часа ночи');
        break;
    case 4:
        alert('Сейчас 4 часа ночи');
        break;
    case 5:
        alert('Сейчас 5 часов утра');
        break;
    case 6:
        alert('Сейчас 6 часов утра');
        break;
    case 7:
        alert('Сейчас 7 часов утра');
        break;
    case 8:
        alert('Сейчас 8 часов утра');
        break;
    case 9:
        alert('Сейчас 9 часов утра');
        break;
    case 10:
        alert('Сейчас 10 часов утра');
        break;
    case 11:
        alert('Сейчас 11 часов утра');
        break;
    case 12:
        alert('Сейчас полдень');
        break;
    case 13:
        alert('Сейчас час дня');
        break;
    case 14:
        alert('Сейчас 2 часа дня');
        break;
    case 15:
        alert('Сейчас 3 часа дня');
        break;
    case 16:
        alert('Сейчас 4 часа дня');
        break;
    case 17:
        alert('Сейчас 5 часов дня');
        break;
    case 18:
        alert('Сейчас 6 часов вечера');
        break;
    case 19:
        alert('Сейчас 7 часов вечера');
        break;
    case 20:
        alert('Сейчас 8 часов вечера');
        break;
    case 21:
        alert('Сейчас 9 часов вечера');
        break;
    case 22:
        alert('Сейчас 10 часов вечера');
        break;
    case 23:
        alert('Сейчас 11 часов вечера');
        break;
    default:
        alert('Укажите корректное время');
        break;
}


var a = +prompt('Введите 1 число: ');
var b = +prompt('Введите 2 число: ');
var c = +prompt('Введите 3 число: ');
alert('Сейчас программа выведет среднее из чисел');

if (b<a && a<c){
    alert('Среднее: ' + a);
}
else if (c<a && a<b){
    alert('Среднее: ' + a);
}
else if (a<b && b<c){
    alert('Среднее: ' + b);
}
else if (c<b && b<a){
    alert('Среднее: ' + b);
}
else{
    alert('Среднее: ' + c);
}
