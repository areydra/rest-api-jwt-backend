const formResponse = require('../helper/formResponse')
const provincesModel = require('../models/provinces')

const provinces = {
    getProvinces : (req, res) => {
        provincesModel.getProvinces().then(responses => {
            formResponse.success(res, 200, responses)
        }).catch(err => {
            console.log(err)
        })
    },

    getProvince: (req, res) => {
        provincesModel.getProvince(req.params.id).then(responses => {
            formResponse.success(res, 200, responses)
        }).catch(err => {
            console.log(err)
        })
    },

    postProvince : (req, res) => {
        provincesModel.postProvince(req.body).then(responses => {
            formResponse.success(res, 201, responses, req.body)
        }).catch(err => {
            console.log(err)
        })
    },

    patchProvince : (req, res) => {
        let data = {
            id: parseInt(req.params.id),
            ...req.body,
        }

        //cari data dengan id
        provincesModel.getProvince(req.params.id).then(responses => {
            //jika ada data jalankan update
            if (responses.length) {
                provincesModel.patchProvince(req.body, req.params.id).then(responses => {
                    formResponse.success(res, 200, responses, data)
                }).catch(err => {
                    console.log(err)
                })
            } else {
                // jika data tidak ditemukan maka kirim response
                formResponse.success(res, 410, 'Data not found')
            }
        })
    },

    deleteProvince : (req, res) => {
        let data = {
            id: parseInt(req.params.id)
        }

        //cari data dengan id
        provincesModel.getProvince(req.params.id).then(responses => {
            //jika ada data jalankan delete
            if(responses.length){
                provincesModel.deleteProvince(req.params.id).then(responses => {
                    formResponse.success(res, 200, responses, data)
                }).catch(err => {
                    console.log(err)
                })
            }else{
                // jika data tidak ditemukan maka kirim response
                formResponse.success(res, 410, 'Data not found')
            }
        })
    }
}

module.exports = provinces