import { Controller, Get, Post, Body, Put, Delete, Query, UseInterceptors, ClassSerializerInterceptor, CacheInterceptor, Param } from '@nestjs/common';
import axios from 'axios';
import { UsersService } from '../services/Users.service';

@Controller('api')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {

  constructor(
    private UsersService: UsersService
  ) {}

  @Get('/users')
  findAll() {
    return this.UsersService.findAll();
  }
  
  @Get('/user')
  findOne(@Query() query: any) {
    return this.UsersService.findOne(query.cpf)
  }
  
  @UseInterceptors(CacheInterceptor)
  @Get('/cep')
  async findCep(@Query() query: any){
    const response = await axios.get(`https://viacep.com.br/ws/${query.cep}/json/`)
    return response.data
  }

  @Post('/user')
  async create(@Body() body: any) {
    return this.UsersService.create(body);
  }

  @Put('/user')
  update(@Body() body: any) {
    return this.UsersService.update(body);
  }

  @Delete('/user')
  delete(@Query() query: any) {
    return this.UsersService.remove(query.cpf)
  }

}