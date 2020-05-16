import { useEffect } from "react"

// API
import { useQuery } from "@apollo/react-hooks"
import ANIME_QUERIES from "../apis/queries/Anime"

// COMPONENTS
import Layout from "../components/Layout/Layout"
import AnimeItemList from "../components/AnimeItemList/AnimeItemList"
import Pagination from "../components/Pagination/Pagination"
import Searchbar from "../components/Searchbar/Searchbar"

// MODEL
import { AnimeListData } from "../models/Anime"

const Home = () => {

    const animelistdata = AnimeListData.create()

    const {loading, error, data, refetch} = useQuery(
        ANIME_QUERIES.GET_ANIME_LIST,
        {
            variables: {
                page: 1,
                search: null
            }
        }
    )

    if (data) {
        const {
            Page: {
                media, pageInfo
            }            
        } = data
        animelistdata.setAnimeList(media)
        animelistdata.setLastPage(pageInfo.lastPage)
    }
    
    return (
        <Layout>
            <Searchbar refetch={refetch} setSearch={animelistdata.setSearch} />
            <Pagination
                refetch={refetch}
                currentPage={animelistdata.getCurrentPage}
                lastPage={animelistdata.getLastPage}
            />
            <AnimeItemList animeList={animelistdata.getAnimeList} />
        </Layout>
    )
}

export default Home