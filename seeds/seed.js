const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedUser = require('./userData');
const seedComment = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true});

  await seedUser();

  console.log('Success: Uploaded User table')

  await seedPost();

  console.log('Success: Uploaded Blog table')


  await seedComment();

  console.log('Success: Uploaded Comment table')

  process.exit(0);
};

seedAll();