import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../styles/layout.css'
import '../components/Navbar.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (<>
    {/* <Header /> */}
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
    {/* <Footer /> */}
  </>)
}

export default MyApp
