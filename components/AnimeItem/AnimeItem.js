import Link from "next/link"

const AnimeItem = ({ animeData }) => {
    
    const {
        id,
        coverImage: { extraLarge },
        title,
        episodes,
        meanScore,
        popularity
    } = animeData

    return (
        <Link href="#">
            <div>
                <img src={extraLarge} />
                <div>
                    {/* Sticky English Title */}
                    <h4>{title.english}</h4>
                    <div>
                        <div>{title.native} ({title.romaji})</div>
                        <div>has {episodes} episodes</div>
                        <div>total {meanScore}% from {popularity} peoples</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AnimeItem