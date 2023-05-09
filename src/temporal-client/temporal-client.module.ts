import { Module } from '@nestjs/common';
import { TemporalClientService } from './temporal-client.service';
import { temporalClientProvider } from './temporal-client.provider';

@Module({
  providers: [TemporalClientService, ...temporalClientProvider],
  exports: [TemporalClientService]
})
export class TemporalClientModule {}
