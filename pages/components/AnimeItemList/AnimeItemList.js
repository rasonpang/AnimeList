import AnimeItem from "./AnimeItem/AnimeItem"
import { AnimeListData, AnimeData } from "../../models/Anime"

const animelistdata = AnimeListData.create()

const AnimeItemList = () => {
    return (
        <div>
            <button onClick={animelistdata.getAnimeList(1)}>Click me to add</button>
            <button onClick={animelistdata.checkAnimeList}>Click me senpai</button>
            <AnimeItem />
        </div>
    )
}

export default AnimeItemList