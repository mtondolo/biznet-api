const express = require('express');
const mongoose = require('mongoose');
const NewsItem = require('../model/NewsItem');
const router = express.Router();

router.route('/')

  .get((req, res) => {

    NewsItem.find({}, (err, newsitems) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(newsitems);
    }).sort({date:1}).limit(10); 

  });
module.exports = router;