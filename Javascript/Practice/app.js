// // // // // console.log("Hello World");
// // // // // let a = 5;
// // // // // let b = 10;
// // // // // console.log("Sum is: ", a + b);
// // // // // let output = `The cost of pencil is: ${a} and of pen is: ${b} `;
// // // // // console.log(output);
// // // // // let red, yellow;
// // // // // let light = red;
// // // // // if (light == red) {
// // // // //     console.log("Stop");
// // // // // }
// // // // // else if (light == yellow) {
// // // // //     console.log("warning signal");
// // // // // }
// // // // // else {
// // // // //     console.log("Go");
// // // // // }

// // // // // let size = "l";
// // // // // if (size == "xl") {
// // // // //     console.log("Price :250rs");
// // // // // }
// // // // // else if (size == "l") {
// // // // //     console.log("Price :200rs");
// // // // // }
// // // // // else if (size == "m") {
// // // // //     console.log("Price :150rs");
// // // // // }
// // // // // else {
// // // // //     console.log("Price :100rs");
// // // // // }

// // // // // let str = "a good string!";
// // // // // if (str[0] == 'a') {
// // // // //     if (str.length > 3) {
// // // // //         console.log("It a good string!");
// // // // //     }
// // // // //     else {
// // // // //         console.log("It is not a good string!");
// // // // //     }
// // // // // }

// // // // // let day = 4;
// // // // // switch (day) {
// // // // //     case 1:
// // // // //         console.log("Monday!");
// // // // //         break;
// // // // //     case 2:
// // // // //         console.log("Tuesday!");
// // // // //         break;
// // // // //     case 3:
// // // // //         console.log("Wednesday!");
// // // // //         break;

// // // // //     case 4:
// // // // //         console.log("Thursday!");
// // // // //         break;
// // // // //     case 5:
// // // // //         console.log("Friday!");
// // // // //         break;
// // // // //     case 6:
// // // // //         console.log("Saturday!");
// // // // //         break;
// // // // //     case 7:
// // // // //         console.log("Sunday!");
// // // // //         break;
// // // // //     default :
// // // // //         console.log("Enter valid day!");
// // // // // }

// // // // let a = "Manish  ";
// // // // if (a == "") {
// // // //     console.log("It is empty string!");
// // // // }
// // // // else {
// // // //     console.log("It is not an empty string!");
// // // // }
// // // const arrayAverage = (arr) => {
// // //     let element = 0;
// // //     for (let i = 0; i < arr.length; i++) {
// // //         element += arr[i];
// // //     }


// // //     const average = element / arr.length;
// // //     console.log(average);
// // // };

// // // const isEven = (n) => {
// // //     if (n % 2 == 0) {
// // //         console.log(n, " is an even number.")
// // //     } else {
// // //         console.log(n, " is an odd number.")
// // //     }
// // // };

// // // const averageofspeacialarray = (arr) => {
// // //     let res = 1;
// // //     let sum = arr.reduce((res, el) => {
// // //         return res + el * el;
// // //     }, 0)
// // //     let average = sum / arr.length;
// // //     console.log(average);
// // // };

// // // let nums = [1, 5, 3, 5, 7, 3, "Hello", "nfdjn"];
// // // let array = nums.map((el) => {
// // //     el + 5;
// // //     el.toUpperCase();
// // //     return el;
// // // });
// // // let UParray = nums.filter((el) => typeof el == "string");
// // // console.log(array);

// // // function doubleAndReturnArgs(arr, ...args) {
// // //     const args ((el) => let array = [arr, ...args];    );
// // // };
// // let links = document.querySelectorAll(".box a");
// // for (let i = 0; i < links.length; i++) {
// //     links[i].style.color = "yellow";
// // }
// // for (link of links) {
// //     link.style.color = "green";
// // }

// // let p =document.createElement("p");
// // p.innerText ="Hey I'm red!";
// // document.querySelector("body").append(p);

// // p.classList.add("red");

// // let h =document.createElement('h3');
// // h.innerText= "Hey I'm a blue H3!";
// // h.classList.add("blue");
// // document.querySelector("body").append(h);

// // let div =document.createElement("div");
// // document.querySelector("body").append(div);
// // div.classList.add("box");

// // let h1 = document.createElement("h1");
// // let p1 = document.createElement("p");
// // h1.innerText="I'm inside a div";
// // p1.innerText="Me too!";
// // div.append(h1);
// // div.append(p1);

// // let btn=document.createElement("button");
// // document.querySelector("body").append(btn);

// // let input=document.createElement("input");
// // btn.innerText ="Click me";

// // btn.setAttribute("id","btn");
// // input.setAttribute("placeholder","username");
// // let button= document.querySelector("#btn");
// // button.classList.add("btnstyle");

// // let dom= document.createElement("h1");
// // dom.innerHTML="<u>DOM Pracitce</u>";
// // document.querySelector("body").append(dom);

// // let pe=document.createElement("p");
// // pe.innerHTML="ApnaCollege<b>Delta</b>Practice";
// // document.querySelector("body").append(pe);


// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let random = getrandomColor();
//     h3.innerText = random;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = random;

//     console.log("color updated:");
// })

// function getrandomColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     return `rgb(${red},${green},${blue})`;
// }

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//     console.log("key=", event.key);
//     console.log("Code=", event.code);
//     console.log("Key was pressed");
// })


// // for (btn of btns) {
// //     // btn.onclick = sayHello;
// //     // btn.onmouseenter = function () {
// //     //     console.log("you entered a button:");
// //     // };
// //     // btn.addEventListener("click",sayHello);
// //     // btn.addEventListener("click",sayName);
// //     btn.addEventListener("dblclick",function() {
// //         console.log("you double clicked the button:");
// //     });
// // }

// // function sayHello() {
// //     alert("Hello!");
// // }
// // function sayName() {
// //     alert("Manish");
// // }

// // js 11 callback hell

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve(`color changed! to ${color}`);
//         }, delay);
//     });
// }

// // changeColor("red", 1000)
// //     .then(() => {
// //     console.log("color changed:");
// //     changeColor("orange", 1000);
// //     })
// //     .then(() => {
// //         console.log("color changed:");
// //         changeColor("blue", 2000);
// //     })
// //     .then(() => {
// //         console.log("color changed:");
// //         changeColor("black", 3000);
// //     })
// //     .catch((err) => {
// //         console.log("error occured", err);
// //     });

// // js 12 async fn await keyword
// async function demo() {
//     await changeColor("orange", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("red", 1000);
//     await changeColor("black", 1000);
// }

// demo();

// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breed/pomeranian/images/random"

// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 =", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 =", data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR --", err);
//     });

// // async function getFacts() {
// //     try {
// //         let res = await fetch(url);
// //         let data = await res.json();
// //         console.log(data.fact);
// //     }
// //     catch(err){
// //         console.log("Error --",err);
// //     }
// //     console.log("bye");
// // }
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch (err) {
//         console.log("Error --", err);
//         return "No fact found";
//     }
// }


// let butn = document.querySelector(".butn");

// butn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// let b = document.querySelector(".dog");

// b.addEventListener("click", async () => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#imag");
//     img.setAttribute("src", link);
// });


// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch (err) {
//         console.log("Error --", err);
//         return "/";
//     }
// }

// async function getjokes() {
//     try{
//         const config = {Headers: {Accept:"application/json"} };
//         let res = await axios.get(url);
//         console.log(res.data);  
//     }catch(err){
//         console.log(err);
//     };
// }


let url = "http://universitiesf.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    getColleges(country);
})


async function getColleges(country) {
    try{
        let res = await axios.get(url+country);
        return res;
    }catch(err){
        console.log("Error : ",err);
        return [];
    }ls
}



