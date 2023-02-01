export class CreateUserDto {
    id:number;
    student_id:string;
    password:string;
    firstName:string;
    lastName:string;
    nickname:string;
    facebook:string;
    ig:string;
    email:string;
	bio:string;
    avatar:string;
    isActive:string;
    create_date?:string;
    update_date?:string;

}
