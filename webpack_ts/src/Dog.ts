export default class Dog{
    constructor(public name: string, public bvreed: string, public age:number ) {}
    bark(){
        console.log("Woof woof");
    }
}