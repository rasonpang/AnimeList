import { observer } from "mobx-react"
import styles from "./styles.module.css"

const Pagination = ({ refetch, lastPage }) => {
    let changePageTimer = null

    const changePage = (value) => {
        clearTimeout(changePageTimer)
        changePageTimer = setTimeout(() => {
            const pageValue = (value === "") ? 1 : parseInt(value)
            refetch({page: pageValue})
        }, 1000)
    }

    return (
        <div id={styles.container}>
            <input
                id={styles.input}
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
            <p id={styles.page}> out of { lastPage() }</p>
        </div>
    )
}

export default observer(Pagination)