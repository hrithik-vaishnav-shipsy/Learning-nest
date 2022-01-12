import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateDataDto } from './dto/create-data.dto';
import { DataService } from './data.service';
import { Data } from './interfaces/data.interface';

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService){}

    @Get()
    allData(): Promise<Data[]> {
        return this.dataService.allData();
    }

    @Get(':id')
    findData(@Param() param): Promise<Data> {
        return this.dataService.findData(param.id);
    }

    @Post()
    addData(@Body() dataitem: CreateDataDto): Promise<Data>{
        return this.dataService.addData(dataitem);
    }

    @Put(':id')
    update(@Body() dataitem: CreateDataDto, @Param() param): Promise<Data>{
        return this.dataService.update(param.id, dataitem);
    }

    @Delete(':id')
    delete(@Param() param): Promise<Data>{
        return this.dataService.delete(param.id);
    }
}
