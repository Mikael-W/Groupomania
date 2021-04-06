const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{

  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, process.env.JWT_KEY || "b4a511c47aed6c79a6f28066fa8eb09cf88a5b43")
    const userId = decodedToken.userId
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID'
    } else {
      next()
    }
  } catch (err) {
    res.status(401).json({
      error: new Error('Invalid request!')
    })
  }
}

