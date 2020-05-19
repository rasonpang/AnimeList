"use strict";
exports.__esModule = true;
exports.AnimeListData = exports.AnimeData = void 0;
// OTHERS
var mobx_state_tree_1 = require("mobx-state-tree");
exports.AnimeData = mobx_state_tree_1.types.model({
    id: mobx_state_tree_1.types.number,
    title: mobx_state_tree_1.types.model({
        native: mobx_state_tree_1.types.maybeNull(mobx_state_tree_1.types.string),
        romaji: mobx_state_tree_1.types.maybeNull(mobx_state_tree_1.types.string),
        english: mobx_state_tree_1.types.maybeNull(mobx_state_tree_1.types.string)
    }),
    coverImage: mobx_state_tree_1.types.model({
        extraLarge: mobx_state_tree_1.types.string
    }),
    meanScore: mobx_state_tree_1.types.maybeNull(mobx_state_tree_1.types.number),
    popularity: mobx_state_tree_1.types.number,
    episodes: mobx_state_tree_1.types.maybeNull(mobx_state_tree_1.types.number),
    description: mobx_state_tree_1.types.maybeNull(mobx_state_tree_1.types.string)
});
var AnimeDataType = mobx_state_tree_1.types.array(exports.AnimeData);
exports.AnimeListData = mobx_state_tree_1.types
    .model({
    animeList: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.array(exports.AnimeData), []),
    currentPage: 1,
    lastPage: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.number, 1),
    search: mobx_state_tree_1.types.maybeNull(mobx_state_tree_1.types.string)
})
    .actions(function (self) { return ({
    setAnimeList: function (animeList) {
        self.animeList = mobx_state_tree_1.cast(animeList);
    },
    setSearch: function (search) {
        self.search = search;
    },
    setCurrentPage: function (page) {
        self.currentPage = page;
    },
    setLastPage: function (page) {
        self.lastPage = page;
    }
}); })
    .views(function (self) { return ({
    getAnimeList: function () {
        return self.animeList;
    },
    getSearch: function () {
        return self.search;
    },
    getCurrentPage: function () {
        return self.currentPage;
    },
    getLastPage: function () {
        return self.lastPage;
    }
}); });
