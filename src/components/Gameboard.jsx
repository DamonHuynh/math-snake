import Tile from "./Tile"
import handleMovement from "../util/handleMovement";
import { SnakeTile, Snake} from "./Snake";
import styles from "../styles/Gameboard.module.css"
import { useEffect, useState } from "react";

function Gameboard(){
    //17x17 grid
    const gridSize = 289;
    const grid = new Array(gridSize);
    for (let i = 0; i < grid.length; i++){
        grid[i] = i;
    }

    const [tileGrid, setTileGrid] = useState(()=> {
        for (let i = 0; i < grid.length; i++){
            grid[i] = <Tile key={i}></Tile>
        }
        const snakeStartingPosition = [138, 139, 140, 141];
        snakeStartingPosition.forEach((index)=>{
            grid[index] = <SnakeTile key={index}></SnakeTile>
        });
        return grid;
    });

    useEffect(()=>{
        window.addEventListener("keydown", handleMovement);
    },[])


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