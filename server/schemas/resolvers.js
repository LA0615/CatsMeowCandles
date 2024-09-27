import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';  

const resolvers = {
  Mutation: {
    signup: async (_, { email, firstName, lastName, password }) => {
      try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({ email, firstName, lastName, password: hashedPassword });
        await user.save();

        // Generate a JWT token
        const token = jwt.sign(
          { userId: user._id, firstName: user.firstName, lastName: user.lastName },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        return { token, user };
      } catch (error) {
        console.error('Signup error:', error);
        throw new Error('Error during signup');
      }
    },
  },
};

export { resolvers };