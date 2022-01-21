import { connectToDatabase } from '../../lib/mongodb'

export async function getLastBlogPosts() {
  try {
    let mongocli = await connectToDatabase();
    let db = mongocli.db;
    let posts = await db
      .collection('blog-posts')
      .find({})
      .sort({ published: -1 })
      .toArray();
    return {
      data: JSON.parse(JSON.stringify(posts)),
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