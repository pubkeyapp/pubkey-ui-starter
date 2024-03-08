import express, { Request, Response } from 'express'
import { generateImageRouter } from './features/generate-image.router'
import { uptimeRoute } from './features/uptime.route'

export function serverRouter(): express.Router {
  const router = express.Router()

  router.use('/generate-image', generateImageRouter())
  router.use('/uptime', uptimeRoute())
  router.use('/', (req: Request, res: Response) => res.send('PubKey API'))
  router.use('*', (req: Request, res: Response) => res.status(404).send('Not Found'))

  return router
}
