import Head from 'next/head'
import Navbar from '../../components/blog/navbar'
import Footer from '../../components/footer'

import PostCards from '../../components/blog/post-cards'
import { getLastBlogPosts } from '../api/getLastBlogPosts'

export default function Index(props) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>tatsuya.blog</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
        <div className="min-vh-100 container mt-5 pt-5 w-90">
        <PostCards posts={props.posts}></PostCards>
        </div>
        <Footer></Footer>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  let res = await getLastBlogPosts();
  let posts = res.data;
  if (posts.success == false) {
    posts = [];
  }
  return { props: { posts }, revalidate: 3600 }
}