import { RESTDataSource } from "@apollo/datasource-rest"

export class CollegeMockAPI extends RESTDataSource {
    baseURL = 'http://localhost:3001/';

    constructor(options) {
        super(options)
      }

    async getStudents() {
        return this.get('students')
    }

    async getColleges() {
        return this.get('colleges')
    }

    async getCollegeById(id){
        return this.get(`colleges/${id}`)
    }

    async getStudentsByCollegeId(collegeId){
        const students = await this.get('students')
        return students.filter(student => student.collegeId === collegeId)
    }
}