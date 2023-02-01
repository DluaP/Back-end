import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Curse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    curse_id:number;

    @Column()
    name_curse:string;

    @Column()
    student_id:string;

    @Column()
    comment_id:string;

    @Column()
    post_curse:string;

    @Column()
    satisfied_point:string;

    @Column()
    appropriate_point:string;

    @Column()
    teacher_point:string;

    @Column()
    grade:string;

    @Column()
    semester:string;

    @Column()
    term:string;

    @Column()
    view_post:string;

    @Column()
    like_post:string;

    @Column()
    create_date:string;

    @Column()
    update_date:string;
}
