import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/Users.entity';
import { UsersService } from './services/Users.service';
import { UsersController } from './controllers/Users.controller';

@Module({
  imports: [
    CacheModule.register({
      ttl: 25, 
      max: 50, 
    }),
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}