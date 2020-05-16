import AnimeItem from "../AnimeItem/AnimeItem"
import { observer } from "mobx-react"

const AnimeItemList = ({ animeList }) => {
    if ( animeList().length <= 0 ) {
        return <div>No result found.</div>
    }
    else {
        return (
            animeList().map((animeData, index) => <AnimeItem key={index} animeData={animeData} />)
        )
    }
}

export default observer(AnimeItemList)