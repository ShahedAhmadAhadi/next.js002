import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (<>
    {/* <Header /> */}
    <Navbar />
    <Component {...pageProps} />
    {/* <Footer /> */}
  </>)
}

export default MyApp
