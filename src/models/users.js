const mysql = require('../config/dbmysql')

module.exports = {
    getUsers : () => {
        return new Promise((resolve, reject) => {
            mysql.query('SELECT * FROM users', (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getUser : id => {
        return new Promise((resolve, reject) => {
            mysql.query('SELECT * FROM users WHERE id=?', [id], (err,res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getUserByEmail: email => {
        return new Promise((resolve, reject) => {
            mysql.query('SELECT * FROM users WHERE email=?', [email], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    postUser: data => {
        return new Promise((resolve, reject) => {
            mysql.query('INSERT INTO users SET ?', [data], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    patchUser : (data, id) => {
        return new Promise((resolve, reject) => {
            mysql.query('UPDATE users SET ? WHERE id=?', [data, id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteUser : id => {
        return new Promise((resolve, reject) => {
            mysql.query('DELETE FROM users WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}