//first
let aboutMe = new Object();
aboutMe = {
  name: "Liuba",
  serName: "Kytsenko",
  age: 29,
};
console.log("Инфо обо мне: ", aboutMe);
let clonAboutMe = Object.assign({}, aboutMe);
console.log("Клон Инфо обо мне: ", clonAboutMe);

//second
function Phone(firm, model, OS) {
  this.firm = firm;
  this.model = model;
  this.OS = OS;
}
let myPhone = new Phone("Apple Iphone", "XS", "IOS");
console.log("Телефон: ", myPhone);

let clonMyPhone = Object.assign({}, myPhone);
console.log("Клон Телефон: ", clonMyPhone);
//third
let Comp = {
  type: "laptop",
  showType: function () {
    console.log(this.type);
  },
};

let now = Object.create(Comp); //not use
now.showType();

let want = Object.create(Comp); //not use
want.type = "PC";
want.showType();

let clonComp = Object.assign({}, want); // use не часто
console.log("test", clonComp);

let generalClon = Object.assign(aboutMe, myPhone, clonComp); // use не часто
console.log("generalClon", generalClon);
////////////

let userName = new Object();

userName.age = 23;
userName.name = "Vasyl'";

userName = {
  age: 33,
  func: () => {
    console.log("Hello");
  },
};
//userName["test"] = 34;

//userName.func();

function Books(year, user, author) {
  this.year = year;
  this.user = user;
  this.author = author;
}
let book = new Books(1984, "Liuba", "author12");
book.year = 1999;

let magazine = Object.assign({}, book); //клонируем объект book
console.log("magazine: ", magazine);

console.log("book: ", book);
magazine.year = 2022;
let obj = Object.assign(book, magazine, userName);
console.log("obj: ", obj);
console.log("book: ", book);
