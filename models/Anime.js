// OTHERS
import { types, getSnapshot } from "mobx-state-tree"

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
    episodes: types.maybeNull(types.number)
})

export const AnimeListData = types
.model({
    animeList: types.optional(types.array(AnimeData), []),
    page: 1,
    lastPage: types.optional(types.number, 1),
    search: types.maybeNull(types.string)
})
.actions(self => ({
    setAnimeList(animeList) {
        self.animeList = animeList
    },
    clearAnimeList() {
        self.animeList = []
    },
    setPage(page) {
        self.page = page
    },
    setSearch(search) {
        self.search = search
    },
    setLastPage(page) {
        self.lastPage = page
    }
}))
.views(self => ({
    getAnimeList() {
        return self.animeList
    },
    getPage() {
        return self.page
    },
    getSearch() {
        return self.search
    },
    getLastPage() {
        return self.lastPage
    }
}))