import Tile from "./Tile"
// import handleMovement from "../util/handleMovement";
import move from "../util/handleMovement";
import { SnakeTile, Snake} from "./Snake";
import styles from "../styles/Gameboard.module.css"
import {useEffect, useState } from "react";

function Gameboard(){
    //17x17 grid
    const gridSize = 289;
    const grid = new Array(gridSize);
    for (let i = 0; i < grid.length; i++){
        grid[i] = i;
    }

    const [snakePosition, setSnakePosition] = useState([140,141])
    const [tileGrid, setTileGrid] = useState(()=> {
        for (let i = 0; i < grid.length; i++){
            grid[i] = <Tile key={i} numberForDevPurposes={i}></Tile>
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
    }, [snakePosition]);

    useEffect(()=>{
        window.addEventListener("keydown", (e)=>move(e,setSnakePosition, setTileGrid));
    },[]);


    return(
        <div className={styles.gameboard}>
            {tileGrid}
            <Snake
                setTileGrid={setTileGrid}
            />
        </div>
    )
}

export default Gameboard;