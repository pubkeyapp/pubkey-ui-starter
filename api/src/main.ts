import * as dotenv from 'dotenv'
import { server } from './lib/server'
import { getServerConfig, ServerConfig } from './lib/server-config'

dotenv.config()

const config: ServerConfig = getServerConfig()

server(config).catch((e) => console.error(`An error occurred:`, e))
