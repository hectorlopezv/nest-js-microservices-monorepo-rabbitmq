import { Injectable } from '@nestjs/common';
import { createOrderRequest } from './dto/create-order.request';
import { OrderRepository } from './repositories/orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}
  async createOrder(request: createOrderRequest) {
    return this.orderRepository.create(request);
  }

  async getOrders() {
    return this.orderRepository.find({});
  }
}
