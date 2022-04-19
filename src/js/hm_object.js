let dreamAuto = {
  producer: "Hyundai Motor",
  model: "Tucson",
  year: 2021,
  avSpeed: 120,
  voluemTank: 70,
  avFuelConsumption: 7,
  time: 0,
  driver: {
    name: "NoDriver",
    isDriver: "true",
  },
  info: function () {
    console.log(`
              producer : ${this.producer},
              model : ${this.model},
              year : ${this.year},
              avSpeed : ${this.avSpeed},
              voluemTank : ${this.voluemTank},
              avFuelConsumption : ${this.avFuelConsumption},
              time : ${this.time},
              driver : ${this.driver.name}
          `);
  },
  addDriver: function (question) {
    let driver = this.driver;
    if (confirm(question)) {
      driver.name = prompt("Ок, приняты. Ваше имя?");
      driver.isDriver = true;
    } else {
      alert("За руль нельзя.");
      driver.isDriver = false;
    }
  },
  refilling(value) {
    if (value <= 70) {
      this.voluemTank = value;
    } else {
      value = prompt("много хочешь, не влезет");
    }
  },
  timeToGo(s) {
    let userTime = eval(s / this.avSpeed);
    if (userTime % 4 == 0) {
      userTime += 1;
    }
    this.time = parseInt(userTime);
    return parseInt(userTime);
  },
  controlVolueFuel(s) {
    oneKm = this.avFuelConsumption / 100;
    let value = eval(s * oneKm);
    console.log(value);
    if (value > this.voluemTank) {
      alert("надо будет дозаправляться");
    }
  },
};

dreamAuto.info();
let refValue = prompt("на сколько будем заправлять?");
dreamAuto.refilling(refValue);
dreamAuto.addDriver("Есть права?");
let distance = Number(prompt("Сколько будем ехать?"));
dreamAuto.timeToGo(distance);
dreamAuto.controlVolueFuel(distance);
dreamAuto.info();

let time = new Object();
time = {
  hour: "",
  minute: "",
  second: "",
  info: function () {
    console.log(`
      ${this.hour}:${this.minute}:${this.second}
          `);
  },
  changeHourse(value) {
    if (value > 24) {
      this.hour = parseInt(value / 24);
    } else {
      this.hour = value;
    }

    console.log(this.hour);
    return this.hour;
  },
  changeMinute(value) {
    if (value >= 60) {
      this.minute = value % 60;
      this.hour += parseInt(value / 60);
    } else if (value >= 75) {
      console.log(
        "Вы ввели не корректные данные, минут должно быть не больше 75"
      );
    } else {
      this.minute = value;
    }
    return this.minute;
  },
  changeSecond(value) {
    if (value >= 60) {
      this.second = value % 60;
      this.minute += parseInt(value / 60);
    } else if (value >= 150) {
      console.log(
        "Вы ввели не корректные данные, секунд должно быть не больше 150"
      );
    } else {
      this.second = value;
    }
    return this.second;
  },
};
time.info();
time.changeHourse(23);
time.changeMinute(70);
time.changeSecond(145);
time.info();

function nod(n, d) {
  if (n == 0) return false;

  while (d != 0) {
    if (n > d) n = n - d;
    else d = d - n;
  }
  console.log("n = ", n);
  return n;
}

function Frac(numerator, denomerator) {
  let divider = nod(numerator, denomerator);
  let res = {
    n: numerator / divider,
    d: denomerator / divider,
    info: function () {
      console.log(`${this.n}/ ${this.d}`);
    },
  };
  return res.info();
}

function Pluc(fn, fd, sn, sd) {
  let finDen = fd * sd;
  let finFirstNum = fn * sd;
  let finSecondNum = sn * fd;
  let generalNum = finFirstNum + finSecondNum;

  return Frac(generalNum, finDen);
}

function Minus(fn, fd, sn, sd) {
  let finDen = fd * sd;
  let finFirstNum = fn * sd;
  let finSecondNum = sn * fd;
  let generalNum = finFirstNum - finSecondNum;
  return Frac(generalNum, finDen);
}

function Divide(fn, fd, sn, sd) {
  let finNum = fn * sd;
  let finDev = sn * fd;
  return Frac(finNum, finDev);
}

function Multiply(fn, fd, sn, sd) {
  let finNum = fn * sn;
  let finDev = fd * sd;
  return Frac(finNum, finDev);
}
console.log(Pluc(2, 3, 4, 5));
console.log(Minus(4, 5, 2, 3));
console.log(Divide(2, 3, 4, 5));
console.log(Multiply(2, 3, 4, 5));

/*let car = {
    model: "Cybertruck",
    manufacturer: "Tesla",
    year: 2020,
    maxSpeed: 177,
    volumeEngine: "just electrick",
    shasher: "auto-pilot",
    drive: function () {
      console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
    },
    info: function () {
      console.log(`
              model : ${this.model}
              manufacturer : ${this.manufacturer}
              year : ${this.year}
              maxSpeed : ${this.maxSpeed}
              volumeEngine : ${this.volumeEngine}
              shasher : ${this.shasher},
          `);
    },
    increaseMaxSpeed: function (newSpeed) {
      this.maxSpeed += newSpeed;
    },
    changeYear: function (newValue) {
      this.year = newValue;
    },
    addDriver: function (driver) {
      this.shasher = driver;
    },
  };
  
  let driver = {
    name: "Ivan Petrovich",
    age: 45,
  };
  
  car.info();
  car.changeYear(2021);
  car.addDriver("elon");
  car.increaseMaxSpeed(100);
  car.info();
  */
