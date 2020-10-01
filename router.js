const router = require('express').Router();

const mediaUpload = require('./controllers/mediauploadctrl');
const userctrl = require('./controllers/usercntrl');
const mediactrl = require('./controllers/mediacntrl');

const uploadFile = require('./middlewares/upload');

router.get('/users', userctrl.getAllUsers);

router.post('/create', userctrl.register);

router.post('/login', userctrl.login);

router.get('/gallery', mediactrl.getUserFeed);

// router.get('/profile', () => {}); 4

// router.get('/explore', () => {}); 8

// router.post('/comment'); 7

// router.post('/like'); 6

//implement later
//router.get('/collections', () => {});

router.post('/uploadtodb', mediactrl.uploadToDb);

router.post('/upload', uploadFile.single('file'), mediaUpload.uploadFiles);

module.exports = router;
