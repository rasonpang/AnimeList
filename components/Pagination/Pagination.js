import { observer } from "mobx-react"

const Pagination = ({ setPage, lastPage }) => {
    let changePageTimer = null
    const changePage = e => {
        clearTimeout(changePageTimer)
        changePageTimer = setTimeout(() => {
            const pageValue = (e.target.value === "") ? 1 : parseInt(e.target.value)
            setPage({page: pageValue})
        }, 1000)
    }
    return (
        <div>
            <input type="number" min="1" max={lastPage()} onChange={changePage} />
            <p> out of { lastPage() }</p>
        </div>
        
    )
}

export default observer(Pagination)