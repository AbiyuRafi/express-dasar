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

const CreateNewUser = async (req, res) => {
    const { body } = req;

    if (!body.email || !body.email || !body.address) {
        return res.status(400).json({
            message: "Salah Mengirim Data",
            data: null
        })
    }

    try {
        await UsersModel.CreateNewUser(body);
        res.status(201).json({
            message: 'Create New User Success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }

}

const UpdateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        await UsersModel.UpdateUser(body, id);
        res.json({
            message: "Update User Success",
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const DeleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await UsersModel.DeleteUser(id);
        res.json({
            message: 'Delete User Success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }

}

module.exports = {
    getAllUsers,
    CreateNewUser,
    UpdateUser,
    DeleteUser
}