import { Type } from "class-transformer"
import { ArrayNotEmpty, IsInt, IsNotEmpty, IsPositive, IsString, MaxLength, ValidateNested } from "class-validator"

export class CreateOrderDto {

    @ArrayNotEmpty()
    @ValidateNested({each: true})
    @Type(() => OrderItemDto)
    items: OrderItemDto[]

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    card_hash: string
}

export class OrderItemDto {
    @IsPositive()
    @IsInt()
    @IsNotEmpty()
    quantity: number

    @IsPositive()    
    @IsNotEmpty()
    product_id: string
}
