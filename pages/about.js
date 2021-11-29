import Footer from "../components/Footer"
import Head from 'next/head'

function About() {
    return (
        <div>
            <Head>
                <title>About Page</title>
                <meta name="description" content="my About page" />
            </Head>
            <h1>About Page</h1>

        </div>
    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}