import { Test, TestingModule } from '@nestjs/testing';
import { FundAccountService } from './fund_account.service';

describe('FundAccountService', () => {
  let service: FundAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundAccountService],
    }).compile();

    service = module.get<FundAccountService>(FundAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
