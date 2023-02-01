import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    student_id:string;

    @Column()
    password:string;

    @Column()
    nickname:string;

    @Column()
    facebook:string;

    @Column()
    ig:string;

    @Column()
    email:string;

    @Column()
	  bio:string;

    @Column()
    avatar:string;

    @Column()
    create_date:string;

    @Column()
    update_date:string;
  }