// const multer = require('multer');

// const imageFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image')) {
//     cb(null, true);
//   } else {
//     cb('Cannot accept: not an image.', false);
//   }
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, __basedir + '/resources/static/assests/uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
//   },
// });

// const uploadFile = multer({ storage, fileFilter: imageFilter });

// module.exports = uploadFile;
