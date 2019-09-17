const mongoose = require('mongoose');

const PostSchemas = mongoose.Schema({
    postTitle: {
        type: String,
        unique: true,
        required: true
    },
    postAvatar: {
        type: String,
        required: false
    },
    postAuthor: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    postFeature: {
        type: String,
        required: false
    },
    postTag: {
        type: String,
        required: true
    }
});

module.exports = PostSchema = mongoose.model('post', PostSchemas);