let lorem = document.querySelector(".container");
let col = document.querySelector(".col");
let p = document.querySelector("p");

lorem.addEventListener("click", (e) => {
  lorem.append(" Новый текст ");
});
col.addEventListener("click", (e) => {
  alert("col");
});

p.addEventListener("click", (e) => {
  alert("p");
});

lorem.onclick = function (e) {
  this.querySelector(".col").append(" Новый текст ");
  // браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
  //   setTimeout(() => {
  //     alert("target = " + event.target.tagName + ", this=" + this.tagName);
  //     event.target.style.backgroundColor = "";
  //   }, 0);
};
