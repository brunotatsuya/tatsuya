import 'bootstrap/dist/css/bootstrap.css'

import '../public/Lato.css'
import '../public/Montserrat.css'
import '../styles/globals.css'

import { useEffect } from "react"

function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default App
