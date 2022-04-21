let shopingList = [
  { name: "apple", price: 20 },
  { name: "banana", price: 15 },
  { name: "cherry", price: 25 },
];
let notBuy = []; // список продуктов, которые не купили
let newArray = []; // массив, где не будет удаленного элемента

//сортировка, сверху некупленные
shopingList.sort(function (a, b) {
  if (a.buy > b.buy) {
    return 1;
  }
  if (a.buy < b.buy) {
    return -1;
  }
  return 0;
});

//красивый вывод
shopingList.forEach((element, i) => {
  console.log(
    " Наименование: " + element.name + " стоимость: " + element.price
  );
});

//покупаем продукт со списка или нет
shopingList.forEach((element) => {
  let buy = confirm("Покупаем? " + element.name);
  if (buy) {
    element.buy = true;
    element.amount = Number(prompt("Сколько?"));
    element.sum = sumProduct(element.amount, element.price);
    console.log(
      "Куплено " + element.name,
      element.amount + " штук/кг. Сумма: " + element.sum
    );
  } else {
    element.buy = false;
    console.log(element.name + " Не куплен");
    notBuy.push(element);
  }
});

//красивый вывод не купленных товаров:
console.log(" Список не купленных продуктов: ");
notBuy.forEach((element) => {
  console.log(
    " Наименование: " + element.name + " стоимость: " + element.price
  );
});

//удалить продукт со списка покупок
function DelProduct() {
  let name = prompt("Что нужно удалить со списка? apple, banana, cherry");
  shopingList.forEach((element) => {
    if (name == element.name) {
      newArray = shopingList.filter(function (f) {
        return f !== element;
      });
    }
  });
}

//добавить продукт в список
function AddProduct(n) {
  this.n = n;
  console.log("Обновленный список покупок: ");
  shopingList.forEach((element) => {
    if (n == element.name) {
      element.amount += Number(prompt(`Сколько берем ${this.n}?`));
      element.sum = sumProduct(element.amount, element.price);
      element.buy = true;
    }
    //else {
    //throw RangeError(this.n, " нет с писке покупок");
    // let prod = new Object();
    // let am = Number(prompt(`Сколько берем ${this.n}?`));
    // let pr = Number(prompt(`Сколько стоит ${this.n}?`));
    // prod = {
    //   name: n,
    //   amount: am,
    //   price: pr,
    //   buy: true,
    // };
    // prod.sum = sumProduct(prod.amount, prod.price);
    // shopingList.push(prod);
    //}

    console.log(
      "Куплено " + this.n,
      element.amount + " штук/кг. Сумма: " + element.sum
    );
  });
}

DelProduct();

//подсчет суммы за один продукт
function sumProduct(amount, price) {
  return amount * price;
}
function sortProduct(question) {
  if (question) {
    shopingList.sort(function (a, b) {
      if (a.buy > b.buy) {
        return 1;
      }
      if (a.buy < b.buy) {
        return -1;
      }
      return 0;
    });
  } else {
  }
}
let namePr = prompt("Может быть что-то нужно докупить?  apple, banana, cherry");
AddProduct(namePr);

//подсчет общих сумм:
let initialValue = 0;
let bigSum = shopingList.reduce(
  (accumulator, currentValue) => accumulator + Number(currentValue.sum),
  initialValue
);
let bigSumNotBuy = notBuy.reduce(
  (accumulator, currentValue) => accumulator + Number(currentValue.sum),
  initialValue
);

//вывод данных:
alert("Общая сумма покупки: " + bigSum + "грн. ");
alert("Общая сумма некупленных товаров: " + bigSumNotBuy + "грн. ");

//вывод итоговых массивов:
console.log("Наш массив: ", shopingList);
console.log("Массив без элемента, который удалили: ", newArray);
