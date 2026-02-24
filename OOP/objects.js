const book={
    title:'The law of human Nature',
    author:'Robert Greene',
    year:2002,
    //     getDetails:()=>{                                             //This works , but arrow functions didn't.
    //     console.log(`${this.title} by ${this.author}`)
    // } ,
    getDetails(){                                             //This works , but arrow functions didn't.
        console.log(`${this.title} by ${this.author}`)
    }
}

book.getDetails();


const obj = {
  value: 10,
  show() {
    return this.value;
  }
};
const fn = obj.show;
console.log(fn());

// to print the value 
const fnV=obj.show.bind(obj);
console.log(fnV());