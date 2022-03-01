import express from 'express';

const router = express.Router();

// all routes in here start with /users thanks to the "/users" enpoint in index.js, so no need to add it in the endpoint
router.get('/', (req, res) => {
  res.send('Hello')
});

export default router;