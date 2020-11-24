const db = require('../models');

//index route
const index = (req, res) => {
  db.Post.find({})
  .then((foundPost) => {
    res.json({posts: foundPosts})
  })
  .catch((err) => {
    console.log('Error on index.route', err);
    res.json({Error: 'Unable to retrieve data'})
  })
};

//show post
const show = (req, res) => {
  db.Post.findById(req.params.id)
  .then((foundPost) => {
    res.json({post: foundPost})
  })
  .catch((err) => {
    console.log('Error on show route', err)
    res.json({Error: 'Unable to retrieve data'})
  })
};

//post route
const create = (req, res) => {
  console.log(req.body)
  db.Post.create(req.body.post)
  .then((savedPost) => {
    res.json({post: savedPost})
  })
  .catch((err) => {
    console.log('Error on create route', err)
    res.json({Error: 'Unable to save data'})
  })
};

//post reply
const createReply = (req, res) => {
  db.Post.findByIdAndUpdate(req.params.id,
    {$push: {accounts: {"name": req.body.author, "text": req.body.text}}},{new: true, upsert: true })
  .then((savedPost) => {
    res.json({post: savedPost})
  })
  .catch((err) => {
    console.log('Error on create route', err)
    res.json({Error: 'Unable to save data'})
  })
}

//put route 
const update = (req, res) => {
  db.Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
  .then((updatedPost) => {
    res.json({post: updatedPost})
  })
  .catch((err) => {
    console.log('Error on update route', err)
    res.json({Error: 'Unable to update data'})
  })
};

//delete route
const destroy = (req, res) => {
  db.Post.findByIdAndDelete(req.params.id)
  .then((deletedPost) => {
    res.json({post: deletedPost})
  })
  .catch((err) => {
    console.log('Error on delete route', err)
    res.json({Error: 'Unable to delete data'})
  })
};

module.exports = {
  index,
  show,
  create,
  createReply,
  update,
  destroy
}