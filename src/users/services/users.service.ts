import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/Users.entity';
import { Cache } from 'cache-manager';
import axios from 'axios';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private UsersRepo: Repository<User>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  findAll() {
    return this.UsersRepo.find();
  }

  findOne(cpf: string) {
    return this.UsersRepo.findOne(cpf);
  }

  async create(body: any) {
    const User = await this.UsersRepo.findOne(body.cpf);
    const cep = await this.cacheManager.get('cep');

    if(cep !== undefined && cep === body.cep){
      body.cep = cep
      body.logradouro = await this.cacheManager.get('cep');
      body.cidade = await this.cacheManager.get('cidade');
      body.estado = await this.cacheManager.get('estado');
    }else{
      const response = await axios.get(`https://viacep.com.br/ws/${body.cep}/json/`)
      body.logradouro = response.data.logradouro
      body.cidade = response.data.localidade
      body.estado = response.data.uf
      await this.cacheManager.set('cep',body.cep)
      await this.cacheManager.set('logradouro',body.logradouro)
      await this.cacheManager.set('cidade',body.cidade)
      await this.cacheManager.set('estado',body.estado)
    }
    
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