function Person() {
  this.name = 'Jack',
  this.age = 25,
  this.sayName = function () {
      console.log(this.age);

      function innerFunc() {
          console.log(this.age);
      }
      innerFunc();
  }
}
let x = new Person();
x.sayName();