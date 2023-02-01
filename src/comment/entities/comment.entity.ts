import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    comment_id:number;

    @Column()
    id:number;

    @Column()
    student_id:string;

    @Column()
    comment_detail:string;

    @Column()
    create_date:string;

    @Column()
    update_date:string;

}
