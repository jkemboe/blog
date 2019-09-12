const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

//create post
router.post('/', (req, res) => {
    const {postTitle,postAvatar,postAuthor,postBody,postDate,postTag,postFeature} = req.body;
    const blogPost = new Post({
         postTitle,
         postAvatar,
         postAuthor,
         postBody,
         postTag,
         postFeature,
         postDate
    });
    blogPost.save()
})

//read all posts
router.get('/', (req, res) => {
    Post.find()
    .then(post => res.json(post))
});

//edit post
router.post('/update',async (req,res) => {
    const {postTitle,postBody} = req.body
    const filter = {postTitle}
    const update = {postBody}
    const posts = await Post.findOneAndUpdate(filter,update);
})

module.exports = router;