const { User } = require('../models');


// password hash is for password12345 in all seeds
const userData = [
    {
      name: 'Justin',
      email: 'justin@gmail.com',
      password: '$2a$10$adLsVR8Vr9KMx9bDdPcmou7jhbtEcksnYUrTibBININJ1.fZ4IONG',
    },
    {
      name: 'Sarah',
      email: 'Sarah@gmail.com',
      password: '$2a$10$iEQUSRJ934e3oTKjWJDKb..tJq.F.XM43lpNJzlf91.1j1YSKRdZm',
    },
    {
      name: 'Al Pacino',
      email: 'BigAl@gmail.com',
      password: '$2a$10$4N1FSvVnivb1MzBdTbpPUuqEkDGkU9Ce51/sxVKwJctBET8sV40k6',
    },
    {
      name: 'Batman',
      email: 'NotInaCave@gmail.com',
      password: '$2a$10$LUyasEvSP8kdjVKG3FvtteuJVcKJcf7/0Yqmqme1i91eN9DpVg0L2',
    }
  ];
  

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;