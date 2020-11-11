import 'reflect-metadata';
import 'dotenv/config';

import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { buildSchema } from 'type-graphql';

import UserResolvers from '../modules/users/gql';

import './database/index';
import './container';

const main = async () => {
  const schema = await buildSchema({
    resolvers: UserResolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: () => {
      const context = '123';

      return context;
    },
  });

  const app = express();
  app.use(cors());

  apolloServer.applyMiddleware({ app });

  app.listen(3333, () => {
    console.log(
      `🚀 Server started on http://localhost:3333${apolloServer.graphqlPath}`,
    );
  });
};

main();
