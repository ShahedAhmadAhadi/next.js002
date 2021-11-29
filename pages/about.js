import Footer from "../components/Footer"

function About() {
    return <h1>About Page</h1>
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