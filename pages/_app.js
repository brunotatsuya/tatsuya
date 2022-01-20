import 'bootstrap/dist/css/bootstrap.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import '../public/Lato.css'
import '../public/Montserrat.css'
import '../styles/globals.css'

import { useEffect } from "react"

function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    Aos.init({duration:1200});
  }, []);

  return <Component {...pageProps} />
}

export default App
