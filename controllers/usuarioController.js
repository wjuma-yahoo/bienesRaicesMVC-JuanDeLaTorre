const formularioLoging = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesion'
    })
}

const registro = (req, res) => {
    res.render('auth/registro', {
      pagina: 'Crear Cuenta'  
    })
}

const fomularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
      pagina: 'Recupera tu acceso a Bienes Raices'  
    })
}


export {
    formularioLoging,
    registro,
    fomularioOlvidePassword
}