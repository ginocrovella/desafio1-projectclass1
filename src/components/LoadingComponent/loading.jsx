import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

// const LoadingComponent = () => {

//     const [loading, setLoading] = useState(false);

//     const setteoLoader = () => {
//         setLoading(false);
//     }

//     useEffect(() => {
//         setTimeout(setteoLoader, 2500)
//     }, [])


//     // OTRO EJEMPLO
//     // useEffect(() => {
//     //   setTimeout(() => {
//     //     setLoading(true)
//     //   }, 2500);
//     // }, []);
    
//   return (
//     <h3> LoadingComponent: {loading ? "cargando..." : "cargó!"}</h3>
//   )
// }

// export default LoadingComponent


// EJEMPLO CLASE
import React from 'react';
import { Circles } from 'react-loader-spinner';


const Loading = ({loader}) => {
    
    if (loader) {
        return (
          <Circles color='#000' height={80} width={80} />
        )
    }
};

export default Loading


// EN APP
// <Loading loader={true} />
