
// define the structure of GraphQL API using type definitions
export const typeDefs = `#graphql
    type Student {
        id: ID!
        name: String
        college: College
    }

    type College {
        id: ID!
        name: String
        location: String
        students: [Student]
    }

    type Query {
        students: [Student]
        colleges: [College]
    }
`