// Función auxiliar para generar la orden
const ordenGenerada = (nombre, email, cart) => {
    return {
        buyer: {
            nombre: nombre,
            email: email
        },
        items: cart 
        ,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada