import { Avatar } from '@mantine/core'

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
