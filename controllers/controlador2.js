const { request, response } = require('express')

function reservarHabitacion(peticion = request, respuesta = response) {

    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy reservando una habitacion",
        datos:datosPeticion
    })

}

function buscarHabitacion(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy buscando la habitacion " + id
    })

}

function buscarHabitaciones(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "estoy buscando todos las habitaciones"
    })

}

function editarHabitacion(peticion = request, respuesta = response) {

    let id = peticion.params.id

    let datosPeticion = peticion.body


    respuesta.json({
        mensaje: "estoy editando la habitacion " + id,
        datos:datosPeticion
    })

}

function eliminarHabitacion(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy eliminando la habitacion " + id
    })

}

module.exports = {

    reservarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion,

}