import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import cookieParser = require('cookie-parser');
import { RmqModule } from '../rabbitmq/rabbitmq.module';

import { AUTH_SERVICE } from './services';

@Module({
  imports: [RmqModule.register({ name: AUTH_SERVICE })],
  exports: [RmqModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
