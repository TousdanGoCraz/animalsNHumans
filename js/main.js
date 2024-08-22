//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
        
    }
    speak(){
        console.log(`Knock Knock! ${this.name}'s here`)
    }
}

class Horse extends Animal{
    constructor(name,breed,color){
        super(name)
        this.breed = breed
        this.color = color
    }

    neigh(){
        console.log(`${this.name} is - NENEENENEEIGIGHEEHHEHEHHEEHHEHEEE`)
    }
}


let horsy = new Horse('Jockey Chan','Arab','Matt black')

