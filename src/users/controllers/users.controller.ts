import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from '../services/Users.service';

@Controller('api/users')
export class UsersController {

  constructor(
    private UsersService: UsersService
  ) {}

  @Get()
  findAll() {
    return this.UsersService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.UsersService.findOne(cpf);
  }

  @Post()
  create(@Body() body: any) {
    return this.UsersService.create(body);
  }

  @Put()
  update(@Body() body: any) {
    return this.UsersService.update(body);
  }

  @Delete(':cpf')
  delete(@Param('cpf') cpf: string) {
    return this.UsersService.remove(cpf);
  }

}