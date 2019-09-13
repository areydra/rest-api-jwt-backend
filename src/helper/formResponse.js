const success = {
    success : (res, status, responses, data) => {
        const success = {
            status : status,
            data : data,
            responses : responses
        }
        res.json(success)
    }
}

module.exports = success