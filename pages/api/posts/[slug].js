import { connectToDatabase } from '../../../services/mongodb'
import { verifyJwt } from '../../../services/auth'

export async function getBlogPostBySlug(slug) {
    const mongocli = await connectToDatabase();
    let db = mongocli.db;
    let post = await db
        .collection('blog-posts')
        .findOne({ slug: slug }, { projection: {
            _id: false,
            slug: true,
            author: true,
            title: true,
            content: true,
            coverImgurl: true,
            description: true,
            datePublished: true,
            isPublished: true
          }});
    return post;
}

export async function deleteBlogPostBySlug(slug) {
    let db = mongocli.db;
    let result = await db
        .collection('blog-posts')
        .deleteOne({ slug: slug });
    if (!result.deletedCount) {
        return {
            success: false,
            message: 'Unable to delete document.'
        }
    } else {
        return {
            success: true,
            message: 'Deleted successfully.'
        }
    };
}

export default async function handler(req, res) {
    // Restricts endpoint to only DELETE requests
    if (req.method !== 'DELETE') {
        res.status(405).send('Only DELETE requests are allowed');
        return;
    }

    // Checks if Jwt in cookies is valid
    const decodedResult = verifyJwt({req});
    if (!decodedResult) {
        res.status(403).json({ success: false, message: 'This route is protected to admin.' });
        return;
    }

    const { slug } = req.query

    const deletionResult = await deleteBlogPostBySlug(slug);

    if (deletionResult.success) {
        res.status(200).json(deletionResult);
        return;
    } else {
        res.status(400).json(deletionResult);
        return;
    }

}