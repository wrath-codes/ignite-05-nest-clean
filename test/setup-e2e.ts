import 'dotenv/config'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

beforeAll(async () => {
  console.log('beforeAll')
})

afterAll(async () => {
  console.log('afterAll')
})
