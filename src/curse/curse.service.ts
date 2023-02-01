import { Injectable } from '@nestjs/common';
import { CreateCurseDto } from './dto/create-curse.dto';
import { UpdateCurseDto } from './dto/update-curse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curse } from './entities/curse.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurseService {
  constructor(
    @InjectRepository(Curse)
    private usersRepository: Repository<Curse>,
  ) {}

  create(createCurseDto: CreateCurseDto) {
    return this.usersRepository.save(createCurseDto);
  }

  findAll() {
    return this.usersRepository.find(); 
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateCurseDto: UpdateCurseDto) {
    return this.usersRepository.update(id,updateCurseDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
