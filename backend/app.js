const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

app.get('/api/users', (req, res) => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push({
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      age:Math.random(1,10),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    });
  }
  res.json(users);
});

app.get('/', (req, res) => {
    res.send( "hello");
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = app;

