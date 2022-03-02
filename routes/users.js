import express from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

// all routes in here start with /users thanks to the "/users" enpoint in index.js, so no need to add it in the endpoint on this file.
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router;