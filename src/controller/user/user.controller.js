const Usuario = require('../../model/user/user.model')
const { isEmptyObject, getDistanceFromLatLonInKm } = require('../../helper/helper')

//Funcao que insere um novo usuario no banco de dados
exports.newUser = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        var usuario = new Usuario(req.body)
        let resultado = await usuario.save()
        res.status(200).send({ data: resultado, message: 'Usuário cadastrado.' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao salvar o usuário. Entre em contato conosco pelo suporte.' })
    }
}

//Funcao que busca todos os usuario no banco de dados
exports.findUsers = async (req, res) => {
    try {
        let usuarios = await Usuario.find()
        res.status(200).send({ data: usuarios, message: 'Lista de usuarios.' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao buscar usuários.' })
    }
}


//Funcao que busca usuarios mais proximos por perfil  (Voluntario ou Usuario comum)
exports.findUsersByProfileAndDistanceInKm = async (req, res) => {
    const { tipoUsuario, latitude, longitude } = req.query
    if ((isEmptyObject(tipoUsuario) || !tipoUsuario) || (isEmptyObject(latitude) && isEmptyObject(longitude))) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    let filter = { infoUsuario: { localizacaoUsuario: { latitude, longitude } } }
    let posicaoUsuarioSolicitante = { latitude, longitude }

    try {
        let usuarios = await Usuario.find({ tipoUsuario })
        if (tipoUsuario == 'V') {
            let localizacaoUsuarioSolicitante = filter.infoUsuario.localizacaoUsuario
            var arrayUsuarios = []

            let users = usuarios.filter(usr => {
                var latitude = usr.infoUsuario.localizacaoUsuario.latitude
                var longitude = usr.infoUsuario.localizacaoUsuario.longitude
                let localizacaoUsuarioSolicitado = { latitude, longitude }
                let distancia = getDistanceFromLatLonInKm(localizacaoUsuarioSolicitante, localizacaoUsuarioSolicitado) / 1000
                if(distancia <= usr.distanciaAtendimentoUsuario){
                    arrayUsuarios.push(usr)
                    return arrayUsuarios
                }
            })
            res.status(200).send({ data: users, message: 'Lista de usuarios.' })
        } else {
            if (usuarios.length > 0) {
                res.status(200).send({ data: usuarios, message: 'Lista de usuarios.' })
            } else {
                res.status(404).send({ data: usuarios, message: 'Nenhum usuário encontrado.' })
            }
        }
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao buscar usuários.' })
    }
}