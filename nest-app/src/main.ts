import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
    // const app = await NestFactory.create(AppModule, { cors: true });
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        "origin": "*",
        // "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "methods": "GET",
        "preflightContinue": true,
        "optionsSuccessStatus": 204
    })

    const config = new DocumentBuilder()
        .setTitle('Routes API')
        .setDescription('This is a CRUD API about car routes')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}

bootstrap();
