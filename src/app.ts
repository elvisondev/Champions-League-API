import express from 'express'
import { ROUTER } from './routes/routes'

export function createApp() {
  const app = express()

  app.use(express.json())

  app.use('/api', ROUTER)

  return app
}
