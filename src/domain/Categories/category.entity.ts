import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
        type: 'varchar'
    })
    name: string;

    @Column({
        length: 255,
        type: 'varchar'
    })
    image: string;

}