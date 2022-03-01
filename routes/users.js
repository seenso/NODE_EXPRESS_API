import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe", 
    age: 25
  },
  {
    firstName: "Jane",
    lastName: "Doe", 
    age: 24
  }
]

// all routes in here start with /users thanks to the "/users" enpoint in index.js, so no need to add it in the endpoint on this file.
router.get('/', (req, res) => {
  res.send(users)
});

router.post('/', (req, res) => {
  const user = req.body;
  users.push(user)

  res.send(`User with the name ${user.firstName} ${user.lastName} added to the database!`)
})

export default router;