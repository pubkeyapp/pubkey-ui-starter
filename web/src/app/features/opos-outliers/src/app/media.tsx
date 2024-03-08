import { Paper, Skeleton } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import { MediaPreviewAvatar } from '../components/media-preview-avatar'
import { MediaPreviewImage } from '../components/media-preview-image'
import { useCharacterDesign } from '../hooks/use-character-design'

export function ImagePreview() {
  const { mediaState } = useCharacterDesign()

  return (
    <Paper withBorder p="md" radius="md" shadow="md">
      <UiStack>
        <Skeleton visible={mediaState.isLoading}>
          <MediaPreviewAvatar image={mediaState.data?.pfp} />
        </Skeleton>
        <Skeleton visible={mediaState.isLoading} radius="xl">
          <MediaPreviewImage image={mediaState.data?.primary} />
        </Skeleton>
      </UiStack>
    </Paper>
  )
}
