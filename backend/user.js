import express from 'express';
import faker from 'faker';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'User module' });
});

router.get('/all', (req, res) => {
    res.json({ message: 'all users' });
  });

module.exports = {
    user:router
};
