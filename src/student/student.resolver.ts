import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';
import { CreateLessonInput } from 'src/lesson/lesson.input';

@Resolver(of => StudentType)
export class StudentResolver{
constructor(
    private studentService: StudentService,
){}

@Query(returns => [StudentType])
async students(){
    return this.studentService.getStudent();
}

@Mutation(returns => StudentType )
async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
){
    return this.studentService.createStudent(createStudentInput);
}

}