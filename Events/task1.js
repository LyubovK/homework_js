const text = document.querySelector(".text");
const tArea = document.querySelector("textarea");
const textContent = text.textContent || text.innerText;
const container = document.querySelector(".container");

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.keyCode == 69) {
    event.preventDefault();
    tArea.innerHTML = textContent;
    text.classList.remove("display");
    tArea.classList.add("display");
  }
  if (event.ctrlKey && event.keyCode == 107) {
    event.preventDefault();
    text.innerHTML = tArea.value;
    console.log(tArea.value);
    tArea.classList.remove("display");
    text.classList.add("display");
  }
});
