const jwt = require('jsonwebtoken')
const localStorage = require('local-storage')

const usersModel = require('../models/users')
const formResponse = require('../helper/formResponse')

module.exports = {
    login : (req, res) => {
        usersModel.getUserByEmail(req.body.email).then(response => {
            if(response.length){
                if(response[0].password !== req.body.password){
                    res.status(410).send('email or password isnt valid')
                    // formResponse.success(res, 410, {error : 'email or password invalid'})
                }
                else{
                    //membuat jwt dengan ({payload}, 'secret-key', {kadaluarsa dalam : '1 jam'}) (s=second, m=minute, h=hours)
                    let token = jwt.sign({...response}, 'areydra', {expiresIn: '1h'})

                    // Method Date.now() mengembalikan jumlah milisekon sejak 1 Januari 1970 00: 00: 00 UTC.
                    // { token : token, dateNow: Date.now(), hashed:hashed.exp*1000 }
                    // agar format exp menjadi sama dengan date.now maka kalikan 1000
                    
                    // res.set({ 'x-auth-token' : token }) //untuk mensetting nilai header dengan key 'x-auth-token' : value token
                    response = {...response[0], token} //membuat key baru dari response[0], dengan key token:value token
                    delete response['password'] //menghapus response password agar tidak ditampilkan ke user

                    formResponse.success(res, 200, response)
                }
            }else{
                formResponse.success(res, 410, {error : 'email or password invalid'})
            }
        })
    }
}