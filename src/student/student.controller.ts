import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from 'src/dto/create.student.dto';

@Controller('student')
export class StudentController {

  constructor(private readonly studentService:StudentService){}

  @Post()
  async createStudent (@Res() response, @Body() createStudentDto:CreateStudentDto){
    try {
      const newStudent = await this.studentService.createStudent(createStudentDto);
      return response.status(HttpStatus.CREATED).json({
        message:"Student has successfully been created",
        data:newStudent,
      })

    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'Error: Student not created',
        error:error,
        statusCode:HttpStatus.BAD_REQUEST,
        
      })
    }
  }
  @Get()
  async getAllStudent(@Res() response){
    try {
    const students = await this.studentService.getAllStudent()
    return response.status(HttpStatus.OK).json({
      message:'All student data retrieved successfully',data:students
    })
    } catch (error) {
      return response.status(error.status).json(error.response)
    }
  }

}
