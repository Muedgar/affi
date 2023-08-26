import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AffidavitModule } from './affidavit/affidavit.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  
  imports: [ConfigModule.forRoot({ isGlobal: true }),PrismaModule, AffidavitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
