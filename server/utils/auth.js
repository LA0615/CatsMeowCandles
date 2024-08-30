const jwt = require('jsonwebtoken');
require('dotenv').config();


// Middleware to authenticate and verify JWT
const auth = (req, res, next) => {
  // Get the token from the Authorization header
  let token = req.header('Authorization');

  // If the token is not found, check if it's provided in other places
  if (!token) {
    token = req.body.token || req.query.token;
  }

  // If the token exists in the Authorization header, strip "Bearer" from it
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trimLeft();
  }

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.data; 
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = auth;