import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/routes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RoutesModule,
    MongooseModule.forRoot(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
    }),
  ],
})
export class AppModule {}
