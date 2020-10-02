const fs = require('fs');

const Image = require('../models/mediamdl');

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    if (req.file == undefined) {
      res.send('Please choose an image.');
    }

    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        `${__basedir}/resources/static/assets/uploads/${req.file.filename}`,
      ),
    }).then((image) => {
      fs.writeFileSync(
        `${__basedir}/resources/static/assets/tmp/${(image.name, image.data)}`,
      );

      res.send('Image has been uploaded.');
    });
  } catch (err) {
    console.log(err);
    res.send(`Upload failed: ${err}`);
  }
};

module.exports = { uploadFiles };
