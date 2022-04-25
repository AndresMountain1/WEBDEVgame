function isGameWon(input :string) {
    const last = input.split(" ").at(-1);
    if(!last) throw new Error("No last input");
    let gameResult = parseInt(last);
    return gameResult === 1 ? true : false;
}

let str = "score: [88.0, 126.0]\n action: move 2 0 0\n Final:  1\n";
let res = isGameWon(str);
console.log(res);