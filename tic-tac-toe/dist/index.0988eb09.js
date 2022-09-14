const board = document.querySelector(".game-container");
const button = document.querySelector(".button");
const winMessage = document.querySelector(".winner");
let turn = "X";
function main() {
    createBoard();
    listenBoard();
}
function listenBoard() {
    board.addEventListener("click", runGame);
}
function runGame(e) {
    //console.log(e,"The board was clicked");
    const boxId = e.target.id;
    console.log(boxId);
    if (boxId == null) return;
    const box = document.querySelector(`#${boxId}`);
    if (box === null || box.textContent !== "") return;
    box.textContent = turn;
    changeBoxColor(box);
    const winner = checkWinner();
    if (!winner) switchPlayer();
    else endGame();
}
function changeBoxColor(box) {
    if (turn === "X") box.classList.replace("box", "x");
    else box.classList.replace("box", "y");
}
function endGame() {
    board.removeEventListener("click", runGame);
    button.addEventListener("click", resetGame);
    if (winMessage === null) return;
    winMessage.textContent = `Winner is ${turn}`;
    winMessage.setAttribute("display", "block");
    button.style.visibility = "visible";
}
function resetGame() {
    turn = "X";
    resetBoxes();
    button.style.visibility = "hidden";
    winMessage.textContent = "";
    board.addEventListener("click", runGame);
}
function resetBoxes() {
    for(let i = 0; i <= 8; i++){
        const box = document.querySelector(`#box-${i}`);
        box.textContent = "";
        const boxClass = box.className;
        box.classList.remove(boxClass);
        box.offsetWidth;
        box.classList.add("box");
    }
}
function checkWinner() {
    const boxes = getBoxes();
    return boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] !== "" || boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] !== "" || boxes[6] === boxes[7] && boxes[7] === boxes[8] && boxes[6] !== "" || boxes[0] === boxes[4] && boxes[4] === boxes[8] && boxes[0] !== "" || boxes[2] === boxes[4] && boxes[4] === boxes[6] && boxes[2] !== "" || boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] !== "" || boxes[0] === boxes[3] && boxes[3] === boxes[6] && boxes[0] !== "" || boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] !== "";
}
function getBoxes() {
    const boxesContent = [];
    for(let i = 0; i < 9; i++){
        const box = document.querySelector(`#box-${i}`);
        const boxContent = box?.textContent;
        if (boxContent === null) boxesContent.push("");
        else boxesContent.push(boxContent);
    }
    return boxesContent;
}
function switchPlayer() {
    if (turn === "X") turn = "O";
    else turn = "X";
}
function createBoard() {
    for(let i = 0; i < 9; i++)makeBox(i);
}
function makeBox(i) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box-${i}`;
    box.textContent = "";
    board.append(box);
}
main();

//# sourceMappingURL=index.0988eb09.js.map
