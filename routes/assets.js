const express = require("express");
const router = express.Router();
const Image = require("../models/image");
const shortid = require("shortid");


router.get('/upload', (req, res) => res.render('upload'));
router.post("/upload", (req, res, next) => {
  const { url, category, name } = req.body;
  const image = new Image({
    imageID: shortid.generate(),
    name: name,
    category: category,
    url: url
  });
  image.save();
  res.redirect("/");
});

router.get('/:id', async (req, res) => {
  try {
      const image = await Image.findOne({
          imageID: req.params.id
      })
      if (url) {
          return res.redirect(image.url)
      } else {
          return res.status(404).json('No URL Found')
      }
  }
  catch (err) {
      console.error(err)
      res.status(500).json('Server Error')
  }
})

module.exports = router ;