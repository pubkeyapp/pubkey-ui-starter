import express, { Request, Response } from 'express'
import sharp from 'sharp'
import { config } from './src/config'
import { AttributesMap, GenerateMediaResponse } from './src/types'

export function generateImageRouter() {
  const router = express.Router()

  router.post('/', generateImagePost())

  return router
}

export function generateImagePost() {
  return async (req: Request, res: Response) => {
    const payload = req.body

    try {
      const response = await generateMedia(payload)

      return res.status(200).json(response)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Error creating transaction' })
    }
  }
}

export async function generateMedia(attributes: AttributesMap): Promise<GenerateMediaResponse> {
  const attributesToFiles = Object.entries(attributes).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: config.attributes[key][value],
    }),
    {},
  )

  try {
    const urls = Object.values(attributesToFiles) as string[]

    const downloadImage = async (url: string) => {
      const response = await fetch(url)
      const buffer = Buffer.from(await response.arrayBuffer())
      return buffer
    }

    const [background, ...layers] = await Promise.all(urls.map(downloadImage))

    // Composite primary media

    const mainBuffer = await sharp(background)
      .composite(
        layers.map((layer) => ({
          input: layer,
        })),
      )
      .toBuffer()

    // Extract primary media
    const primary = await sharp(mainBuffer)
      .extract({
        left: 60,
        top: 0,
        width: 520,
        height: 520,
      })
      .toBuffer()

    // Extract pfp media
    const pfp = await sharp(mainBuffer)
      .extract({
        left: 155,
        top: 10,
        width: 325,
        height: 325,
      })
      .toBuffer()

    return {
      primary: primary.toString('base64'),
      pfp: pfp.toString('base64'),
    }
  } catch (error) {
    console.error('ERROR', error)

    return {
      primary: null,
      pfp: null,
    }
  }
}
