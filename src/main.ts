import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: ['error', 'warn'],
  })

  const configService: ConfigService<Env, true> = app.get(ConfigService)
  const port = configService.get('PORT', { infer: true })

  await app.listen(port)
}
bootstrap()
