
//  functions that resolve data for the defined GraphQL types

/**
 * (parent, args, context, info)
 * parent: This is the result from the previous level of the query.
 * args: This contains a map of all the GraphQL arguments provided for this field. e.g. { id } or _ to skip
 * context: This is a shared object used by all resolvers in a particular query and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be accessible by all resolvers.
 * info: This argument contains field-specific information relevant to the current query as well as the schema details, such as the return type of the field.
 */

export const resolvers = {
    Student: {
        college: (student, _, { dataSources }) => 
            dataSources.mockAPI.getCollegeById(student.collegeId)
    },
    College: {
        students: (college, _, { dataSources }) => 
            dataSources.mockAPI.getStudentsByCollegeId(college.id)
    },
    Query: {
        students: (_, __, { dataSources }) => dataSources.mockAPI.getStudents(),
        colleges: (_, __, { dataSources }) => dataSources.mockAPI.getColleges(),
    }
}
