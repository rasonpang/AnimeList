const Searchbar = ({searchFunction}) => {
    return (
        <input type="text" onChange={e => { searchFunction }} />
    )
}

export default Searchbar