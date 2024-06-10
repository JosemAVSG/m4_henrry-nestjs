import { Controller, Get } from '@nestjs/common';

@Controller()
export class AuthController {

    @Get('/auth')
    getHello(): string {
        return 'You are authenticated!';
    }

}
