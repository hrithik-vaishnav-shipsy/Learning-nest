import { Injectable } from '@nestjs/common';
import { Data } from './interfaces/data.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DataService {
    constructor(@InjectModel('Data') private readonly dataModel: Model<Data>){}
    /*private readonly data: Data[] = [
        {
            id: '1',
            name: "hrithik",
            class: 2,
            describtion: "interested in badminton"
        },
        {
            id: '2',
            name: "vaishnav",
            class: 11,
            describtion: "interested in chess"
        }
    ]
*/
    async allData(): Promise<Data[]>{
        return await this.dataModel.find();
    }

    async findData(id: string): Promise<Data>{
        return this.dataModel.findOne({_id: id});
    }

    async addData(data :Data): Promise<Data>{
        const newstudent = new this.dataModel(data);
        return await newstudent.save();
    }

    async delete(id: string): Promise<Data>{
        return await this.dataModel.findByIdAndRemove(id);
    }

    async update(id: string, data: Data): Promise<Data>{
        return await this.dataModel.findByIdAndUpdate(id, data);
    }
}
