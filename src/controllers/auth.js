const jwt = require('jsonwebtoken')
const usersModel = require('../models/users')
const formResponse = require('../helper/formResponse')

module.exports = {
    login : (req, res) => {
        usersModel.getUserByEmail(req.body.email).then(response => {
            if(response.length){
                if(response[0].password !== req.body.password) res.send('email or password invalid')
                
                //membuat jwt dengan ({payload}, 'secret-key', {kadaluarsa dalam : '1 jam'}) (s=second, m=minute, h=hours)
                let token = jwt.sign({...response}, 'areydra', {expiresIn: '1h'})

                // Method Date.now() mengembalikan jumlah milisekon sejak 1 Januari 1970 00: 00: 00 UTC.
                // { token : token, dateNow: Date.now(), hashed:hashed.exp*1000 }
                // agar format exp menjadi sama dengan date.now maka kalikan 1000
                
                res.set({ 'x-auth-token' : token }) //untuk mensetting nilai header dengan key 'x-auth-token' : value token

                formResponse.success(res, 200, response)
            }else{
                res.send('email or password invalid')
            }
        })
    }
}