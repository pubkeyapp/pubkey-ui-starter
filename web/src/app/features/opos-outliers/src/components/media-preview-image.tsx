import { AspectRatio, Image } from '@mantine/core'

export function MediaPreviewImage(props: { image?: string }) {
  if (!props.image) {
    return null
  }
  return (
    <AspectRatio ratio={1}>
      <Image alt="Avatar" radius="xl" src={props.image || ''} />
    </AspectRatio>
  )
}
