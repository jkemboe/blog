const express = require('express');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const multer = require('multer');
const port = 5500;


mongoose.connect('mongodb+srv://jkemboe:commandme007!@~@blogsite-fbmir.mongodb.net/test?retryWrites=true&w=majority',() => console.log('connected to db'));

let item = new schema ({
     img: {
        data: Buffer, contentType: String
    }
});

let Item = mongoose.model('image', item);
 
app.use(multar({dest: './uploads/', 
    rename: function(fieldame,filename){
        return filename;
}}))

app.post('/api/photo', (req,res) => {
    let newItem = new Item()
    newItem.img.data = fs.readFileSync(req.files.userPhoto.path);
    newItem.img.contentType = 'image/png';
    newItem.save();
})

app.listen(port)