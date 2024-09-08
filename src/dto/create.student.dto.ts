import {  IsEmpty, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateStudentDto {
@IsString()
@MaxLength(30)
@IsNotEmpty({
  message:"Student Name is required"
})
readonly name:string;
@IsString()
@MaxLength(30)
@IsNotEmpty({
  message:"Student Name is required"
})
readonly gender:string;
@IsNumber()
@IsNotEmpty({
  message:"Student role number is required"
})
readonly roleNumber:number;
@IsNumber()
@IsNotEmpty({
  message:"Student class is required"
})
readonly class:number;

@IsNumber()
@IsNotEmpty({
  message:"Student mark is required"
})
readonly marks:number;

}