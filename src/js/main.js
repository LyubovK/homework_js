let me = {
  age: 29,
  name: "Liuba",
  lastName: "Kytsenko",
  kids: 2,
  work: true,
};

let friend = {
  age: 30,
  name: "Nastia",
  lastName: "Fen'",
  kids: 2,
  work: false,
};

console.log("Я старше? ", me.age > friend.age);
console.log(
  "Длина имени моя меньше, чем у Насти ",
  me.name.length <= friend.name.length
);
console.log("Детей поровну?)) ", me.kids === friend.kids);
console.log("Ищет работу Настя? ", friend.work == false);
console.log("Мы родственники? ", me.lastName.length === friend.lastName.length);

// obj.name = prompt("Vvedi name");
// obj.lastName = prompt("Vvedi name");
// console.log("Hello, ", obj.name, obj.lastName);
