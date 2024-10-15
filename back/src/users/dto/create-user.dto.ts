import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsInt,
  Length,
  IsStrongPassword,
  IsOptional,
} from 'class-validator';


export class CreateUserDto {


  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Debe ser un email válido',
    example: 'juansanchez@ejemplo.com',
  })
  email: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @ApiProperty({
    description:
      'La contraseña debe contener al menos 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial',
    example: 'Palabra1*',
  })
  password: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @ApiProperty({
    description:
      'Corrobora que la confirmación sea igual a la contraseña proporcionada',
    example: 'Palabra1*',
  })
  confirmPassword: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Agrega tu codigo de área ',
    example: '543511111111',
  })
  phone: string;

 
}