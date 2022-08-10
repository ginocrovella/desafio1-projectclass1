import React from 'react';
import Swal from 'sweetalert2';

const Home = () => {

  const login = () => {
    Swal.fire({
      title: 'Registrate y estaremos en contacto!',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Nombre y apellido">
      <input type="text" id="email" class="swal2-input" placeholder="Email">`,
      confirmButtonText: 'Listo!',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const email = Swal.getPopup().querySelector('#email').value
        if (!login || !email) {
          Swal.showValidationMessage(`Por favor introduce tus datos, y podremos estar en contacto!`)
        }
        return { login: login, email: email }
      }
    }).then((result) => {
      Swal.fire(`
        Login: ${result.value.login}
        Email: ${result.value.email}
      `.trim())
    })
  }

  return (
    <>
    <div>
        <div className='imgprincipal'>
        <img src="/assets/render.jpg" alt="render principal" />
    </div>
    <div className="boton-registro">
        <button onClick={login} className="btn btn-dark btn-registration" type="submit" id="btnRegistrar">Clickeá y registrate</button>
    </div>
    </div>
    </>
  )
}

export default Home