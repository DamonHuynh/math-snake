import { useState } from "react";
import styles from "../styles/Snake.module.css"
import Tile from "./Tile.jsx"


function Snake({setTileGrid}){
    // setTileGrid((prevGrid)=>{
    //     prevGrid[10] = <SnakeTile></SnakeTile>
    //     prevGrid[11] = <SnakeTile></SnakeTile>
    //     prevGrid[10] = <SnakeTile></SnakeTile>

    // })
    return(
        <>
        </>
    )

}

function SnakeTile(){
    return (
        <div className={styles.snakeTile}></div>
    )
}

export {Snake, SnakeTile};