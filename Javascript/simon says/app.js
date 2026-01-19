// Todo list
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");

//     item.appendChild(delbtn);
//     ul.appendChild(item);
//     inp.value = "";
// })

// ul.addEventListener("click", function (event) {
//     if (event.target.nodeName == "BUTTON") {
//         let listitem = event.target.parentElement;
//         listitem.remove();
//         console.log("deleted");
//     }
// })


// // let delbtns =document.querySelectorAll(".delete");
// // for(delbtn of delbtns){
// //     delbtn.addEventListener("click", function(){
// //         let par=this.parentElement;
// //         console.log(par);
// //         par.remove();
// //     })
// // }



// Simon says Game

let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keydown", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelup();
    }
})


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}


function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 150);
}


function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}


function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to restart`;
        reset();
    }
}


function btnPressed() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPressed);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}