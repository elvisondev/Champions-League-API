import express from 'express'
import { ROUTER } from './routes/routes'
import cors from 'cors'

export function createApp() {
  const app = express()

  app.set('logger', true)
  app.use((req, res, next) => {
    if (app.get('logger') === true) {
      console.log('📋 SISTEMA DE LOG LIGADO 📋')
      console.log(
        `${new Date().toLocaleTimeString('pt-BR')} ${req.method} ${req.url}`
      )
    }
    next()
  })
  app.use(express.json())

  app.use('/api', ROUTER)

  app.use(cors())

  return app
}