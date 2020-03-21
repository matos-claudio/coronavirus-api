exports.exampleGetRequest = (req, res) => {
    res.status(200).send({ status: 200, message: 'API em funcionamento', version: '1.0.0' })
}