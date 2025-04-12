// Pending Promise
/*
let promise = new Promise ( (res,rej)=>{
    console.log("Hello");
});
*/

// Reject
/*
let promise = new Promise ( (res,rej)=>{
    console.log("World");
    rej(new Error("404 not found ..!"));
});
*/

// Resolved
/*
let promise = new Promise ( (res , rej)=>{
    console.log("Hello World..!");
    res("Done");
});
*/


// Asynchronous Funciton in Promise
/*
let primise = new Promise((res, rej) => {

    function sayName(name) {
        console.log("Name is :", name);
    }
    setTimeout(() => {
        sayName("Ashitosh");
    }, 2000);

    res("Done..!");
});
*/

// then and cautch

/*
let promise = new Promise((res, rej) => {
    setTimeout(() => {
        let succes = 1;
        if (succes) {
            res("Promise fulfilled");
        }
        else {
            rej("Promise rejected");
        }
    },2000);
});

promise.then((msg) => {
    console.log("'Then' is executed and the message is : ", msg);
}).catch((msg) => {
    console.log("'Catch' is executed and the messsage is : ", msg);
});
*/


// Multiple Promisses handling

/*
let promise1 = new Promise((res, rej) => {
    setTimeout(res, 1000, "Resolve 1");
});

let promise2 = new Promise((res, rej) => {
    setTimeout(res, 2000, "Resolve 2");
});

let promise3 = new Promise((res, rej) => {
    setTimeout(rej, 4000, "Error 404");
});

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
}).catch((err)=>{
    console.log("Error is : "+err);
});
*/