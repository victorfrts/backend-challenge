import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/Users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private UsersRepo: Repository<User>,
  ) {}

  findAll() {
    return this.UsersRepo.find();
  }

  findOne(cpf: string) {
    return this.UsersRepo.findOne(cpf);
  }

  create(body: any) {
    const newUser = this.UsersRepo.create(body);
    return this.UsersRepo.save(newUser);
  }

  async update(body: any) {
    const User = await this.UsersRepo.findOne(body.cpf);
    this.UsersRepo.merge(User, body);
    return this.UsersRepo.save(User);
  }

  async remove(cpf: string) {
    await this.UsersRepo.delete(cpf);
    return true;
  }
}