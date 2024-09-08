import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/create.student.dto';
import { Student } from 'src/schema/student.shema';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel:Model<Student>){}

  async createStudent(createStudentDto:CreateStudentDto):Promise<Student>{
    const student =new this.studentModel(createStudentDto);
    return student.save();
  }


  async getAllStudent():Promise<Array<Student>>{
    const students = await this.studentModel.find();
    if (!students || students.length===0) {
      throw new NotFoundException("Student Data not found")
    }
    return students
  }
}
