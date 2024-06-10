import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/users')
    getUsers() {
        return 'This action returns all users';
    }
}
