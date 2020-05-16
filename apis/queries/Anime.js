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
    `,
    GET_ANIME_CHARACTER: gql`
        query {
            Media(id: 1) {
                characters {
                    nodes {
                        name {
                            first
                            last
                            full
                            native
                        }
                        image {
                            large
                            medium
                        }
                    }
                }
            }
        }
    `
}

export default ANIME_QUERIES