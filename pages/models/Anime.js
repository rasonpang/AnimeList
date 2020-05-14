// API
import ANIME_QUERIES from "../apis/queries/Anime"

// OTHERS
import { types, getSnapshot } from "mobx-state-tree"
import { useQuery } from "@apollo/react-hooks"

export const AnimeData = types.model({
    id: types.number,
    title: types.model({
        native: types.maybeNull(types.string),
        romaji: types.maybeNull(types.string),
        english: types.maybeNull(types.string)
    }),
    coverImage: types.model({
        extraLarge: types.string
    }),
    meanScore: types.number,
    popularity: types.number,
    episodes: types.number
})

export const AnimeListData = types
.model({
    AnimeData: types.optional(types.array(AnimeData), [])
})
.actions(self => ({
    getAnimeList(page) {
        const {loading, error, data} = useQuery(ANIME_QUERIES.GET_ANIME_LIST(page))
        if (data) {
            self.AnimeData = []
            data.Page.media.map(anime => {
                self.AnimeData.push(anime)
            })
        }
    },
    checkAnimeList() {
        console.log(getSnapshot(self.AnimeData))
    }
}))