const express = require('express');
const router = express.Router();
const newsService = require('./news.service');

// routes
router.post('/postNews', postNews);
router.get('/getNews', getNews);

module.exports = router;

function postNews(req, res, next) {
    newsService.postNews(req.body)
        .then(() => res.json({ message: 'Success', statusCode: 1 }))
        .catch(err => next(err));
}

function getNews(req, res, next) {
    newsService.getNews()
        .then(news => res.json(news))
        .catch(err => next(err));
}