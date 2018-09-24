class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major = "undecided") {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `. Your major is ${this.major}.`;
    }
    return description;
  }
}
class Traveler extends Person {
  constructor(name, homeLocation) {
    super(name);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    return !!this.homeLocation
      ? `Hi, I am ${this.name}. I'm visitting from ${this.homeLocation}`
      : `Hi, I am ${this.name}`;
  }
}

const me = new Student("Duc", 25, "Accoutant");
console.log(me.getDescription());

const you = new Traveler("John", "");
console.log(you.getGreeting());
