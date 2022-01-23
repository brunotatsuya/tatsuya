import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Index() {
	return (
		<div>
			<Head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<title>tatsuya</title>
				<link rel="shortcut icon" href="/images/favicon.ico" />
			</Head>
			<main>
				<Navbar></Navbar>
				<div className="h-100 bg-light2">Blog</div>
				<Footer></Footer>
			</main>
		</div>
	)
}
