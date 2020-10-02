const router = require('express').Router();

const userctrl = require('./controllers/usercntrl');
const mediactrl = require('./controllers/mediacntrl');
const cloudinary = require('./controllers/cloudinary');

router.get('/users', userctrl.getAllUsers);

router.post('/create', userctrl.register);

router.post('/login', userctrl.login);

router.get('/gallery', mediactrl.getUserFeed);

app.get('/api/images', cloudinary.publishPublicIds);

app.post('/api/upload', cloudinary.postImageOnCloudinary);

module.exports = router;
