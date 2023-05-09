import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { TemporalWorkerModule } from './temporal-worker/temporal-worker.module';
import { TemporalClientModule } from './temporal-client/temporal-client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'user',
      password: 'root',
      database: 'db',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    TemporalWorkerModule,
    TemporalClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

