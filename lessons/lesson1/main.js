
// "use strict";  //Строгий режим вводит ряд ограничений и изменений в поведении JavaScript, сделанных с целью улучшения безопасности кода и помощи в обнаружении ошибок.//
// alert('Hello okten')
// console.log('отображение в консоли');
// let glass = 100500;    //обвьявление переменной//
// glass = 200600;     //переопределение//
// {
//     let a = 100;
//     var b = 200;    //var аналог let переменная//
// }
// // console.log(a);
// console.log(b);
// const PI = 3.14;   // переменная, значение которой нельзя переназначить//
// console.log(PI)
//.....number.....//

// let num1 = 100400;   //number числовое значение//
// console.log(num1)
//.....string.....//

// let word1 = 'Hello World';  //string строка текста//
// word1 = "Hello World";
// word1 = `Hello World`;
// console.log(word1);
//.....boolean....//

// let bool1 = true;  //логическое значение, которое может быть только двух видов: true (истина) или false (ложь)//
// bool1 = false;
//... 4 способа сделать переменные....//
// let x;
// let x = undefined;
// let x = null;
// console.log(x)
//...5 + базовые дополнительные...//


//....operations nums...//

// let a = 10;
// let b = 20;
// let result = a + b;
// console.log(result);
// console.log(10 % 3);    //решение с остатком//
// console.log(10 % 5); //решение кратного числа//

//....operations strings....//
//...Все что лапках является strings...//

// let word1 = 'hello';
// let worrd2 = 'okten';
// let worrd3 = '!!!';
// let spase = ' ';   // spase-это пробел//
// let result = word1 + spase + worrd2;
// let result = word1 + ' ' + worrd2 + spase + worrd3;  //метод конкатинации//
// console.log(result)

// let result3 = `${word1} ${worrd2} ${worrd3}`;
// console.log(result3);

// let result2 = `Hello World`;
// console.log(result2);

// let name = `vasya solovei`;
// console.log(name);

// let x =1020;   //...num..//
// let x = '1020'; //...stings..//
// let x = true;   //...boolean..//
// let x = null;    //object..//
// let x = undefined;   //..undefined..//
// console.log(typeof x);

// let bool1 = true;  //..1..//
// let bool2 = false; //..0..//
// console.log(bool1+bool2);
// console.log(100+true);  //...100+1..//
// console.log(100/0)  //..infiniti-бесконечность..//

// let bool1 = true; //..1..//
// let bool2 = false; //..0..//
// let bool3 = true; //..1..//
// console.log(bool1+bool2+bool3);

//....convertation....//
// let str1 = 'hello';  //..сейчас ето stringa...//
// console.log(typeof  +str1);  //..теперь num..//

// let num1 = 100; //..num..//
// console.log(typeof (num1 + ''));  //...теперь...string...//
// console.log(num1 + '');

// console.log(!!100); //..число в boolean...//
// console.log(!!'');   //..строку в boolean...//

//...falsy...//....ложно подобные...//
// console.log(!!0);
// console.log(!!'');
// console.log(undefined);
// console.log(!!null);
// console.log(!!NaN);

// console.log(100 + 200 + '');
// console.log('' + 100 + 200);

// let anwer = prompt();
// console.log(anwer);
// console.log(+anwer);
// console.log(!!anwer);