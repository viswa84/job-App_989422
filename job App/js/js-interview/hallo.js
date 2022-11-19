// const url ="viswa"

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printname() {
    console.log(this.name+"  "+this.age);
  }
}


let p1 = new Person("Viswa",25);
p1.printname();
