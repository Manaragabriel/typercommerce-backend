import { IsEmail, IsNotEmpty, MinLength, MaxLength} from 'class-validator';

export class UserValidation{
    
    @MinLength(2, { message: 'Nome deve conter no minimo 2 caracteres' } )
    @IsNotEmpty({ message: 'Nome é obrigatório' } )
    name: string;

    @MinLength(2, { message: 'Email deve conter no minimo 2 caracteres' } )
    @IsEmail()
    email:string;

    @MinLength(6,{ message: 'Senha deve conter no minimo 6 caracteres'} )
    @IsNotEmpty({ message: 'Senha é obrigatória'})
    password: string;



}