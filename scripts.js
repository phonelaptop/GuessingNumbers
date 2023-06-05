let compPick = Math.floor(Math.random() * 1000) + 1;
console.log(compPick)

let didWin = false;

// if (question === compPick) {
//     document.querySelector("#message").textContent = "Correct";
//     didWin = true;
// } else if (question > compPick) {
//     document.querySelector("#message").textContent = "Lower"
// } else if (question < compPick) {
//     document.querySelector("#message").textContent = "Higher"
// }
let tries = 10;

const resetGame = function () {
    didwin = false;
    tries = 10;
    compPick = Math.floor(Math.random() * 1000) + 1;
    console.log(compPick)
    document.querySelector("#message").textContent = "You Lost";
    document.querySelector("#win").textContent = tries + " tries left"
}

const playGame = function () {
    const userPick = document.querySelector("#text").value;
    console.log("userPick", userPick)
    if (userPick == compPick) {
        document.querySelector("#message").textContent = "Correct";
        didWin = true;
        tries -= 1
    } else if (userPick > compPick) {
        document.querySelector("#message").textContent = "Lower"
        tries -= 1
        document.querySelector("#win").textContent = tries + " tries left"
    } else if (userPick < compPick) {
        document.querySelector("#message").textContent = "Higher"
        tries -= 1
        document.querySelector("#win").textContent = tries + " tries left"
    }

    if (tries <= 0) {
        resetGame();
    }
}


document.querySelector("#guess").addEventListener("click", playGame);


document.querySelector("#reset").addEventListener("click", resetGame);