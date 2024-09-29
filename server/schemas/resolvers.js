import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const resolvers = {
  Mutation: {
    signup: async (_, { email, firstName, lastName, password }) => {
      try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("User already exists");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
          email,
          firstName,
          lastName,
          password: hashedPassword,
        });
        await user.save();

        // Generate a JWT token
        const token = jwt.sign(
          {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        return { token, user };
      } catch (error) {
        console.error("Signup error:", error);
        throw new Error("Error during signup");
      }
    },
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found");
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
          throw new Error("Invalid password");
        }

        const token = jwt.sign(
          {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        return {
          token,
          user: {
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          },
        };
      } catch (error) {
        console.error("Login error:", error);
        throw new Error("Error during login");
      }
    },
  },
};

export { resolvers };
