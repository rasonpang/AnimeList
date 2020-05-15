import AnimeItem from "./AnimeItem/AnimeItem"
import { AnimeListData, AnimeData } from "../../models/Anime"
import Searchbar from "./Searchbar/Searchbar"
import Pagination from "./Pagination/Pagination"

const animelistdata = AnimeListData.create()

const AnimeItemList = () => {
    return (
        <div>
            <Searchbar searchFunction={animelistdata.getAnimeList} />
            <div>
                Item Shows Here
            </div>
            <Pagination />
            <button onClick={animelistdata.getAnimeList(1, "Boku")}>Get Data</button>
            <button onClick={animelistdata.checkAnimeList}>Check Data</button>
        </div>
    )
}

export default AnimeItemList