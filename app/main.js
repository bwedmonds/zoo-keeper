class Alligator {
  constructor(name, color, gender, weight, tailLengthInch, teethSize) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");

class Bonobo {
  constructor(name, color, gender, weight, age, isAlpha = false) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.age = age;
    this.isAlpha = isAlpha;
  }
}

let bono = new Bonobo("Bono", "brown", "M", 80, 55, true);

class Chipmunk {
  constructor(name, color, gender, weight, speed, home) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.speed = speed;
    this.home = home;
  }
}

let dale = new Chipmunk("Dale", "striped", "M", 5, 35, "garden");

class DesertTortoise {
  constructor(name, color, gender, weight, age, hasBred = false) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.age = age;
    this.hasBred = hasBred;
  }
}

let torty = new DesertTortoise("Torty", "green", "M", 50, 100, true);

class Earwig {
  constructor(name, color, gender, ear, food) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.ear = ear;
    this.food = food;
  }
}

let edna = new Earwig("Edna", "pink", "F", "left", "ear wax");

class Flamingo {
  constructor(name, gender, home, food, color = "pink") {
    this.name = name;
    this.gender = gender;
    this.home = home;
    this.food = food;
    this.color = color;
  }
}

let fiona = new Flamingo("Fiona", "F", "fetid lake", "gross stuff");

class Gecko {
  constructor(name, color, gender, weight, tailLengthInch, favHangSpot) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.favHangSpot = favHangSpot;
  }
}

let gerald = new Gecko("Gerald", "green", "M", 1, 5, "window");

class HarpyEagle {
  constructor(name, color, gender, weight, talonLengthInch, food) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.talonLengthInch = talonLengthInch;
    this.food = food;
  }
}

let henrietta = new HarpyEagle("Henrietta", "grey", "F", 3, 5, "mice");

class Impala {
  constructor(name, color, gender, weight, speed, hornLengthInch) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.speed = speed;
    this.hornLengthInch = hornLengthInch;
  }
}

let issa = new Impala("Issa", "brown and white", "F", 55, 55, 10);

class Jellyfish {
  constructor(name, gender, color = "clear", goal, poisonous = true) {
    this.name = name;
    this.gender = gender;
    this.color = color;
    this.goal = goal;
    this.poisonous = poisonous;
  }
}

let jeremiah = new Jellyfish("Jeremiah", "M", "world domination");

class Kiwi {
  constructor(name, color, gender, weight, talonLengthInch, food) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.talonLengthInch = talonLengthInch;
    this.food = food;
  }
}

let ken = new Kiwi("Ken", "blue and green", "M", 3, 1, "grass");

class Loon {
  constructor(name, color, gender, weight, talonLengthInch, food) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.talonLengthInch = talonLengthInch;
    this.food = food;
  }
}

let loretta = new Loon("Loretta", "white", "F", 6, 3, "fish");

class MacaroniPenguin {
  constructor(name, color, gender, weight, talonLengthInch, food) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.talonLengthInch = talonLengthInch;
    this.food = food;
  }
}

let marty = new MacaroniPenguin("Marty", "black and white", "M", 2, 1, "fish");

class Narwhal {
  constructor(name, color, gender, weight, hornLengthInch, food) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.hornLengthInch = hornLengthInch;
    this.food = food;
  }
}

let nancy = new Narwhal("Nancy", "grey", "F", 500, 45, "ice");


export default Alligator;


import Alligator from "./models/Alligator.js";
