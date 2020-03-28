const Usuario = require('../../model/user/user.model')

exports.findLogin = async (req, res) => {
    const { telefoneUsuario, senhaUsuario } = req.body
    try {
        let usuario = await Usuario.findOne({
            telefoneUsuario,senhaUsuario
        })
        if(usuario){
            res.status(200).send({ data: usuario, message: 'Login efetivado.' }) 
        }else{
            res.status(404).send({ data: null, message: 'Usúario não encontrado.' })
        }
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao logar.' })
    }
}
