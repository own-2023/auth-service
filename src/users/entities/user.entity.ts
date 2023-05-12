import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'users',
    database: 'db'
})
export class User {


    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ unique: true })
    username: string;

    @Column({unique: true})
    email: string

    @Column({ default: true })
    isActive: boolean;

    @Column()
    password: string;
}