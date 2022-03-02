import { v4 as uuidv4 } from 'uuid';
uuidv4();

let users = [];

export const getUsers = (req, res) => {
  res.send(users)
};

export const getUser = (req, res) => {
  // :id can be accessed by using req.params
  // i.e. '/users/2' => req.params {id: 2}
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser)
};

export const createUser = (req, res) => {
  const user = req.body;
  const userID = uuidv4();

  users.push({ ...user, id: userID })

  res.send(`User with the name ${user.firstName} ${user.lastName} added to the database! user id is ${userID}`)
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if(firstName) user.firstName = firstName
  if(lastName) user.lastName = lastName
  if(age) user.age = age

  res.send(`User with the id ${id} has been updated.`)
  
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id)
  res.send(`User with the id ${id} deleted from the database.`)
};