import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { StudentSchema } from './schema/student.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Data', schema: StudentSchema }])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
