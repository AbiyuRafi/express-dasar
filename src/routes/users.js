const express = require('express');
const UserController = require('../controllers/users.js')

const router = express.Router();

//READ-GET
router.get('/', UserController.getAllUsers);

//CREATE-POST
router.post('/', UserController.CreateNewUser);

//UPDATE-PATCH
router.patch('/:id', UserController.UpdateUser);

//DELETE - DELETE
router.delete('/:id', UserController.DeleteUser)



module.exports = router;