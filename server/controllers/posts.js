import Post from '../models/posts.js';

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);

    await post.save();

    res.status(201).json({ status: 'success', post });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

export const updatePost = async (req, res) => {
  try {
    // This needs some validation and filtering
    const post = await Post.findById({ _id: req.params.id });
    Object.keys(req.body).forEach(option => (post[option] = req.body[option]));
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ success: false, error });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id });
    res.status(200).json('Post was deleted');
  } catch (error) {
    res.status(404).json({ success: false, error });
  }
};
