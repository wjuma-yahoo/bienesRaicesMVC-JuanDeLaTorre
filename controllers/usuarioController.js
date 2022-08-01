const formularioLoging = (req, res) => {
    res.render('auth/login')
}

const registro = (req, res) => {
    res.render('auth/registro', {
      pagina: 'Crear cuenta'  
    })
}

export {
    formularioLoging,
    registro
}