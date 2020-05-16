const Searchbar = ({refetch, setSearch}) => {
    let changePageTimer = null

    const changePage = value => {
        clearTimeout(changePageTimer)
        changePageTimer = setTimeout(() => {
            const newSearch = (value === "") ? null : value
            refetch({
                page: 1,
                search: newSearch
            })
            setSearch(newSearch)
        }, 1000)
    }
    return (
        <input type="text" onChange={e => { changePage(e.target.value) }} />
    )
}

export default Searchbar