import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'application_role' })
export class ApplicationRole {
  @PrimaryGeneratedColumn('uuid', { name: 'application_role_id' })
  _id: string;

  @Column({ name: 'description' })
  description: string;
}
