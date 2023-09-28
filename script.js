class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name}  лает.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
  
    meow() {
      console.log(`${this.name}  мяукает.`);
    }
  }
  

  const dog = new Dog("Рубик", 3, "Золотистый ретривер");
  console.log(dog.name); // Output: Рубик
  console.log(dog.age); // Output: 3 
  console.log(dog.breed); // Output: Золотистый ретривер
  dog.bark(); // Output: Рубик лает.
  
  const cat = new Cat("Тима", 5, "Серый");
  console.log(cat.name); // Output: Whiskers
  console.log(cat.age); // Output: 5 
  console.log(cat.color); // Output: Серый
  cat.meow(); // Output: Тима мяукает.