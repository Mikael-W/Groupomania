const passwordSchema = require('../models/password')

// Validate password schema
module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    // return res.status(400,"8 caratères minimun").send({message: 'Mot de passe pas assez fort ! ' + passwordSchema.validate(req.body.password, {list:true})});
    res.writeHead(400, '{"message":"Mot de passe requis : 8 caractères minimun dont 1 majuscule, deux chiffres et sans espace"}', {
      'content-type': 'application/json'
    })
    res.end('Format de mot de passe incorrect')
  } else {
    next()
  }
}