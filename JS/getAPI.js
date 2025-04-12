// *async
/*
async function getData(){
    setTimeout(function(){
        console.log("Ashitosh Lavhate is PRO..!");
    },2000);
}

getData();
*/

// ^Fetch API

// * GET request
/*
async function getdata() {

    // get Reuqest
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');

    // parse json - await
    let data = await response.json();
    console.log("The response of the API : ",response);
    console.log("The data from the API : ",data);
}

getdata();
*/

// * POST request


// & GET request questions

// ! Q) Fetch data from https://jsonplaceholder.typicode.com/posts and display the first five post titles in the console.

/*
const url = "https://jsonplaceholder.typicode.com/posts" ;

(async function(){
    let response = await fetch(url);
    let data = await response.json();
    for(let i=0 ; i<5 ;i++){
        console.log(data[i].title);
    }
})();
*/

// !Fetch user data from https://jsonplaceholder.typicode.com/users and display the names and emails inside an unordered list (<ul>) in the HTML.

/*
const url = "https://jsonplaceholder.typicode.com/users";
const ul = document.getElementById("realInfo");

(async function (){
    let response = await fetch(url);
    let data = await response.json();
    for(let i=0; i<10 ; i++){
        let li = document.createElement('li');
        li.textContent = data[i].name + " | " + data[i].email;
        li.style.color="white";
        ul.appendChild(li);
    }
})();

*/


//  ! 1️⃣ Fetch a random user from https://jsonplaceholder.typicode.com/users. | 2️⃣ Extract their id and use it to fetch their posts from: Copy code https://jsonplaceholder.typicode.com/posts?userId={id} . |3️⃣ Display the first three post titles inside an unordered list (<ul>).

/*
const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
const ul = document.getElementById("realInfo");

(async function(){

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    ul.textContent="Titles : ";

    for(let i=0 ; i<10 ; i++){
        let id = data[i].id;

        const postID = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const idInfo = await postID.json();
        console.log(idInfo);

        let li = document.createElement('li');
        let p = document.createElement('p');

        li.textContent=data[i].title;
        p.textContent=idInfo.body;

        li.appendChild(p);
        ul.appendChild(li);
    }
})();
*/