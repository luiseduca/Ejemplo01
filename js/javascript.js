
function validar() {
    let tipomensaje, nombres, email, comentario

    tipomensaje = document.getElementById('tipomensaje').value
    nombres     = document.getElementById('nombres').value
    email       = document.getElementById('email').value
    comentario  = document.getElementById('comentario').value

    alert(tipomensaje + " " + nombres + " " + email + " " + comentario)

}
