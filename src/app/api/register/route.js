
import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcrypt';

dbConnect();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // Generate a verification token
    const verificationToken = generateVerificationToken();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      verificationToken,
      isVerified: false,
    });

    try {
      await newUser.save();

      // Send an email with the verification link
      sendVerificationEmail(email, verificationToken);

      res.status(201).json({ message: 'Registration successful.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
};

// Generate a random verification token (you can use a library for this)
function generateVerificationToken() {
  // Implement your token generation logic here
}

// Send a verification email using Nodemailer
function sendVerificationEmail(email, verificationToken) {
  // Implement your email sending logic here
}
