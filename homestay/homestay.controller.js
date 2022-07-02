const express = require('express');
const router = express.Router();
const homestayService = require('./homestay.service');

// routes
router.post('/postHomestay', postHomestay);
router.get('/getHomestay', getHomestay);
router.post('/booking', booking);

module.exports = router;

function postHomestay(req, res, next) {
    homestayService.postHomestay(req.body)
        .then(() => res.json({ message: 'Success', statusCode: 1 }))
        .catch(err => next(err));
}

function getHomestay(req, res, next) {
    homestayService.getHomestay()
        .then(homestays => res.json(homestays))
        .catch(err => next(err));
}

function booking(req, res, next) {
    homestayService.booking(req.body)
    .then(() => res.json({ message: 'Success', statusCode: 1 }))
    .catch(err => next(err));
}