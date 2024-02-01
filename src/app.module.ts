import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

//Decorator
@Module({
  imports: [ProductsModule],
  controllers: [AppController], // MVC
  providers: [AppService], //Negócio, camada de serviços
})
export class AppModule {}
