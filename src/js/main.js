class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value.length < 0) {
      alert("Радиус не может быть меньше нуля");
      return;
    }
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  square() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

let circle = new Circle(25);
console.log("Радиус круга: " + circle._radius);
console.log("Диаметр круга: " + circle.diameter);
console.log("Площадь круга: " + circle.square());
console.log("Периметр круга: " + circle.perimeter());

//метод для вводу (приймає рядок і виводить текст відповідним кольором;
//текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
class Marker {
  constructor(colour, count) {
    this.colour = colour;
    this.count = count;
  }

  vvv() {
    let input = document.getElementById("inp");
    let par = document.getElementById("par");
    let c = input.value.length * 0.5;
    input.style.color = this.colour;
    input.oninput = function () {
      par.innerHTML = "Symbols entered: " + input.value.length;
    };

    return;
  }
}

let redMarker = new Marker("red", 20);
redMarker.vvv();
