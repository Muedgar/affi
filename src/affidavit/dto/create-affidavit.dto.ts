import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreateAffidavitDto {
 
  @IsNotEmpty()
  @IsString()
  left_profile_pic: string

  @IsNotEmpty()
  @IsString()
  right_profile_pic: string

  @IsNotEmpty()
  @IsString()  
  fullname 
  
  @IsNotEmpty()
  @IsString()    
  address 
  
  @IsNotEmpty()
  @IsArray()     
  paragraphs: string[]
  
  @IsNotEmpty()
  @IsString()
  date 
  
  @IsNotEmpty()
  @IsString()      
  from_language

  @IsNotEmpty()
  @IsString()
  to_language  

  @IsNotEmpty()
  @IsInt()
  fee_paid 
  
  @IsNotEmpty()
  @IsString()
  signature 
  
  @IsNotEmpty()
  @IsString()
  affi_code 

  @IsNotEmpty()
  @IsString()
  qr_code
  
  @IsNotEmpty()
  @IsString()
  before_me 
}
