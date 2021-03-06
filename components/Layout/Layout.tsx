import Head from "next/head"

const Layout = ({ children } : { children: React.ReactNode }) => {
    return (
        <div style={{ width: "100vw" }}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
            </Head>
            <div>
                { children }
            </div>
        </div>
    )
}

export default Layout