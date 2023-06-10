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
  