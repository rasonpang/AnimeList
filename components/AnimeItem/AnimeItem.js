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
            <img className={styles.cardBackground} src={extraLarge} />
            <div className={styles.detailContainer}>
                <div className={styles.detailWrapper}>

                    <h4 className={styles.cardTitle}>
                        {(title.english) ? title.english : title.romaji}
                    </h4>
                    <div className={styles.cardDetail}>
                        {/* GRID */}
                        <div className={styles.cardDetailWrapper}>
                            <div>Title</div>
                            <div
                                className={styles.cardDetailTitle}
                            >
                                {title.native}
                            </div>
                            
                            <div>Episodes</div>
                            <div>{episodes}</div>
                            
                            <div>Score</div>
                            <div>
                                {(meanScore + "% from " + popularity + " peoples")}
                            </div>
                            
                            <div>Description</div>
                            <div
                                className={styles.cardDetailDescription}
                            >
                                {description}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeItem