import PostModel from './post.model';
import Post from './post.interface';

class PostService {
    private post = PostModel;

    /**
     * Create a new post
     */

    public async create(title: string, body: string): Promise<Post> {
        try {
            const post = await this.post.create({ title, body });

            return post;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }

    public async find(): Promise<Post[]> {
        try {
            const posts = await this.post.find({});

            return posts;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }
}

export default PostService;
