// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

export function setAuthToken(req, res, next) {
  // Check if the user is authenticated
  if (req.user) {
    // Generate a JWT token and add it to the response headers
    const token = generateAuthToken(req.user);
    res.setHeader('Authorization', `Bearer ${token}`);
  }

  // Continue to the next middleware or route
  next();
}

function generateAuthToken(user) {
  // Generate a JWT token with user information
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET, // Your secret key
    { expiresIn: '1h' } // Token expiration time
  );
  return token;
}
