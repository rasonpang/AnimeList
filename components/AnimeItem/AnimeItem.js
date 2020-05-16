import Link from "next/link"
import styles from "./styles.module.css"

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

    return (
        <div className={styles.card}>
            {/* IMAGE CONTAINER */}
            <div>
                <img src={extraLarge} />
            </div>

            {/* DETAIL CONTAINER */}
            <div>
                
            </div>
        </div>
    )
}

export default AnimeItem