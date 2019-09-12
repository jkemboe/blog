const app = require('express')();
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');

const port = process.env.PORT || 4000;

connectDB();
app.use(cors());
// app.use(app.json({extended:false}));  

app.get('/admin/home', (req, res) => {
  res.render('home');
});
 

app.use('/posts', require('./routes/post'));


app.listen(port, () => { 
  console.log(`Blog server running on port ${port}`);
});
