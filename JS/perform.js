// Code 1 

const t1 = performance.now();

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para no. " + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("The time code took to execute is : ", (t2 - t1)); //5ms

// Code 2

const t3 = performance.now();

let div = document.createElement('div');
for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para no. " + (100 + i);
    div.appendChild(para);
}
document.body.appendChild(div);

const t4 = performance.now();

console.log("The time code took to execute is : ", (t4 - t3));  //0.6ms


// Code 3
const t5 = performance.now();

let fragment = document.createDocumentFragment();

for(let i=1 ; i<=100 ; i++){
    let para = document.createElement('p');
    para.innerText = "This is para no . " + (200+i);
    fragment.appendChild(para);
}
document.body.appendChild(fragment);

const t6 = performance.now();
console.log("The time code took to execute is : ",(t6-t5));
/*
This happend because of the flow execution

*/