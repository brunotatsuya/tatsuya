import { connectToDatabase } from '../../services/mongodb'

export async function createBlogPost(post, passcode) {
    // Temporary: Check if passcode is valid
    if (passcode != process.env.PASSCODE) {
        throw new Error('Invalid passcode');
    }

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
    }

    // Gets parameters from request body
    const { passcode, ...post } = req.body;

    try {
        const insertedSlug = await createBlogPost(post, passcode);
        res.status(200).json({ success: true, message: insertedSlug });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to save data: ' + error.message });
    }

}