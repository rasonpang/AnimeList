export interface AnimeDataInterface {
    id: number
    title: {
        native: (null | string)
        romaji: (null | string)
        english: (null | string)
    }
    coverImage: {
        extraLarge: string
    }
    meanScore: (null | number)
    popularity: number
    episodes: (null | number)
    description: (null | string)
}