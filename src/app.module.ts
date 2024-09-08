import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import {ConfigModule,ConfigService} from '@nestjs/config'
import configuration from './config/Configuration';
import {  StudentSchema } from './schema/student.shema';

@Module({
  imports: [
ConfigModule.forRoot
({
  isGlobal:true,
  load:[configuration]}),


MongooseModule.forRootAsync({
      imports:[ConfigModule],useFactory:(configurationService:ConfigService)=>{
        const option:MongooseModuleOptions={
          uri:configurationService.get('database.url')
        }
        return option
      },
      inject:[ConfigService]
    }),
MongooseModule.forFeature([{name:"Student",schema:StudentSchema}])
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
