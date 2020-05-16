import { observer } from "mobx-react"

const Pagination = ({ setPage, lastPage }) => {
    let changePageTimer = null

    const changePage = value => {
        clearTimeout(changePageTimer)
        changePageTimer = setTimeout(() => {
            const pageValue = (value === "") ? 1 : parseInt(value)
            setPage({page: pageValue})
        }, 1000)
    }

    return (
        <div>
            <input type="number" min="1" max={lastPage()} onChange={e => { changePage(e.target.value) }} />
            <p> out of { lastPage() }</p>
        </div>
    )
}

export default observer(Pagination)