import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const router = express.Router();
let users = []

// all routes in here start with /users thanks to the "/users" enpoint in index.js, so no need to add it in the endpoint on this file.
router.get('/', (req, res) => {
  res.send(users)
});

router.post('/', (req, res) => {
  const user = req.body;
  const userID = uuidv4()
  users.push({ ...user, id: userID })

  res.send(`User with the name ${user.firstName} ${user.lastName} added to the database! user id is ${userID}`)
});

router.get('/:id', (req, res) => {
  // :id can be accessed by using req.params
  // i.e. '/users/2' => req.params {id: 2}
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id)
  res.send(`User with the id ${id} deleted from the database.`)
})

export default router;