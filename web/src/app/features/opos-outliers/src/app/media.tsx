import { Skeleton } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import { MediaPreviewAvatar, MediaPreviewImage } from '../components/media-preview-avatar'
import { useCharacterDesign } from '../hooks/use-character-design'

export function Media() {
  const { mediaState } = useCharacterDesign()

  return (
    <UiStack>
      <Skeleton visible={mediaState.isLoading}>
        <MediaPreviewAvatar image={mediaState.data?.pfp} />
      </Skeleton>
      <Skeleton visible={mediaState.isLoading} radius="xl">
        <MediaPreviewImage image={mediaState.data?.primary} />
      </Skeleton>
    </UiStack>
  )
}
