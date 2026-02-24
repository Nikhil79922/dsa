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
c1.move();
c1.fuel()