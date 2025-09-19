const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://mongodb:27017/my_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple schema and model
const PostSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model('Post', PostSchema);

app.get('/', (req, res) => {
  res.send('Hello from the Dockerized Node.js app!');
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
