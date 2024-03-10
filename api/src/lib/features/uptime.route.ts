import { Request, Response } from 'express'

export function uptimeRoute() {
  return async (req: Request, res: Response) => {
    const result = { uptime: process.uptime() }

    return res.json(result)
  }
}
