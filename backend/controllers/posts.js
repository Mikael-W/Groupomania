const Post = require('../models/post')
const fs = require('fs')

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.sauce)
  delete postObject._id
  const sauce = new Sauce({
    ...postObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0
  })
  sauce.save()
    .then(() => res.status(201).json({ message: 'Post publié !' }))
    .catch(error => res.status(400).json({ error }))
}

exports.modifyPost = (req, res, next) => {
  const sauceObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      }
    : { ...req.body }
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post modifié !' }))
    .catch(error => res.status(400).json({ error }))
}

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/images')[1]
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Post supprimé !' }))
          .catch(error => res.status(400).json({ error }))
      })
    })
    .catch(error => res.status(500).json({ error }))
}

exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      res.status(200).json(post)
    })
    .catch(error => res.status(404).json({ error }))
}

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}

exports.likePost = (req, res, next) => {
  const userId = req.body.userId
  const like = req.body.like
  const postId = req.params.id
  Post.findOne({ _id: postId })
    .then(post => {
      // New value modification
      const newValues = {
        usersLiked: post.usersLiked,
        likes: 0,
      }
      // In case :
      switch (like) {
        case 1: // sauce liked
          newValues.usersLiked.push(userId)
          break
        case -1: // sauce disliked
          newValues.usersDisliked.push(userId)
          break
        case 0: // delete like/dislike
          if (newValues.usersLiked.includes(userId)) {
            // delete like
            const index = newValues.usersLiked.indexOf(userId)
            newValues.usersLiked.splice(index, 1)
          } else {
            // delete dislike
            const index = newValues.usersDisliked.indexOf(userId)
            newValues.usersDisliked.splice(index, 1)
          }
          break
      };
      // likes / dislikes count
      newValues.likes = newValues.usersLiked.length
      // upgrade sauce modification
      Post.updateOne({ _id: postId }, newValues)
        .then(() => res.status(200).json({ message: 'Post liké !' }))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }))
}
