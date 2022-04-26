function isGameWon(input :string) {
    const last = input.split(" ").at(-1);
    if(!last) throw new Error("No last input");
    let gameResult = parseInt(last);
    return gameResult === 1 ? true : false;
}

// Gets the player id from the input string using a regex
function getPlayerId(input :string) :number {
    const regex = /Player: (\d) (\d)/g;
    const match = regex.exec(input);
    if(!match) throw new Error("No player id found");
    return parseInt(match[1]);
}

export { isGameWon, getPlayerId };