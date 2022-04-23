let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
let _list = document.querySelector(".play-list");
playList.forEach((li, i) => {
  _list.innerHTML += `
      <li class="play-list__item" data-number="${i + 1}">
      <div class="play-list__author">${li.author} </div>
      <div class="play-list__song">${li.song}</div> 
      </li>
  `;
});
let open = document.querySelector(".open-modal");
let close = document.querySelector(".close-modal");
let modal = document.getElementById("modal");
open.onclick = function () {
  modal.classList.toggle("opened");
  document.body.style.zIndex = "2";
};
close.onclick = function () {
  modal.classList.toggle("opened");
};

let lightsBtn = document.querySelector(".btn-next");
// let lights = document.querySelector(".lights-list__item");
// let lightsList = document.querySelector(".lights-list");
// arr = ["red", "orange", "green"];
// console.log(lights.nextElementSibling);
// arr.forEach((li, i) => {
//   lightsList.innerHTML += `<li class="lights-list__item ${li}"></li>`;
//   //arr[i] = lights;
// });

let i = -1;
lightsBtn.onclick = function trafficLight() {
  i++;
  let arr = ["red", "orange", "green"],
    lights = document.querySelectorAll(".lights-list__item");
  if (lights[i - 1]) lights[i - 1].style.backgroundColor = "";
  if (i == arr.length) i = 0;
  lights[i].style.backgroundColor = arr[i];
};

/*
let userName = prompt("Как Ваше имя?");
let userSerName = prompt("Фамилия?");
let userAge = prompt("Сколько Вам лет?");
let arr = [userName, userSerName, userAge];
document.addEventListener("DOMContentLoaded", function () {
  let _list = document.querySelector(".user-list");
  _list.setAttribute("data-info", "fff");
  _list.innerHTML = "";
  arr.forEach((li) => {
    _list.innerHTML += `
        <li class="user-list__item" data-info=""> ${li}
        </li>
    `;

    return _list;
  });

  let btn = document.querySelector(".btn");
  btn.onclick = function () {
    _list.classList.toggle("red");
  };
});*/
