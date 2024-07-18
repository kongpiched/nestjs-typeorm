import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class AbstractEntity<T> {
  @PrimaryGeneratedColumn({ type: 'int' })
  @ApiProperty()
  id: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => "CURRENT_TIMESTAMP(6) AT TIME ZONE 'UTC+7'",
  })
  @ApiProperty()
  created_at: Date;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
