import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ProductService } from './product/product.service';

@Module({
  imports: [ClienteModule],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
