import { OrderItem } from './orders/entities/order-item.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { AuthModule } from './auth/auth.module';

//Decorator
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: 'root',
    database: 'nest',
    entities: [Product, Order, OrderItem],
    synchronize: true,
    logging: true,
  }), ProductsModule, OrdersModule, AuthModule],
  controllers: [AppController], // MVC
  providers: [AppService], //Negócio, camada de serviços
})
export class AppModule {}
