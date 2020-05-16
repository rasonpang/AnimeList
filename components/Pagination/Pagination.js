import { observer } from "mobx-react"

const Pagination = ({ refetch, currentPage, lastPage }) => {
    let changePageTimer = null

    const changePage = (value) => {
        clearTimeout(changePageTimer)
        changePageTimer = setTimeout(() => {
            const pageValue = (value === "") ? 1 : parseInt(value)
            refetch({page: pageValue})
        }, 1000)
    }

    return (
        <div>
            <input
                type="number"
                min="1"
                defaultValue={1}
                max={lastPage()}
                onChange={e => {
                    if (e.target.value < 1 && e.target.value !== "") {
                        e.target.value = 1
                    }
                    else if (e.target.value > lastPage()) {
                        e.target.value = lastPage()
                    }

                    if (e.target.value !== "") {
                        changePage(e.target.value)
                    }
                }}
                />
            <p> out of { lastPage() }</p>
        </div>
    )
}

export default observer(Pagination)