function Calc(first, second, op) {
  let res;
  if (!isNaN(first) && !isNaN(second)) {
    switch (op) {
      case "/":
        res = first / second;
        if (second != 0) {
          res = first / second;
          break;
        } else {
          console.log("на ноль делить нельзя");
          break;
        }
      case "*":
        res = first * second;
        break;
      case "-":
        res = first - second;
        break;
      case "+":
        res = first + second;
        break;
      default:
        alert('Ввели не корректный знак операции, нужно "+,-,*,/"');
    }
  } else {
    console.log("Не число");
  }
  return res;
}

first = Number(prompt("Введи первое число"));
second = Number(prompt("Введи второе число"));
op = prompt("Что нужно сделать? -,+,*,/");
alert(Calc(first, second, op));

console.log("HOMEWORK:");
/*--- 1. Напиши всі можливі варіанти створення функцій. ---*/

function showMessage() {}

function showMessage(a, b) {}

function doNothing() {
  return;
}

/* 2. Створи функцію, яка буде виводити кількість переданих їй аргументів. */

function secondTask(a, b, c) {
  return arguments.length;
}
console.log(secondTask(1, 2, 3));

/*--- Напиши функцію, яка приймає 2 числа і повертає : ---*/
/*--- -1, якщо перше число менше, ніж друге;*/
/*--- 1 - якщо перше число більше, ніж друге; */
/*--- 0 - якщо числа рівні.*/

function thirdTask(a, b) {
  let res;
  if (a < b) {
    res = -1;
  } else if (a > b) {
    res = 1;
  } else {
    res = 0;
  }
  return res;
}

console.log(thirdTask(2, 5));

/*--- Напиши функцію, яка обчислює факторіал переданого їй числа. ---*/
//n * (n-1)!

function factorial(n) {
  let res;
  if (n != 1) {
    res = n * factorial(n - 1); //n! = n * (n - 1) * (n - 2) * ...*1
  } else {
    res = 1;
  }
  return res;
}
console.log("factorial: ", factorial(5));

/*--- Напиши функцію, яка приймає три окремі цифри 
і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149. ---*/

function fifth(a, b, c) {
  a = String(a);
  b = String(b);
  c = String(c);

  return a + b + c;
}
console.log("Пятое задание: ", Number(fifth(2, 3, 4)));

/*--- Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. ---*/

function Square(a, b) {
  let res;
  if (arguments.length == 1) {
    res = a * a;
  } else {
    res = a * b;
  }
  return res;
}

console.log("Один аргумент. Площадь квадтрата: ", Square(2));
console.log("Два аргумента. Площадь прямогольника: ", Square(2, 8));

/*--- Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників. ---*/

function perfectNumb(numb) {
  let sum = numb;
  for (let i = 1; i <= numb; i++) {
    if (numb % i == 0) {
      sum -= i;
      //i += i;
    }
  }
  if (!(sum % numb)) {
    return true;
  } else {
    return false;
  }
}
console.log("Досконале чи ні? ", perfectNumb(120));

/*--- Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
і виводить тільки ті числа з діапазону, які є досконалими. 
Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим. ---*/

function lastTask(min, max) {
  for (let i = min; i <= max; i++) {
    if (perfectNumb(i)) {
      console.log(i);
    }
  }
}
lastTask(5, 497);

/*let userName = "Вася";

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = "Привет, " + userName;
  console.log(message);
}

console.log(userName); // Вася перед вызовом функции

showMessage();

console.log(userName); // Петя, значение внешней переменной было изменено функцией

/----------внимание на объявление переменной внутри функции----------/

function showMsg() {
  let userName = "Федя"; // объявляем локальную переменную

  let message = "Привет, " + userName; // Федя
  console.log(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMsg();

alert(userName); // Вася, не изменилась, функция не трогала внешнюю переменную

// Возврат значения------------

function sum(a, b) {
  return a + b;
}
a = Number(prompt("Введи первое число"));
b = Number(prompt("Введи второе число"));
alert(sum(a, b));
//alert(result); // 3

let apples = {
  price: "25 грн",
  color: "red",
  ves: "1 кг",
};

function changeColor() {
  return (apples.color = "yellow");
}

function changePrice() {
  changeColor();

  return (apples.price = "30 грн");
}
changePrice();
console.log(apples);

function myNumb(numb) {
  if (numb === 1) {
    console.log("Happy");
  } else {
    console.log("Hello");
  }
}

let numb = Number(prompt("Введи число: "));
myNumb(numb);*/
