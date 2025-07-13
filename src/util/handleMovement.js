const processMovementInput = function (){
    const w = 87;
    const a = 65;
    const s = 83;
    const d = 68;

    const upArrow = 38;
    const leftArrow = 37;
    const downArrow = 40;
    const rightArrow = 39;

    const movementKeyCode = new Map([
        [w, "up"],
        [a, "left"],
        [s, "down"],
        [d, "right"],
        [upArrow, "up"],
        [leftArrow, "left"],
        [downArrow, "down"],
        [rightArrow, "right"]
    ]);
    return {movementKeyCode};
}

function handleMovement(e){
    console.log(processMovementInput().movementKeyCode.get(e.keyCode));
}

export default handleMovement;