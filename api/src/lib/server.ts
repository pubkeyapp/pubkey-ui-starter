import express from 'express'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import favicon from 'serve-favicon'
import { ServerConfig } from './server-config'
import { serverRouter } from './server-router'

const dir = dirname(import.meta.url).replace('file://', '')

export async function server(config: ServerConfig) {
  // Set up Express server
  const app = express()
  // Set up favicon
  app.use(favicon(join(dir, 'assets', 'favicon.ico')))
  // Parse JSON
  app.use(express.json())
  // Set base path to /api
  app.use('/api', serverRouter())
  // Serve static files
  const staticPath = setupAssets(app, dir)

  // Start server
  app.listen(Number(config.port), config.host).on('listening', async () => {
    console.log(`🅿️  Listening on ${config.apiUrl}`)
    console.log(`📁 Serving static files from ${staticPath}`)
  })
}

function setupAssets(app: express.Express, dir: string) {
  // Serve static files
  const staticPath = join(dir, 'assets')

  // Make sure this path exists
  if (!existsSync(staticPath)) {
    console.error(`❌ Static path ${staticPath} does not exist`)
    process.exit(1)
  }
  app.use('/assets', express.static(staticPath))

  return staticPath
}
