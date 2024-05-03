# GraphQL Apollo Server Project

This repo acts as the server for https://github.com/sittimunirahar/graphql-react-client

It serves four REST endpoints:

- GET /getStudents
- GET /getColleges
- GET /getCollegeById
- GET /getStudentsByCollegeId

It serves this schema:

```
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
```

## Setup

1. `git clone` this repo
2. `cd`
3. run `npm install`
4. run `node --watch index.js`
5. open another terminal and start the JSON mock API: `npm run json-server`
