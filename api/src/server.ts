import express from 'express'
import { join } from 'node:path'
import { ServerConfig } from './server-config'
import { serverRouter } from './server-router'

export async function server(config: ServerConfig) {
  // Set up Express server
  const app = express()
  app.use(express.json())
  // Set base path to /api
  app.use('/api', serverRouter())
  // Serve static files
  const staticPath = join(__dirname, 'assets')
  app.use(express.static(staticPath))

  // Start server
  app.listen(Number(config.port), config.host).on('listening', async () => {
    console.log(`🅿️ Listening on ${config.apiUrl}`)
  })
}
