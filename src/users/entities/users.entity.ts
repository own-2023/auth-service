import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name:'users', 
    database:'db'})
export class User{


    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    username: string;

    @Column({default:true})
    isActive: boolean;

    @Column()
    password: string;
}