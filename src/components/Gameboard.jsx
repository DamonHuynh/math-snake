import Tile from "./Tile"
import styles from "../styles/Gameboard.module.css"

function Gameboard(){
    const gridSize = 256;
    const grid = new Array(gridSize);
    for (let i = 0; i < grid.length; i++){
        grid[i] = i;
    }
    const tileGrid = grid.map((tile) => {
        return <Tile key={tile}></Tile>
    });
    return(
        <div className={styles.gameboard}>
            {tileGrid}
        </div>
    )
}

export default Gameboard;