const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    //cek apakah ada header yg bernama 'x-auth-token'
    if(!req.header('x-auth-token')) res.send('Access forbidden')

    // cek apakah jwt nya sudah expired / error
    try{
        //jwt.verify(token, 'secret-key')
        let hashed = jwt.verify(req.header('x-auth-token'), 'areydra')
        //mengambil index pertama dengan key email
        if(hashed[0].email === "areydra@gmail.com")
            next()
        else
            //jika email tidak sesuai maka forbidden
            res.send('Access Forbidden')
    }catch{
        //jika error send 
        res.send('Token invalid or expired')
    }
}