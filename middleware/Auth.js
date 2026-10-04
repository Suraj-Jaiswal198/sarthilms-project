const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from request header
  const token = req.header('x-auth-token');

  // If no token, deny access
  if (!token) {
    return res.status(401).json({
      msg: 'No token, authorization denied'
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Attach user info to request
    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Token is not valid'
    });
  }
};
