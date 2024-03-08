import { AspectRatio, Avatar, Image } from '@mantine/core'

export function MediaPreviewAvatar(props: { image: string | undefined }) {
  return (
    <Avatar
      style={{
        border: '2px solid white',
      }}
      size={100}
      alt=""
      src={props.image || ''}
    />
  )
}

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
