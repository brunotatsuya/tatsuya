import { connectToDatabase } from '../../services/mongodb'
import { verifyJwt } from '../../services/auth'

export async function createBlogPost(post, passcode) {
    let mongocli = await connectToDatabase();
    let db = mongocli.db;
    let result = await db
        .collection('blog-posts')
        .insertOne(post);
    return post.slug;
}

export default async function handler(req, res) {
    // Restricts endpoint to only POST requests
    if (req.method !== 'POST') {
        res.status(405).send('Only POST requests are allowed');
        return;
    }

    // Checks if Jwt in cookies is valid
    const decodedResult = verifyJwt({ req });
    if (!decodedResult) {
        res.status(403).json({ success: false, message: 'This route is protected to admin.' });
        return;
    }

    // Gets parameters from request body
    const { passcode, ...post } = req.body;

    try {
        const insertedSlug = await createBlogPost(post, passcode);
        res.status(200).json({ success: true, message: insertedSlug });
        return;
    } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to save data: ' + error.message });
        return;
    }

}