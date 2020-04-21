import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        unique: true,
    })
    email:string; 

    @Column()
    password: string;


    @Column()
    phone: string;

    @Column({
        type: 'datetime',
        default:  () => "CURRENT_TIMESTAMP"
    })
    createdAt: Date;

    @Column({
        type: 'datetime',
      
    })
    updatedAt: Date;

    @Column({
        type: 'boolean',
        default: false
    })
    isAdmin: Boolean;
}   