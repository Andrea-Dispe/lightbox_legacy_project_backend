'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = require('./config');

const basename = path.basename(__filename);

// const firstConStr = `postgres://${config.USER}:${config.PASSWORD}@${config.host}/postgres`;

const db = {};

//collect all models, put into database object

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  logging: console.log,
  host: config.host,
  dialect: config.dialect,
  define: { timestamps: false },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-6) === 'mdl.js'
    );
  })
  .forEach((file) => {
    console.log('Attaching schema: ', file);
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('🤓 <(Your refrigerator is running)');
  })
  .catch((err) => console.log('Oh noes! ' + err));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.images = require('./mediamdl.js')(sequelize, Sequelize);

module.exports = db;
