const _UserManagementModel = require('../model/UserRegister');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRegister = async (req, res) => {
    try {
        const { firstName, lastName, Email, Password } = req.body;

            const _RegisterUser = new _UserManagementModel({
                firstName,
                lastName,
                Email,
                Password
            });
            await _RegisterUser.save();
            res.json({
                Message: `User Register Successfully`,
                Data: true,
                Result: _RegisterUser
            })
    } catch (error) {
        res.json({ Message: error.message, Result: false });
    }
}

const UserLogin = async (req, res) => {
    try {
        _Email = req.body.Email;
        _Password = req.body.Password;
        let _UserToAuthenticate = await _UserManagementModel.findOne({ Email: _Email });
        if (_UserToAuthenticate === null) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Result: null,
                Data: false
            })
        }

        const _Result = await bcrypt.compare(_Password, _UserToAuthenticate.Password);
        if (!_Result) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Data: false,
                Result: null
            })
        }

        const _Token = jwt.sign(
            {
                Email: _UserToAuthenticate.Email,
                UserId: _UserToAuthenticate._id
            },
            'UserLogin',
            { expiresIn: '1h' }
        )

        return res.json({
            Message: 'Authentication SuccessFull',
            Data: true,
            Token: _Token,
            Result: _UserToAuthenticate
        })



    } catch (error) {
        res.json({
            Error: error.message,
            Data: false,
            Result: null
        })
    }
}

module.exports = {
    UserRegister,
    UserLogin
};