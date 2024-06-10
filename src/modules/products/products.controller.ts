import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('/products')
    getProducts() {
        return 'This action returns all products';
    }
}
