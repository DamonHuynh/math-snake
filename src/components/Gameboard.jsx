import Tile from "./Tile"
// import handleMovement from "../util/handleMovement";
import {move, setShouldGrow} from "../util/handleMovement";
import { SnakeTile} from "./Snake";
import styles from "../styles/Gameboard.module.css"
import {useEffect, useState } from "react";
import Food from "./Food";
import checkEaten from "../util/checkEaten";
import { useRef } from "react";

function Gameboard(){
    //17x17 grid
    const gridDimensions = 17;
    const gridSize = gridDimensions * gridDimensions;
    const grid = new Array(gridSize);
    for (let i = 0; i < grid.length; i++){
        grid[i] = i;
    }

    const [snakePosition, setSnakePosition] = useState([140,141,142,143])
    const [foodPosition, setFoodPosition] = useState(147);
    const [tileGrid, setTileGrid] = useState(()=> {
        for (let i = 0; i < grid.length; i++){
            if (i == foodPosition){
                grid[i] = <Food key={i}></Food>;
                continue;
            }
            grid[i] = <Tile key={i} numberForDevPurposes={i}></Tile>;
        }
        return grid;
    });

    useEffect(()=>{
        setTileGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            snakePosition.forEach((index) => {
                newGrid[index] = <SnakeTile key={index}></SnakeTile>
            })
            return newGrid;
        })
    }, []);
    const shouldGrowRef = useRef(false);
    const eaten = checkEaten(snakePosition[snakePosition.length - 1],foodPosition);
    const moveCallback = (e) => move(e,setSnakePosition, setTileGrid, shouldGrowRef);

    useEffect(()=>{
        window.addEventListener("keydown", moveCallback);
        return () =>{
            window.removeEventListener("keydown", moveCallback);
        } 
    },[]);

    useEffect(() => {
        setTileGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            newGrid[foodPosition] = <Food key={foodPosition}/>;
            let tail = snakePosition[0];
            console.log(tail);
            return newGrid;
        })
    }, [foodPosition])
    if (eaten){
        shouldGrowRef.current = true;
        setFoodPosition(()=>{
            let counter = 0;
            const allowedSpaces = new Array(gridSize - snakePosition.length);
            for (let i = 0; i < gridSize; i++){
                if (!snakePosition.includes(i)){
                    allowedSpaces[i - counter] = i;
                }
                else{
                    counter++;
                }
            }
            let randomNumber = Math.floor(Math.random() * allowedSpaces.length);
            return allowedSpaces[randomNumber];
        })
    }


    return(
        <div className={styles.gameboard}>
            {tileGrid}
        </div>
    )
}

export {Gameboard};