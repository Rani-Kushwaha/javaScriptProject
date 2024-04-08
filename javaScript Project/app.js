let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg_container = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

const resetGame = () =>{
    turnX = true;
    enabledBoxes();
    msg_container.classList.add("hide");
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnX = true; // turnX = true, turnY = false;

boxes.forEach((box) => {
    box.addEventListener ("click", () => {
        console.log("Button is clicked.");
        if(turnX){
            box.innerText = "O";
            turnX = false;
        }
        else{
            box.innerText ="X";
            turnX = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = ()=> {
    for(let pattern of winPatterns) {
            let position1 = boxes[pattern[0]].innerText;
            let position2 = boxes[pattern[1]].innerText;
            let position3 = boxes[pattern[2]].innerText;
        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 == position2 && position2 == position3) {
                setTimeout(function () {
                    console.log("winner" , position1);
                    showWinner(position1);
                }, 500);
            }
        }
    }
};

 
