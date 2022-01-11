import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
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

  async create(body: any) {
    const User = await this.UsersRepo.findOne(body.cpf);
    const response = await axios.get(`https://viacep.com.br/ws/${body.cep}/json/`)
    body.logradouro = response.data.logradouro
    body.cidade = response.data.localidade
    body.estado = response.data.uf
    if(User === undefined){
      const newUser = this.UsersRepo.create(body);
      return this.UsersRepo.save(newUser);
    }else{
      return false
    }
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