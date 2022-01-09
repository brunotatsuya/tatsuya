import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
	return (
		<div>
			<Head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<title>tatsuya</title>
				<link rel="shortcut icon" href="/images/favicon.ico" />
			</Head>
			<Navbar></Navbar>
			<div>
				<h1>Hello world</h1>
			</div>
		</div>
	)
}
