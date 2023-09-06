
import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcrypt';

dbConnect();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Set the user in the request object
      req.user = user;

      // Generate and include the authentication token in the response
      const token = generateAuthToken(user);
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Login failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

// ... (other code)

// Include the setAuthToken middleware in your API routes
import { setAuthToken } from '../../middleware/authMiddleware';

// Example route where you want to include the token in headers
export default (req, res) => {
  // Use the setAuthToken middleware before handling the request
  setAuthToken(req, res, () => {
    // Continue with your route handling logic
    res.status(200).json({ message: 'Authenticated route' });
  });
};
