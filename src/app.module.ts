import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';

//Decorator
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest',
    entities: [Product],
  }), ProductsModule],
  controllers: [AppController], // MVC
  providers: [AppService], //Negócio, camada de serviços
})
export class AppModule {}
