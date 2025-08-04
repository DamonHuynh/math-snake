import { useState } from "react";
import styles from "../styles/Snake.module.css"
import Tile from "./Tile.jsx"


function SnakeTile(){
    return (
        <div className={styles.snakeTile}></div>
    )
}

export {SnakeTile};