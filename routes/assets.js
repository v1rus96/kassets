const express = require("express");
const router = express.Router();
const Image = require("../models/image");
const shortid = require("shortid");


router.get('/upload', (req, res) => res.render('upload'));
router.post("/upload", (req, res, next) => {
  const { url, category, name } = req.body;
  if(!url || !category || !name) {
    req.flash("error_msg", "Please fill all the fields");
    res.redirect("/assets/upload");
  }
  else {
    const image = new Image({
      imageID: shortid.generate(),
      name: name,
      category: category,
      url: url
    });
    image.save();
    req.flash('success_msg', 'Image has been uploaded!');
    res.redirect('/assets/upload');
  }
});

router.get('/:id', (req, res) => {
  try {
      Image.findOne({ imageID: req.params.id }).then(image => {
         res.redirect(image.url)
      });
  }
  catch (err) {
      console.error(err)
      res.status(500).json('Server Error')
  }
});


router.get('/:id/remove', (req, res) => {
  Image.deleteOne({ imageID: req.params.id }).then(image => {
      res.redirect("/")
  });
});

module.exports = router ;