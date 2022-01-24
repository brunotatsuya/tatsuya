import Head from 'next/head'
import Navbar from '../../components/blog/navbar'
import Footer from '../../components/footer'

import { getLastBlogPosts } from '../api/getLastBlogPosts'
import { getBlogPostBySlug } from '../api/getBlogPostBySlug'

import Post from '../../components/blog/post'

export default function PostPage({post}) {

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{post.title} - tatsuya.blog</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Post post={post}></Post>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticPaths() {
  let res = await getLastBlogPosts();
  let posts = res.data;
  if (posts.success == false) {
    posts = [];
  }
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  let res = await getBlogPostBySlug(slug);

  return {
    props: {
      post: res.data
    },
  };
}