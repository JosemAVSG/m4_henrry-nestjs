import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {
    @Get('/users')
    getUsers() {
        return 'This action returns all users';
    }
}
