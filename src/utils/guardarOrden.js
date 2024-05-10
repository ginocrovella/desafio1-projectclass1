import { addDoc, collection, doc, DocumentSnapshot, getDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from 'sweetalert2';

const guardarOrden = (cart, orden) => {
    console.log("Guardar orden");
    console.log(cart);
    console.log(orden);

    // Primer paso
    const batch = writeBatch(db);

    // Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []

    // Chequear el stock del producto en DB y restarlo a la cantidad, si corresponde
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'productos', productoEnCart.id))
        .then(async (DocumentSnapshot) => {
            // Generamos los datos del producto en tiempo real. Obetenemos el stock justo antes de guardar.
            const producto = {...DocumentSnapshot.data(), id:DocumentSnapshot.id};
        
            // Hacemos un update en caso que el stock supere a la cantidad.
            if (producto.stock >= productoEnCart.quantity) {
                batch.update(doc(db, 'productos', producto.id), {
                    stock:producto.stock - productoEnCart.quantity})
            } else {
                outOfStock.push(producto)
            }
            console.log("Productos fuera de stock");
            console.log(outOfStock);

            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({id}) => {
                    // Recien hacemos el commit una vez que se genera la orden
                    batch.commit().then(() => {
                        Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Se generó tu orden!',
                        showConfirmButton: false,
                        timer: 1500
                        })
                    }) 
                }).catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Algo salió mal',
                      })
                })
                // Si tenemos productos fuera del stock al momento de generar la ordern avisamos al usuario
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    // eslint-disable-next-line no-unused-vars
                    mensaje += `${producto.nombre}`
                }
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No hay stock',
                    
                  })
            }
        })
    })
}

export default guardarOrden;