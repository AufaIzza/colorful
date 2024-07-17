const path = require('path');

module.exports = {
  developement: {
    username: 'root',
    password: 'root',
    storage: path.resolve('../database/storage', "colorful.sqlite"),
    dialect: 'sqlite',
    logging: false,
    host: 'localhost'
  }
}
