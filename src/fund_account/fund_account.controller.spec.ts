import { Test, TestingModule } from '@nestjs/testing';
import { FundAccountController } from './fund_account.controller';
import { FundAccountService } from './fund_account.service';

describe('FundAccountController', () => {
  let controller: FundAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundAccountController],
      providers: [FundAccountService],
    }).compile();

    controller = module.get<FundAccountController>(FundAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
