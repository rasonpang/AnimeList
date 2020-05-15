// COMPONENTS
import Layout from "../components/Layout/Layout"
import AnimeItemList from "../components/AnimeItemList/AnimeItemList"

// MODEL
import { AnimeListData } from "../models/Anime"
import { TestMobx } from "../models/Test"

const Home = () => {
    const animelistdata = AnimeListData.create()
    const testmobx = TestMobx.create()

    return (
        <Layout>
            <p>This is Home Page</p>
            <AnimeItemList />
            <button onClick={animelistdata.getAnimeList(1)}>Get Anime</button>
            <button onClick={animelistdata.checkAnimeList}>Check Anime</button>
            <p>
                {testmobx.checkStr()}
            </p>
            <button onClick={testmobx.changeStr()}>Change Mobx</button>
        </Layout>
    )
}

export default Home