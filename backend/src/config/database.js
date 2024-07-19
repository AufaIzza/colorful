const path = require('path');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.resolve('src/database/storage', "colorful.sqlite"),
    logging: false,
  }
}
