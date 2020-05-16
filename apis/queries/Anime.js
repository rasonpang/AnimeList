import { gql } from "apollo-boost";

const ANIME_QUERIES = {
    GET_ANIME_LIST: gql`
        query ($page: Int, $search: String) {
            Page(page: $page, perPage: 3) {
                pageInfo {
                    currentPage,
                    lastPage
                }
                media(search: $search) {
                    id
                    title {
                        native
                        romaji
                        english
                    }
                    coverImage {
                        extraLarge
                    }
                    meanScore
                    popularity
                    episodes
                }
            }
        }
    `
}

export default ANIME_QUERIES