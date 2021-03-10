// https://monsterlessons.com/project/lessons/factory-pattern-v-javascript

class Animal {
  create(type) {
    let animal;
    switch (type) {
      case "cat":
        animal = new Cat();
        break;
      case "dog":
        animal = new Dog();
        break;
      case "fish":
        animal = new Fish();
        break;
      case "bird":
        animal = new Bird();
        break;
      default:
        throw new Error("Unknown animal");
    }
    animal.type = type;
    animal.say = function () {
      console.log(`I am a ${this.type} (${this.sound})`);
    };
    return animal;
  }
}

class Cat {
  constructor() {
    this.sound = "Myaaaaau";
  }
}

class Dog {
  constructor() {
    this.sound = "Whoooffff";
  }
}

class Fish {
  constructor() {
    this.sound = "Sounds of silence";
  }
}

class Bird {
  constructor() {
    this.sound = "Koo-koo";
  }
}

const factory = new Animal();
const cat = factory.create("cat");
const dog = factory.create("dog");
const fish = factory.create("fish");
const bird = factory.create("bird");

cat.say();
dog.say();
fish.say();
bird.say();

// Фабрику стоит использовать, если в конструкторе у вас очень высокая сложность создания обьекта, чаще всего, когда он
// может создаваться из нескольких источников. Также она отлично подходит, когда вам нужно создавать много обьектов с
// одинаковыми полями. Но также, она может создать дополнительную сложность в приложении там, где ее можно было бы избежать.
