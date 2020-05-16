// MODULE
import { observer } from "mobx-react"

// CSS
import styles from "./styles.module.css"

// COMPONENTS
import AnimeItem from "../AnimeItem/AnimeItem"

const AnimeItemList = ({ animeList }) => {
    if ( animeList().length <= 0 ) {
        return <div>No result found.</div>
    }
    else {
        return (
            <div className={styles.container}>
                {
                    animeList().map(
                        (animeData, index) =>
                        <AnimeItem
                            key={index}
                            animeData={animeData}
                        />
                    )
                }
            </div>
        )
    }
}

export default observer(AnimeItemList)