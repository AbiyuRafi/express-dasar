const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'Get All User Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const CreateNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Create New User Success',
        data: req.body
    })
}

const UpdateUser = (req, res) => {
    const { id } = req.params;
    console.log('id:', id);
    res.json({
        message: "Update User Success",
        data: req.body
    })
}

const DeleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Delete User Success',
        data: {
            id: id,
            name: "rafi",
            email: "rafilinta@gmail.com"
        }
    })
}

module.exports = {
    getAllUsers,
    CreateNewUser,
    UpdateUser,
    DeleteUser
}