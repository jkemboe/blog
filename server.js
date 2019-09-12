const app = require('express')();
const path = require('path');

const port = process.env.PORT || 4000;

const posts = require('./routes/post');

  
app.get('/admin/home', (req, res) => {
  res.render('home');
});
 

app.use('/posts', posts);


app.listen(port, () => { 
  console.log(`Blog server running on port ${port}`);
});
