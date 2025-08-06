import { useEffect } from "react";
import Tile from "../components/Tile";
import { SnakeTile } from "../components/Snake";
import checkCollision from "./deathLogic";
import checkEaten from "./checkEaten";

let intervalId = 0;
//cant move left for the first move
let lastInput = 1
let shouldGrow = false;
const processMovementInput = function (){
    //keycodes
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

function handleMovement(setSnakePosition, setTileGrid, moveValue, shouldGrowRef){
    setSnakePosition((prevPosition) =>{
        let newPosition = [...prevPosition];
        const removeIndex = newPosition[0];
        setTileGrid((prevGrid)=>{
            const newGrid = [...prevGrid];
            if (!shouldGrowRef.current){
                newGrid[removeIndex] = <Tile key={removeIndex} numberForDevPurposes={removeIndex}></Tile>;
            }
            newPosition.forEach((index) => {
                newGrid[index] = <SnakeTile key={index}></SnakeTile>;
            });
            return newGrid
        });
        if(!checkCollision(newPosition, 17)){
            clearInterval(intervalId);
            return newPosition;
        }
        if (!shouldGrowRef.current){
            newPosition = newPosition.slice(1,newPosition.length);
        }
        else{
            shouldGrowRef.current = false; 
        }
        newPosition.push(newPosition[newPosition.length - 1] + moveValue);
        return newPosition;
    });
}

function move(e, setSnakePosition, setTileGrid,shouldGrowRef){
    const moveValue = processMovementInput().movementKeyCode.get(e.keyCode);
    //intervalID is only 0 on first move
    if ((moveValue && moveValue !== -lastInput) &&
     (moveValue !== lastInput|| intervalId == 0)
    ){
        // handleMovement(setSnakePosition, setTileGrid, moveValue);
        // lastInput = moveValue;
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            handleMovement(setSnakePosition, setTileGrid, moveValue, shouldGrowRef);
            lastInput = moveValue;
        }, 150);
        
    }
}

function setShouldGrow(value){
    shouldGrow = value;
}


export {move, setShouldGrow};