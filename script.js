class Person  {
    constructor (name, age, eyes, hair){
        this.legs=2;
        this.arms=2;
        this.name=name;
        this.age=age;
        this.eyes=eyes;
        this.hair=hair;
    }

    greet(otherPerson) {
      console.log('hi ' + otherPerson + '!' );  
    }

    walk () {
        console.log("I hate when my car is in the shop");
    }

}


let itzamna= new Person("Itzamna", 99, "dark brown", "black");
console.log(itzamna);
itzamna.hair="blue";
console.log(itzamna);

const me = new Person();
const you = new Person();
console.log(me);
console.log(you);
 me.greet("Isiah");
 me.walk();
 you.greet("Isiah")
 you.walk();
 

const vendingMachine={
    snacks:
    [
        {name: "kitkat", price: 6},
        {name: "sun chips", price: 7},
        {name: "apple", price: 12},
    ],
    vend (input) {
        console.log("vending", vendingMachine.snacks[input]);
    }
};

vendingMachine.vend(2);




