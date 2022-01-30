import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../../components/footer'
import Navbar from '../../components/admin/navbar'
import PostsTable from '../../components/admin/posts-table'
import AuthGuard from '../../components/auth-guard'
import { getLastBlogPosts } from '../api/posts'

export default function Login(props) {

  const router = useRouter();

  const handleAddClick = () => {
    router.push({
      pathname: '/admin/create-post'
    });
  }

  return (
    <AuthGuard>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Admin | Bruno Tatsuya</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="min-vh-100 bg-light2">
        <div className="container mt-5 pt-5">
          <div className="container bg-white pt-4 pb-2 round-border">
            <div className="d-flex mx-3 mb-3">
              <h4>Manage blog posts</h4>
              <button className="btn btn-primary btn-sm ms-auto" onClick={handleAddClick}>Create post</button>
            </div>
            <hr />
            <PostsTable posts={props.posts}></PostsTable>
            <hr />
          </div>
        </div>

      </div>
      <Footer></Footer>
    </AuthGuard>
  )
}

// export async function getServerSideProps(context) {
//   var audit = AuthGuard(context);
//   if ('props' in audit) {
//     const posts = await getLastBlogPosts();
//     audit.props.posts = posts;
//   }
//   return audit
// }

export async function getStaticProps() {
  const posts = await getLastBlogPosts();
  return { props: { posts }, revalidate: 30 }
}