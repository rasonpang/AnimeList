import Link from "next/link"
import styles from "./styles.module.css"

const AnimeItem = ({ animeData }) => {
    
    const {
        id,
        coverImage: { extraLarge },
        title,
        episodes,
        meanScore,
        popularity,
        description
    } = animeData

    return (
        <div className={styles.card}>

            {/* CARD IMAGE */}

            <img className={styles.cardBackground} src={extraLarge} />

            <div className={styles.detailContainer}>
                <div className={styles.detailWrapper}>

                    <h4 className={styles.cardTitle}>
                        {(title.english) ? title.english : title.romaji}
                    </h4>

                    {/* CARD EXTRA DETAILS (:HOVER) */}

                    <div className={styles.cardDetail}>
                        <div className={styles.cardDetailWrapper}>

                            <div>Title</div>
                            <div className={styles.cardDetailTitle}>
                                {(title.native) ? (title.native) : "No data listed."}
                            </div>
                            
                            <div>Episodes</div>
                            <div>{(episodes) ? (episodes) : "No data listed."}</div>
                            
                            <div>Score</div>
                            <div>
                                {(meanScore && popularity) ? (meanScore + "% from " + popularity + " peoples") : "No data listed."}
                            </div>
                            
                            <div>Description</div>
                            <div className={styles.cardDetailDescription}>
                                {(description) ? (description) : "No data listed."}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeItem