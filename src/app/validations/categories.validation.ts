import { IsNotEmpty ,MinLength, MaxLength, IsOptional } from 'class-validator';


export class CategoryValidation{

    @IsNotEmpty({message: 'O nome é obrigatório'})
    @MinLength(2, { message: "Digite pelo menos 2 caracteres no nome"})
    @MaxLength(255, { message: "O nome não pode ultrapassar 255 caracteres"})
    name: string;

    @IsOptional()
    @MinLength(6, { message: "Nome da imagem não tem o tamanho minimo"})
    @MaxLength(255, { message: "O nome não pode ultrapassar 255 caracteres"})
    image: string;

    
}