const { response, request } = require('express');

const usuariosGet =  (req = request, res = response) => {
    const {q, nombre} = req.query;
    res.json({
        ok: true,
        msg: 'get usuariosGet ' + nombre,
        querys: q
    })
}

const usuariosPost =  (req = request, res = response) => {
    const body = req.body;
    res.json({
        msg: 'usuariosPost',
        body: body
    });
}

const usuariosPut =  (req, res = response) => {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: 'usuariosPut  ' + id
    })
}

const usuariosDelete =  (req, res = response) => {
    res.json({
        ok: true,
        msg: 'usuariosDelete API'
    })
}

const usuariosPatch =  (req, res = response) => {
    res.json({
        ok: true,
        msg: 'usuariosPatch API'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}