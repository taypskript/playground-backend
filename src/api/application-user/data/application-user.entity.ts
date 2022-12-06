import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'application_user' })
export class ApplicationUser {
  @PrimaryGeneratedColumn('uuid', { name: 'application_user_id' })
  _id: string;

  @Column({ name: 'username' })
  userName: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'middle_name' })
  middleName: string;

  @Column({ name: 'last_name' })
  lastName: string;
}
