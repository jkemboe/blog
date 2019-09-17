const express = require('express');
const router = express.Router();
const app = express()
const multer = require('multer');
const upload = multer({dest:'./uploads'});
const path = require('path');
const fs = require('fs');
const Post = require('../models/Post');

router.post('/',upload.single('img'),(req,res) => {
    const {postTitle,postAuthor,postBody,postTag,postFeature,postAvatar} = req.body;
    const blogPost = new Post({
        postTitle,
        postAuthor,
        postAvatar,
        postBody,
        postTag,
        postFeature,
    });
    blogPost.save();
})

//read all posts
router.get('/', (req, res) => {
    Post.find()
    .then(post => {
            res.json(post)
    })
});

//edit post
router.post('/update',async (req,res) => {
    const {postTitle,postBody} = req.body
    const filter = {postTitle}
    const update = {postBody}
    const posts = await Post.findOneAndUpdate(filter,update);
})

module.exports = router;