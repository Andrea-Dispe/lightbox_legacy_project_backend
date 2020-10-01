const db = require('../models/index');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    console.log(users);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const user = await db.User.findOne({
      where: { username: req.body.username },
    });
    console.log(user);
    if (user) {
      res.body = user;
      res.status(200);
      res.send(user);
    } else {
      res.status(404);
      res.send('User not found.');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.register = async (req, res) => {
  try {
    const { username, email, pumpkins } = await req.body;

    if (!email || !pumpkins)
      res.status(422).send('Email and password are required.');
    const exists = await db.User.findOne({
      where: { username: username },
    });
    //TODO: edge case for existing user
    if (!exists) {
      const user = await db.User.create(req.body);
      res.body = user;
      res.status(200);
      res.send(user);
    }
  } catch (err) {
    console.log(req.body);
    res.status(500).send('Something went wrong!');
  }
};

exports.profile = async (req, res) => {};
