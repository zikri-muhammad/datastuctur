
// instantion
class Player {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    instroduce(){
        console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
    }
}

class Wizzard extends Player {
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`Weeeeeee I'm a ${this.type}`);
    }
}

const Wizzard1 = new Wizzard('Muhammad Zikri', 'Dark Magic')
console.log(Wizzard1);