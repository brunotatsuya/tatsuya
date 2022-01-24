import { connectToDatabase } from '../../lib/mongodb'

export async function getBlogPostBySlug(slug) {
  try {
    let mongocli = await connectToDatabase();
    let db = mongocli.db;
    let post = await db
      .collection('blog-posts')
      .findOne({ slug: slug });
    return {
      data: JSON.parse(JSON.stringify(post)),
      success: true,
    };
  } catch (error) {
    return {
      data: new Error(error).message,
      success: false,
    };
  }
}

export default async function handler(req, res) {

  const jsonData = await getLastBlogPosts();
  if (jsonData.success == true) {
    res.status(200).json(jsonData);
  } else {
    res.status(400).send({ error: 'failed to fetch data' + jsonData.message });
  }
}