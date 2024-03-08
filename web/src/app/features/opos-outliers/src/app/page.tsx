import { Grid, Paper } from '@mantine/core'
import { UiStack } from '@pubkey-ui/core'
import { AttributeSelector } from '../components/attributes-selector'
import { config } from '../config'
import { CharacterDesignProvider } from '../hooks/use-character-design'
import { ImagePreview } from './media'
import { RandomButton } from './random-button'

function Controls() {
  return (
    <Paper withBorder p="md" radius="md" shadow="md">
      <UiStack>
        <AttributeSelector />
        <RandomButton />
      </UiStack>
    </Paper>
  )
}

export function HomePage() {
  return (
    <CharacterDesignProvider config={config}>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Controls />
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <ImagePreview />
        </Grid.Col>
      </Grid>
    </CharacterDesignProvider>
  )
}
