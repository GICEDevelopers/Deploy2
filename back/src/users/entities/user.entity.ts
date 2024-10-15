import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';



@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;


  @Column({ type: 'bigint' })
  phone: string;

}
