import { BadRequestException, CACHE_MANAGER } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/Users.entity";
import { UsersService } from "./Users.service";

export class UsersRepositoryFake {
    public create(): void {}
    public async save(): Promise<void> {}
    public async remove(): Promise<void> {}
    public async findOne(): Promise<void> {}
}

describe('UsersService', () => {
    let usersService: UsersService;
    let usersRepository: Repository<User>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
            providers: [
            UsersService,
            {
                provide: getRepositoryToken(User),
                useClass: UsersRepositoryFake,
            },
            ],
        }).compile();
  
        usersService = module.get(UsersService);
        usersRepository = module.get(getRepositoryToken(User));
    });

    describe('creating a user', () => {
        it(`throws an error when no "cpf" is provided`,async () => {
            
            expect.assertions(0);

            try {
                await usersService.findOne('')
            } catch (error) {
                expect(error).toBeInstanceOf(BadRequestException)
                expect(error.message).toBe('Title is required.');
            }

        })
    })

});