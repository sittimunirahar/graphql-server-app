import { ApolloServer } from '@apollo/server'
import { typeDefs, resolvers, MockAPI } from './index.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        mockAPI: new MockAPI()
    })
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})