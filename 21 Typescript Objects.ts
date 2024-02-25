
// Write a programe that objects containing these items.

//Datatype of person object 
interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean,
}
//person oject
let person :person = {
    age : 21,
    name : 'Waqas',
nationality : 'Pakistan',
student :true
}
//print person
console.log(person);

//Datatype of car object
interface car{
    maker : string,
    color :string,
    manual : boolean,
}
//car object
let car = {
    maker : 'Daihatsu',
    color : 'Grey',
    Manual : true,
}

//print car
console.log(car);