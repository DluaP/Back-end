import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurseService } from './curse.service';
import { CreateCurseDto } from './dto/create-curse.dto';
import { UpdateCurseDto } from './dto/update-curse.dto';

@Controller('curse')
@ApiTags('curse')
export class CurseController {
  constructor(private readonly curseService: CurseService) {}

  @Post()
  create(@Body() createCurseDto: CreateCurseDto) {
    return this.curseService.create(createCurseDto);
  }

  @Get()
  findAll() {
    return this.curseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurseDto: UpdateCurseDto) {
    return this.curseService.update(+id, updateCurseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curseService.remove(id);
  }
}
