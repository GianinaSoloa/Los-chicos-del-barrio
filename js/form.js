const enviadoForm = () =>{
    Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado correctamente!',
        text: `A la brevedad nos pondremos en contacto`,
    })
}

let form = document.querySelector('#form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hice clic")
    enviadoForm();
})
