import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {v4 as uuid} from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepositry: Repository<Lesson>,
    ){}

async getLesson(id: string): Promise<Lesson>{
    return this.lessonRepositry.findOne({id});
}

async getLessons():Promise<Lesson[]>{
    return this.lessonRepositry.find();
}

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>{
       const{name, startDate, endDate} = createLessonInput;
        const lesson= this.lessonRepositry.create({
            id: uuid(),
            name,
            startDate,
            endDate
        });

      return  this.lessonRepositry.save(lesson);
        
    }
}
