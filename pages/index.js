import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PresentationCard from '../components/index/presentation-card'
import About from '../components/index/about'
import Blog from '../components/index/blog'

import { getLastBlogPosts } from './api/getLastBlogPosts'

export default function Index(props) {
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
				<PresentationCard></PresentationCard>
				<About></About>
				<Blog posts={props.posts}></Blog>
				<Footer></Footer>
			</main>
		</div>
	)
}

export async function getStaticProps() {
	let res = await getLastBlogPosts();
	let posts = res.data;
	if (posts.success == false){
		posts = [];
	}
	return { props: { posts }, revalidate: 3600 }
  }