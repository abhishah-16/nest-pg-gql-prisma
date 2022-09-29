import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  designation: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  mobile: string
}
