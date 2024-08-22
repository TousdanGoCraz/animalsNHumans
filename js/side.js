//Creature class 
//Human and Animal classes    
//Humans can speak and tell animals commands
//animals can make animal noises and respond to humans calls
//animals properties are shown when humans call to them
class Creature{
    constructor(name,age,weight){
        this._name = name
        this._age = age
        this._weight = weight
    }
    describe(){
        console.log(`\n\tName: ${this._name}\n\tAge: ${this._age}\n\tWeight: ${this._weight}`)
    }

    speak(){
        console.log('Neigh!')
    }
}

class Human extends Creature{
    constructor(name,age,weight,gender,favoriteActivity){
        super(name,age,weight)
        this._gender = gender
        this._favoriteActivity = favoriteActivity
    }

    get favoriteActivity() {
        console.log(`${this._favoriteActivity} is my favorite activity`)
    }
}

class Animal extends Creature{
    constructor(name,age,weight,favoriteFood,sound){
        super(name,age,weight)
        this._favoriteFood = favoriteFood
        this._sound = sound
        
    }

    speak(){
        console.log(`${this._name} says ${this._sound}`)
    }
}



let arvin = new Human('Arvin',24,86,'Male','Video Games')

let donkey = new Animal('Donkey',5,98,'carrots','AAAEEEEE AEEEEEE')
let cow = new Animal('Cow',9,76,'milk','MOOOOOoooOOoOOooo')
let arr = [arvin,donkey,cow]