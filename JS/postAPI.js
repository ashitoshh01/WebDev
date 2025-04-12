// ! Q1️⃣: Create a new post and log the response
/*
const url = "https://jsonplaceholder.typicode.com/posts";

(async function() {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Hello World!",
            body: "This is my first post request!",
            userId: 1
        })
    });

    let data = await response.json();
    console.log("✅ POST Response:", data);
})();
*/


// ! Q2️⃣: Send user details and show confirmation message
/*
const url = "https://jsonplaceholder.typicode.com/users";

async function post() {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": "Ashwini",
            "email": "ashwini@example.com",
            "username": "Ash123"
        })

    })

    let data = await response.json();
    console.log("User added Successfully..!\nand the data that was sent was : ",data);
};

post();
*/


// ! Q3️⃣: Add a new comment to a post & show it on the webpage

/*
const url = "https://jsonplaceholder.typicode.com/comments";
const ul = document.querySelector(".comment");

(async function () {
    let response = await fetch(url, {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            "postId": 1,
            "name": "Ashwini",
            "email": "ashwini@example.com",
            "body": "Great blog! Keep it up!"
        })
    });
    let data = await response.json();
    console.log(data);
    let li = document.createElement('li');
    li.textContent=data.body;
    ul.appendChild(li);
})();
*/


// ! Q4️⃣: Create a post and display the response inside a <div>
/*
const url = "https://jsonplaceholder.typicode.com/posts";
const div = document.querySelector('.div');

(async function () {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userId": 1,
            "title": "New Tech Launch",
            "body": "Excited about the latest AI innovations!",
            "footer": "Ignite Creativity & Ignite Innovation"
        })
    })
    let data = await response.json();
    console.log("Data Posted..!");
    div.textContent = "Data sent was : " + data.userId + " | " + data.title + " | " + data.body + " | " + data.footer;
})();
*/


// ! Q5️⃣: Post user data and fetch their posts immediately

/*
const url = "https://jsonplaceholder.typicode.com/users";
(async function () {
    let response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify({
            "userId":"1",
            "name":"Ashtitosh",
            "class":"FY CSE",
            "rollNo":"27",
            "divison":"A",
        }),
    });
    let data = await response.json();
    let id = data.id;
    
    const fetchPOST = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    let newResp = await fetch(fetchPOST);
    let answer = await newResp.json();
    console.log(answer);
    
    })();
    
    */
   
   
// ! Q6️⃣: Create a new post and update it immediately

/*
// This will now run s the api we are working on is not storing our data thats why we cant modify it.Hence error is been shown so dont worry the code is correct.

const url = "https://jsonplaceholder.typicode.com/posts";

(async function () {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userId": 1,
            "title": "Title",
            "body": "Body"
          }),
    });
    
    let data = await response.json();
    let id = data.id;
    const Nurl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    let updateRes = await fetch(Nurl,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            "id":id,
            "userId": 1,
            "title": "Updated Title",
            "body": "Updated Body"
        })
    });

    let newData = await updateRes.json();
    console.log("✅ Post Updated:", newData);
})();
*/

