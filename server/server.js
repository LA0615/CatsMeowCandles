
import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import { typeDefs, resolvers } from './schemas/index.js';
import jwt from 'jsonwebtoken';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CatsMeowCandles')
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
    const token = req.headers.authorization || '';
    let user = null;

    if (token.startsWith('Bearer ')) {
      try {
        user = jwt.verify(token.slice(7), process.env.JWT_SECRET);
      } catch (err) {
        console.error('Invalid token', err);
      }
    }

    return { user };
  },
});

// Start Apollo Server with HTTP
const startServer = async () => {
  await startStandaloneServer(server, {
    listen: { 
      port: process.env.PORT || 4000,
      cors:{
        origin: 'http://localhost:5173',  //need to change to https://catsmeowcandles.com
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      }
    },
  });

  console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}`);
};

startServer().catch(err => {
  console.error('Failed to start server', err);
});
