import { Controller, Get, Param } from '@nestjs/common';
import { AutorService } from './autor.service';

@Controller('autor')
export class AutorController {
    constructor(private readonly autorService: AutorService) {}
    @Get()
    

    @Get(':id')
    findId(@Param('id') id: number) {
        return this.autorService.findId(id);
    }
}