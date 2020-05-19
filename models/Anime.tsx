// OTHERS
import { types, getSnapshot, cast } from "mobx-state-tree"

import { AnimeDataInterface } from "../interfaces/AnimeData"

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
    meanScore: types.maybeNull(types.number),
    popularity: types.number,
    episodes: types.maybeNull(types.number),
    description: types.maybeNull(types.string)
})

const AnimeDataType = types.array(AnimeData)

export const AnimeListData = types
.model({
    animeList: types.optional(types.array(AnimeData), []),
    currentPage: 1,
    lastPage: types.optional(types.number, 1),
    search: types.maybeNull(types.string)
})
.actions(self => ({
    setAnimeList(animeList: Array<AnimeDataInterface>) {
        self.animeList = cast(animeList)
    },
    setSearch(search: string) {
        self.search = search
    },
    setCurrentPage(page: number) {
        self.currentPage = page
    },
    setLastPage(page: number) {
        self.lastPage = page
    }
}))
.views(self => ({
    getAnimeList() {
        return self.animeList
    },
    getSearch() {
        return self.search
    },
    getCurrentPage() {
        return self.currentPage
    },
    getLastPage() {
        return self.lastPage
    }
}))