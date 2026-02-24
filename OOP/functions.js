function car(brand, speed){
    this.brand=brand;
    this.speed=speed;
}
 car.prototype.accelerate= function(){
    this.speed=this.speed+10;
    return this.speed;
 }

 const c= new car('BWM',160);
 console.log(c.accelerate());


 //2
 function Test() {
  this.value = 100;
}

const a = new Test();
const b = new Test();

console.log(a === b);


//3
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = () => {
  console.log(this.name);
};

const p = new Person("Sam");
p.sayName();

//4
function User(name) {
  this.name = name;
}

const u = User("Alex");
console.log(u);