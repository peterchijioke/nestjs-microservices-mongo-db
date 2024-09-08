import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
