import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';


@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    report_id:number;

    @Column()
    id:number;

    @Column()
    student_id:string;

    @Column()
    report_detail:string;

    @Column()
    create_date:string;

    @Column()
    update_date:string;

}
