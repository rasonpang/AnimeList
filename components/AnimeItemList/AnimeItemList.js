import AnimeItem from "../AnimeItem/AnimeItem"

const AnimeItemList = ({AnimeCollection}) => {
    if (!AnimeCollection || AnimeCollection.length <= 0) {
        return (<div>No result found.</div>)
    }
    else {
        return (
            <div>
                {
                    AnimeCollection.map(data => {
                        return <AnimeItemList data={data} />
                    })
                }
            </div>
        )
    }
}

export default AnimeItemList