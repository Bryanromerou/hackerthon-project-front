const express = require('express');
const ctrl = require('../controllers');
const router = express.Router()

//routes
router.get('/', ctrl.posts.index);
router.get('/:id', ctrl.posts.show);
router.post('/', ctrl.posts.create);
router.put('/:id', ctrl.posts.createReply);
router.put('/:id', ctrl.posts.update);
router.delete('/:id', ctrl.posts.destroy);

module.exports = router;