const formResponse = require('../helper/formResponse')
const usersModel  = require('../models/users')

module.exports = {
    getUsers : (req, res) => {
        usersModel.getUsers().then(responses => {
            formResponse.success(res, 200, responses)
        }).catch(err => console.log(err))
    },

    getUser : (req, res) => {
        usersModel.getUser(req.params.id).then(responses => {
            formResponse.success(res, 200, responses)
        }).catch(err => console.log(err))
    },

    postUser : (req, res) => {
        usersModel.postUser(req.body).then(responses => {
            formResponse.success(res, 200, responses)
        }).catch(err => console.log(err))
    },

    patchUser : (req, res) => {
        usersModel.patchUser(req.body).then(responses => {
            formResponse.success(res, 200, responses)
        }).catch(err => console.log(err))
    },

    deleteUser : (req, res) => {
        usersModel.deleteUser(req.params.id).then(responses => {
            formResponse.success(res, 200, responses)
        }).catch(err => console.log(err))
    }
}