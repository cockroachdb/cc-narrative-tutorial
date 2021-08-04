import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Locker {
  @PrimaryColumn()
  id: number;

  @Column()
  balance: number;

  @Column({nullable: true, default: null })
  color: string;
}
