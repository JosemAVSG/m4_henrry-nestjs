import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProductsController {

    @Get('/products')
    getProducts() {
        return 'This action returns all products';
    }
}
