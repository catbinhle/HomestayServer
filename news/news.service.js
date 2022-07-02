const db = require('_helpers/db');
const News = db.News;

module.exports = {
    postNews,
    getNews
};

async function postNews(param) {
    const news = new News(param);
    await news.save()
}

async function getNews() {
    return await News.find();
}