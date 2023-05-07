import { Module } from '@nestjs/common';
import { TemporalClientService } from './temporal-client.service';

@Module({
  providers: [TemporalClientService]
})
export class TemporalClientModule {}
