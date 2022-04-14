let age = prompt("Задание 1. Сколько тебе лет?");
if (age <= 11) {
  console.log("Тебе не пора в школу?");
} else if (age > 12 && age <= 17) {
  console.log("Підліток");
} else if (age > 18 && age <= 59) {
  console.log("Дорослий");
} else {
  console.log("Пенсіонер");
}

let spec = prompt("Задание 2. Введите любое число от 0 до 9");
let myText = "Спец символ: ";
switch (spec) {
  case "0":
    alert(myText + ")");
    break;
  case "1":
    alert(myText + "!");
    break;
  case "2":
    alert(myText + '"');
    break;
  case "3":
    alert(myText + "№");
    break;
  case "4":
    alert(myText + ";");
    break;
  case "5":
    alert(myText + "%");
    break;
  case "6":
    alert(myText + ":");
    break;
  case "7":
    alert(myText + "?");
    break;
  case "8":
    alert(myText + "*");
    break;
  case "9":
    alert("(");
    break;
  default:
    alert("nothing");
}

let first = Number(prompt("Введи первое число"));
let second = Number(prompt("Введи второе число"));

let sum = 0;

while (first < second) {
  sum += first;
  first++;
}

alert("Сумма: " + sum);

let n = Number(prompt("Введи еще число. Сейчас посчитаем делители."));
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    console.log(i);
  }
}

let cost = Number(prompt("Введи сумму покупки"));

if (cost <= 300 && cost > 200) {
  alert("Ваша скидка 3%");
  alert("К оплате: ", cost - cost * 0.03);
} else if (cost > 300 && cost <= 500) {
  alert("Ваша скидка 5%");
  alert("К оплате: ", cost - cost * 0.05);
} else if (cost > 500) {
  alert("Ваша скидка 7%");
  alert("К оплате: ", cost - cost * 0.07);
} else {
  console.log("Скидки нет");
}

let plus = 0;
let minus = 0;
let para = 0;
let nePara = 0;
for (let i = 1; i <= 10; i++) {
  let numb = Number(prompt("Введи число №" + i));
  if (numb > 0) {
    plus++;
    if (numb % 2 == 0) {
      para++;
    } else {
      nePara++;
    }
  } else if (numb < 0) {
    minus++;
    if (numb % 2 == 0) {
      para++;
    } else {
      nePara++;
    }
  }
  /*switch (numb) {
    case (numb > 0):
      plus++;
      break;
    case (numb < 0):
      minus++;
      break;
    case (numb % 2 == 0):
      para++;
      break;

    case (numb % 2 != 0):
      nePara++;
      break;
  }*/
}
alert(
  "Додатніх " +
    plus +
    ", від’ємних " +
    minus +
    ", парних " +
    para +
    ", непарних " +
    nePara
);
console.log(plus, minus, para, nePara);

let days = [
  "Понедельниу",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let info = "Хочешь увидеть следующий день? ";

for (let i = 0; i < days.length; i++) {
  alert(info + " " + days[i]);
}
