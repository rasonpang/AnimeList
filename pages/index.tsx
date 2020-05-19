// API
import { useQuery } from "@apollo/react-hooks"
import ANIME_QUERIES from "../apis/queries/Anime"

// COMPONENTS
import Link from "next/link"
import Layout from "../components/Layout/Layout"
import AnimeItemList from "../components/AnimeItemList/AnimeItemList"
import Pagination from "../components/Pagination/Pagination"
import Searchbar from "../components/Searchbar/Searchbar"

// MODEL
import { AnimeListData } from "../models/Anime"

const Home = () => {

    const animelistdata = AnimeListData.create()

    // RUN T
    const {loading, data, refetch} = useQuery(
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
            <div style={{
                width: "100%",
                textAlign: "center"
            }}>
                <Searchbar
                    refetch={refetch}
                    setSearch={animelistdata.setSearch}
                />
                <Pagination
                    refetch={refetch}
                    lastPage={animelistdata.getLastPage}
                />
            </div>
            <AnimeItemList
                loading={loading}
                animeList={animelistdata.getAnimeList}
            />
        </Layout>
    )
}

export default Home