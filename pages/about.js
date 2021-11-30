import Footer from "../components/Footer"
import Head from 'next/head'

function About({user, password}) {
    return (
        <div>
            <Head>
                <title>About Page</title>
                <meta name="description" content="my About page" />
            </Head>
            <h1>About Page</h1>
            <h2>user-env = {process.env.DB_USER} password-env = {process.env.DB_PASSWORD}</h2>
            <h2>user-props = {user} password-props = {password}</h2>
            <h2>next-public-env = {process.env.NEXT_PUBLIC_NAME}</h2>
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

export async function getServerSideProps() {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    console.log('connect', user, password, process.env)

    return {
        props: {
        }
    }
}