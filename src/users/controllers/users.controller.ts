import { Controller, Get, Post, Body, Put, Delete, Query, UseInterceptors, ClassSerializerInterceptor, CacheInterceptor } from '@nestjs/common';
import { UsersService } from '../services/Users.service';

@Controller('api/users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {

  constructor(
    private UsersService: UsersService
  ) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  findAll(@Query() query: any) {
    if(query.cpf !== undefined){
      return this.UsersService.findOne(query.cpf)
    }else{
      return this.UsersService.findAll();
    }
  }

  @Post()
  async create(@Body() body: any) {
    return this.UsersService.create(body);
  }

  @Put()
  update(@Body() body: any) {
    return this.UsersService.update(body);
  }

  @Delete()
  delete(@Query() query: any) {
    return this.UsersService.remove(query.cpf)
  }

}