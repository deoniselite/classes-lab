//Cat Class
class Cat {
    constructor(name, color, age) {
      this.name = name;
      this.color = color;
      this.age = age;
    }
  
    meow() {
      console.log(`${this.name} says meow!`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping... Zzz`);
    }
  
    play() {
      console.log(`${this.name} is playing!`);
    }
  }
  
  // Create two instances of the Cat class
  const cat1 = new Cat("Whiskers", "gray", 3);
  const cat2 = new Cat("Mittens", "black", 2);
  
  // Log the properties of both cat instances
  console.log(cat1);
  console.log(cat2);
  
  // Invoke methods from both cat instances
  cat1.meow();
  cat2.sleep();
  
  // Pirates
  class Pirate {
    constructor(name, age, ship) {
      this.name = name;
      this.age = age;
      this.ship = ship;
    }
  
    greet() {
      console.log(`Ahoy, matey! I am ${this.name}!`);
    }
  
    plunder() {
      console.log(`${this.name} is plundering the seas!`);
    }
  
    drinkRum() {
      console.log(`${this.name} is drinking rum! Yo ho ho!`);
    }
  }
  
  // Instantiate arrays of three pirates: jollyRoger and blackPearl
  const jollyRoger = [
    new Pirate("Captain Hook", 40, "Jolly Roger"),
    new Pirate("Blackbeard", 35, "Jolly Roger"),
    new Pirate("Calico Jack", 28, "Jolly Roger")
  ];
  
  const blackPearl = [
    new Pirate("Captain Jack Sparrow", 32, "Black Pearl"),
    new Pirate("Barbossa", 45, "Black Pearl"),
    new Pirate("Elizabeth Swann", 27, "Black Pearl")
  ];
  
  // Loop over each array and print three properties of each pirate
  jollyRoger.forEach(pirate => {
    console.log(pirate.name);
    console.log(pirate.age);
    console.log(pirate.ship);
  });
  
  blackPearl.forEach(pirate => {
    console.log(pirate.name);
    console.log(pirate.age);
    console.log(pirate.ship);
  });
  