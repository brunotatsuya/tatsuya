import Head from 'next/head'
import Navbar from '../components/index/navbar'
import PresentationCard from '../components/index/presentation-card'
import About from '../components/index/about'
import BlogPresentation from '../components/index/blog-presentation'
import Contact from '../components/index/contact'
import Footer from '../components/footer'

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
        <BlogPresentation posts={props.posts}></BlogPresentation>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  let res = await getLastBlogPosts(3);
  let posts = res.data;
  if (posts.success == false) {
    posts = [];
  }
  return { props: { posts }, revalidate: 3600 }
}