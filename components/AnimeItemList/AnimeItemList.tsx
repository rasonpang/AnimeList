// MODULE
import { observer } from "mobx-react"

// CSS
import styles from "./styles.module.css"

// COMPONENTS
import AnimeItem from "../AnimeItem/AnimeItem"

import { AnimeDataInterface } from "../../interfaces/AnimeData"

const AnimeItemList = ({ animeList, loading } : { animeList: Function, loading: boolean }) => {
    if ( loading ) {
        return (
            <div className={styles.fullcenter}>
                Loading...
            </div>
        )
    }
    else if ( animeList().length <= 0 ) {
        return (
            <div className={styles.fullcenter}>
                No result found.
            </div>
        )
    }
    else {
        return (
            <div className={styles.container}>
                {
                    animeList().map(
                        (animeData: AnimeDataInterface, index: number) =>
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