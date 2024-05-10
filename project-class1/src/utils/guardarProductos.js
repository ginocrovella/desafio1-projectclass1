import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config';

const algoritmoGuardadoAutomatico = async () => {
    console.log("Entra una vez")
    const response = await fetch('');
    const productosAGuardar = await response.json()

    productosAGuardar.forEach(async (producto) => {
        const docRef = await addDoc(collection(db, "productos"),{
            nombre: producto.nombre,
            categoria: producto.categoria,
            descripcion: producto.descripcion,
            precio: producto.precio,
            imagen: producto.imagen,
            stock: 15,
        });
        console.log("Document written with ID: ", docRef.id);
    });
}

export default algoritmoGuardadoAutomatico