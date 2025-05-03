import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { HttpModule } from '@nestjs/axios';
import { PaymentsController } from './fund_account.controller';
import { PaymentsService } from './fund_account.service';

@Module({
  imports:[TypeOrmModule.forFeature([]),HttpModule],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
