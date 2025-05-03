import { PartialType } from '@nestjs/mapped-types';
import { CreateFundAccountDto } from './create-fund_account.dto';

export class UpdateFundAccountDto extends PartialType(CreateFundAccountDto) {}
