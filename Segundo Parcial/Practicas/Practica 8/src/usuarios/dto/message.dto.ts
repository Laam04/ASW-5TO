import {IsString, MinLength} from 'class-validator';

export class messageDTO {
    @IsString()
    @MinLength(1)
    message: string;
}