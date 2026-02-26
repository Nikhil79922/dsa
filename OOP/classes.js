class vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    move() {
        console.log(`${this.brand} is moving at the speed of ${this.speed}`)
    }
}

class car extends vehicle {
    constructor(brand, speed) {
        super(brand);
        this.speed = speed
    }

    fuel() {
        console.log(this.speed + 'Kmph with one litre')
    }
    //  move(){
    //     console.log(`${this.brand} is moving at the speed of ${this.speed}`)
    // }
}

let c1 = new car('BWM', 200);
console.log("Car ===>", c1)
c1.move();
c1.fuel()




//Problem statement 
class BankAccount {
    #balance = 0;
    constructor(balance) {
        this.desposit(balance);
    }

    desposit(amount) {
        if (amount <= 0) return console.warn(`Don't Accept Zero or Less than Zero value.`)
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const BA = new BankAccount(10);
BA.desposit(20)
BA.desposit(30)
BA.desposit(40)
let totalSaving = BA.getBalance();
console.log("TotalSaving ===>", totalSaving)


//Problem statement
class Counter {
    #count = 0;
    constructor(count) {
        this.increment(count);
    }

    increment(value) {
        if (value <= 0) return console.warn(`Don't Accept Zero or Less than Zero value.`)
        this.#count += value;
    }

    decrement(value) {
        if (value <= 0) return  console.warn(`Don't Accept Zero or Less than Zero value.`)
        this.#count -= value;
    }

    getValue() {
        return this.#count;
    }
}

const CA = new Counter(10);
CA.increment(20)
CA.increment(30)
CA.increment(40)
CA.decrement(2)
let totalCount = CA.getValue();
console.log("TotalCount ===>", totalCount)


//Problem Statement 3 
class UserProfile {
    #email;
    #age;

    constructor(email, age) {
        this.setEmail(email);
        this.setAge(age)
    }
    setEmail(email) {
        let checkemail = email.split('');
        if (checkemail.includes('@')) {
            this.#email = email;
        } else {
            return console.error('Please add a valid Email formate')
        }
    }
    setAge(age) {
        if (age >= 18) return  console.error(`Not accessible for under 18`)
        this.#age = age;
    }
    getProfile() {
        return { emai: this.#email, age: this.#age }
    }
}

const user = new UserProfile('nikkssy@gmail.com', 2)
user.setAge(22);
user.setEmail("ogsignh@gmail.com");
console.log(user.getProfile())



//Problem statement  4
class Products {
    #price;
    constructor(price) {
        this.setPrice(price)
    }
    setPrice(amount) {
        if (amount <= 0) return console.warn(`Don't Accept Zero or Less than Zero value.`)
        this.#price = amount;
    }
    applyDiscount(percent) {
        if (percent <= 0) return  console.warn(`Don't Accept Zero or Less than Zero value.`)
        if (percent > 50) return console.warn(`Can't get more than 50%`)
        this.#price *= percent / 100;
    }
    getPrice() {
        return this.#price;
    }
}

const PA = new Products(12);
PA.setPrice(20)
PA.applyDiscount(49)
console.log(PA.getPrice());

//Problem statement 5
class Order {
    #orderId;
    constructor(Id) {
        this.#orderId = Id;
    }
    getOrderId() {
        return this.#orderId;
    }
}

const O = new Order(2);
console.log(O.getOrderId());

//Problem Statement 6
class LoginSystem {
    #password;
    #loginAttempts;

    constructor(pwd) {
        this.setPwd(pwd)
    }

    setPwd(pwd) {
        this.#password = pwd;
        this.#loginAttempts = 0
    }
    login(pwd) {
        if(this.#loginAttempts == 3) return console.error("Account Locked")
        if(this.#password === pwd){
           return console.log(`Login SuccessFull...`);
        }
        this.#loginAttempts +=1;
    }
resetAttempts(pwd){
    this.#password = pwd;
      this.#loginAttempts =0 ;
}
}