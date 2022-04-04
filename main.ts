let a: Names_colors = null
basic.forever(function () {
    probots.initColorSensor(probots.conexiones_ret(conn.CON1))
    a = probots.getSensedColorValue()
})
