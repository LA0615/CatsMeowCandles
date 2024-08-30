
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import { typeDefs, resolvers } from './schemas/index.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CatsMeowCandles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    // Extract token from Authorization header
    const token = req.headers.authorization || '';
    let user = null;

    if (token.startsWith('Bearer ')) {
      try {
        // Verify token and decode user data
        user = jwt.verify(token.slice(7), process.env.JWT_SECRET);
      } catch (err) {
        console.error('Invalid token', err);
      }
    }

    return { user }; // Pass user data to context
  },
});

// Start Apollo Server
const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
});

console.log(`🚀  Server ready at ${url}`);
