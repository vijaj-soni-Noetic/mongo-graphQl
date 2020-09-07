import { Entity, PrimaryColumn, Column, ObjectIdColumn } from "typeorm";
import { ObjectType } from "@nestjs/graphql";

@Entity()
export class Lesson{

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

}