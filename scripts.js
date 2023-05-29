const compPick = Math.floor(Math.random() * 1000) + 1;
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

document.querySelector("#guess").addEventListener("click", function () {
    const userPick = document.querySelector("#text").value;
    console.log("userPick", userPick)
    if (userPick == compPick) {
        document.querySelector("#message").textContent = "Correct";
        didWin = true;
    } else if (userPick > compPick) {
        document.querySelector("#message").textContent = "Lower"
    } else if (userPick < compPick) {
        document.querySelector("#message").textContent = "Higher"
    }
});
