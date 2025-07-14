import Tile from "../components/Tile";

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
        //Numbers corresspond to grid value
        [w, -17],
        [a, -1],
        [s, 17],
        [d, 1],
        [upArrow, -17],
        [leftArrow, -1],
        [downArrow, 17],
        [rightArrow, 1]
    ]);
    return {movementKeyCode};
}

function handleMovement(e, setSnakePosition, setTileGrid){
    const moveValue = processMovementInput().movementKeyCode.get(e.keyCode);
    setSnakePosition((prevPosition) =>{
        let newPosition = [...prevPosition];
        const removeIndex = newPosition[0];
        setTileGrid((prevGrid)=>{
            const newGrid = [...prevGrid];
            newGrid[removeIndex] = <Tile key={removeIndex} numberForDevPurposes={removeIndex}></Tile>
            return newGrid
        })
        newPosition = newPosition.slice(1,newPosition.length);
        newPosition.push(newPosition[newPosition.length - 1] + moveValue);
        console.log(newPosition);
        return newPosition;
    });
}

export default handleMovement;