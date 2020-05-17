// MODULE
import { observer } from "mobx-react"

// CSS
import styles from "./styles.module.css"

// COMPONENTS
import AnimeItem from "../AnimeItem/AnimeItem"

const AnimeItemList = ({ animeList, loading }) => {
    if ( loading ) {
        return <div className={styles.fullcenter}>Loading...</div>
    }
    else if ( animeList().length <= 0 ) {
        return <div className={styles.fullcenter}>No result found.</div>
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