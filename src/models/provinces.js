const mysql = require('../config/dbmysql')

const provinces = {
    getProvinces : () => {
        return new Promise((resolve, reject) => {
            mysql.query('SELECT * FROM province', (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getProvince: id => {
        return new Promise((resolve, reject) => {
            mysql.query('SELECT * FROM province WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    postProvince : data => {
        return new Promise((resolve, reject) => {
            mysql.query('INSERT INTO province SET ?', [data], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    patchProvince : (data, id) => {
        return new Promise((resolve, reject) => {
            mysql.query('UPDATE province SET ? WHERE id=?', [data, id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteProvince : id => {
        return new Promise((resolve, reject) => {
            mysql.query('DELETE FROM province WHERE id=?', [id], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}

module.exports = provinces