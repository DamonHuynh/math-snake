import styles from "../styles/Tile.module.css"

function Tile({numberForDevPurposes}){
    return (
        <div className={styles.regularTile}>{numberForDevPurposes}</div>
    )
}

export default Tile;