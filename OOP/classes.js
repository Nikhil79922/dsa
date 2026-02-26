class vehicle{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }

    move(){
        console.log(`${this.brand} is moving at the speed of ${this.speed}`)
    }
}

class car extends vehicle{
    constructor(brand,speed){
super(brand);
this.speed=speed
    }

    fuel(){
        console.log(this.speed + 'Kmph with one litre')
    }
    //  move(){
    //     console.log(`${this.brand} is moving at the speed of ${this.speed}`)
    // }
}

let c1=new car('BWM',200);
console.log("Car ===>",c1)
c1.move();
c1.fuel()




//Problem statement 
class BankAccount{
    #balance=0;
    constructor(balance){
this.desposit(balance);
    }

    desposit(amount){
        if(amount<=0) console.warn(`Don't Accept Zero or Less than Zero value.`)
         this.#balance+=amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const BA= new BankAccount(10);
BA.desposit(20)
BA.desposit(30)
BA.desposit(40)
let totalSaving = BA.getBalance();
console.log("TotalSaving ===>",totalSaving)
