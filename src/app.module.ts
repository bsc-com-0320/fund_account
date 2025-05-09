import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsModule } from './fund_account/fund_account.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,  // Makes the config accessible throughout the app
      envFilePath: process.env.NODE_ENV == 'production' ? '.env.prod' : 'C:/fund acccount/fund_account/.env',  // Loads the variables from the .env file
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,  // Use environment variables here
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
