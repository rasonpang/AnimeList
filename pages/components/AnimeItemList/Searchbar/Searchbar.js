const Searchbar = ({searchFunction}) => {
    let searchTimer = null;

    const runSearchTimer = (value) => {
        clearTimeout(searchTimer)
        if (value !== "") {
            searchTimer = setTimeout(() => {
                // searchFunction(1, value)
                console.log(value)
            }, 1500)
        }
    }

    return (
        <input
            type="text"
            onChange={e => { runSearchTimer(e.target.value) }}
        />
    )
}

export default Searchbar