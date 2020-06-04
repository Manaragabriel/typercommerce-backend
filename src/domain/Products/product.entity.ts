import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @Column({
        type:       'decimal',
        precision:  10,
        scale:      2
    })
    quantity: Number;

    @Column({
       type:        'decimal',
       precision:   10,
       scale:       2
    })
    price: Number;

    @Column({
        type:        'decimal',
        precision:   10,
        scale:       2
     })
     promotional_price: Number;

    @Column({
        type:      'text'
    })
    description: String;

    @Column({
        type:       'decimal',
        precision:  10,
        scale:      5
    })
    weight: Number;

    @Column({
        type:       'decimal',
        precision:  10,
        scale:      2
    })
    height: Number;

    @Column({
        type:       'decimal',
        precision:  10,
        scale:      2
    })
    width: Number;

    @Column()
    image: string;

    @Column({
        type: 'datetime',
        default:  () => "CURRENT_TIMESTAMP"
    })
    createdAt: Date;

    @Column({
        type: 'datetime',
      
    })
    updatedAt: Date;

}