/*
// Private class:atribute,get,set in Js

class human {

    age = 18;
    #weight = 65;   //private
    height = 6.1;

    walking() {
        console.log("User is now walking..!");
    }

    eating() {
        console.log("User is now eating..!");
    }

    coading() {
        console.log("The user is now coding..!");
    }

    
    get weightGetter(){
        return this.#weight;
    }

    // set weightSetter(wei){
    //     this.#weight = wei;
    //     console.log();
    // }
};

let Ashitosh = new human();
console.log(Ashitosh.age);
Ashitosh.walking();
Ashitosh.eating();
// console.log("Weight : ",Ashitosh.#weight)       //error
// console.log("Weight : ",Ashitosh.weight)       //undefined
console.log(Ashitosh.weightGetter);
// Ashitosh.weightSetter(99);
console.log(Ashitosh.weightGetter); 

Ashitosh.coading();
*/

// Constructor,default parameter in JS

/*
class human{
    constructor(age , hei , wei , per){
        console.log(`Accourding to your age : ${age}, height : ${hei}, weight : ${wei}, CGPA : ${per} you are above average..!\nResult : Great..!`)
    }

    sayName(name = "Default Name"){
        console.log("Name : ",name);
    }
};

let Ashitosh = new human(18,"6,1ft",65,8.3);
Ashitosh.sayName("Ashitosh");
Ashitosh.sayName();
*/


/*
// Object Cloning


// 1st Way 

let obj1 = {name : "Ashitoh" , age:18 , std : "FY CSE"};

let obj2 = {...obj1};
obj2.age=19;    //to check actual clonning had happned..!
obj2.div="A";
console.log("Object 1 : ",obj1);
console.log("Object 1's clone Object 2 : ",obj2);


// 2nd way

let obj3 = Object.assign({},obj1,obj2);     //Assign operator
console.log("Object 1,2's clone Object 3 : ",obj3);

// 3rd way

obj4 = {};

for(let i in obj3){
    let newKey = i;
    let newVal = obj3[i];
    // Insertion
    
    obj4[newKey]=newVal;        // Clone was created
}

console.log("Object 1 : ",obj1);
console.log("Object 1's clone Object 2 : ",obj2);
console.log("Object 1,2's clone Object 3 : ",obj3);
console.log("Object 1,2,3's clone Object 4 : ",obj4);

*/

// Garbage Collector
