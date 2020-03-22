//Funcao para validar se o objeto está vazio
exports.isEmptyObject = (obj) => {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}