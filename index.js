import { typeDefs } from './schema.js'
import { resolvers } from './resolvers.js'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { CollegeMockAPI } from './datasource.js'

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  
const { url } = await startStandaloneServer(server, {
listen: { port: 4000 },
context: async () => {
    const { cache } = server
    return {
        dataSources: {
            mockAPI: new CollegeMockAPI( { cache })
        }
    }
}
});

console.log(`🚀  Server ready at: ${url}`);