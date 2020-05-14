import { gql } from "apollo-boost";

const ANIME_QUERIES = {
    GET_ANIME_LIST: (page, search = null) => gql`
        query {
            Page(page: ${page}, perPage: 3) {
                media(search: ${(search === "") ? null : search}) {
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
}

export default ANIME_QUERIES