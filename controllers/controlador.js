const { request, response } = require('express')

function crearReserva(peticion = request, respuesta = response) {

    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy creando una reserva",
        datos:datosPeticion
    })

}

function buscarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy buscando la reserva " + id
    })

}

function buscarReservas(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "estoy buscando todos las reservas"
    })

}

function editarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    let datosPeticion = peticion.body


    respuesta.json({
        mensaje: "estoy editando la reserva " + id,
        datos:datosPeticion
    })

}

function eliminarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy eliminando la reserva " + id
    })

}

module.exports = {

    crearReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva,

}
