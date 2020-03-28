var mongoose = require('mongoose')
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var SchemaUsuario = new Schema(
    {
        nomeUsuario: {
            type: String,
            required: true,
            trim: true
        },
        sobrenomeUsuario: {
            type: String,
            required: true,
            trim: true
        },
        cpfUsuario: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true
        },
        telefoneUsuario: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true
        },
        senhaUsuario:{
            type: String,
            required: true,
            trim: true
        },
        fotoRostoUsuario: {
            type: String,
            required: true,
            trim: true
        },
        imagemDocumentoUsuario: {
            type: String,
            required: true,
            trim: true
        },
        observacaoUsuario: {
            type: String,
            required: true,
            trim: true
        },
        tipoUsuario: {
            type: String,
            required: true,
            trim: true
        },
        distanciaAtendimentoUsuario: {
            type: Number
        },
        possuiDoencaRespiratoria: {
            type: Boolean,
            required: true
        },
        idadeUsuario: {
            type: Number,
            required: true
        },
        infoUsuario: {
            usuarioLogado: {
                type: Boolean
            },
            localizacaoUsuario: {
                latitude: {
                    type: String
                },
                longitude: {
                    type: String
                },
                ultimoLoginUsuario: {
                    type: String
                }
            }
        }

    }, { versionKey: false } 
)
SchemaUsuario.plugin(timestamps);
module.exports = mongoose.model('Usuario', SchemaUsuario)