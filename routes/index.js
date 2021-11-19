const express = require("express");
const router = express.Router();
const Image = require("../models/image");

router.get('/', (req, res) => {
    Image.find({}).then(image => {
        res.render('assets', { images: image });
    });
});


module.exports = router;