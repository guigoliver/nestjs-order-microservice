import { Product } from "src/products/entities/product.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Order } from "./order.entity"

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: string

    @ManyToOne(() => Product)
    @JoinColumn({name: 'product_id'})
    product: Product

    @Column({type: 'int'})
    quantity: number

    @Column({type: 'decimal', precision: 10, scale:2})
    price: number
    
    @Column()
    product_id: string

    @ManyToOne(() => Order)
    order: Order
}
