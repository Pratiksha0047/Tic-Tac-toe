let box1 = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn = true; //player1 player2
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetG = () => {
    let turn = true;
    enablebtn();
    msgCon.classList.add("hide");



}


reset.addEventListener("click", () => {
    console.log("btn click");
});

// box1.addEventListener("click", () => {
//     console.log("sdj");
// })

box1.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (turn) {
            btn.innerText = "O";
            turn = false;

        } else {
            btn.innerText = "X";
            turn = true;
        }
        btn.disabled = true;

        checkWinner();
    });
});


const disabledbtn = () => {
    for (let box of box1) {
        box.disabled = true;
    }
};

const enablebtn = () => {
    for (let box of box1) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWninner = (winner) => {
    msg.innerText = `Congratulation , winner is ${winner}`;
    msgCon.classList.remove("hide");
    disabledbtn();

}

const checkWinner = () => {
    for (let patt of winPattern) {


        let pos1val = box1[patt[0]].innerText;
        let pos2val = box1[patt[1]].innerText;
        let pos3val = box1[patt[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("winner! " + pos1val);

                showWninner(pos1val);

            }
        }
    }
};

newbtn.addEventListener("click", resetG);
reset.addEventListener("click", resetG);



