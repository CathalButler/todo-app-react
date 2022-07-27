const {ApolloServer} = require('apollo-server');
const {PrismaClient} = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Task = require('./resolvers/Task');
const User = require('./resolvers/User');
const {getUserId} = require('./utils');

const prisma = new PrismaClient({
    errorFormat: 'minimal'
});


const resolvers = {
    Query,
    Mutation,
    Task,
    User
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: ({req}) => {
        return {
            ...req,
            prisma,
            userId:
                req && req.headers.authorization
                    ? getUserId(req)
                    : null
        };
    },
    subscriptions: {
        onConnect: (connectionParams) => {
            if (connectionParams.authToken) {
                return {
                    prisma,
                    userId: getUserId(
                        null,
                        connectionParams.authToken
                    )
                };
            } else {
                return {
                    prisma
                };
            }
        }
    }
});

server
    .listen()
    .then(({url}) =>
        console.log(`Server is running on ${url}`)
    );