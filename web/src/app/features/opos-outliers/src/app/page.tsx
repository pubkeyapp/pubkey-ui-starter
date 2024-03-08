import { Grid, Paper } from '@mantine/core'
import { AttributeSelector } from '../components/attributes-selector'
import { config } from '../config'
import { CharacterDesignProvider } from '../hooks/use-character-design'
import { Media } from './media'
import { RandomButton } from './random-button'

export function HomePage() {
  return (
    <CharacterDesignProvider config={config}>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Paper withBorder p="md" radius="md" shadow="md">
            <AttributeSelector />
            <RandomButton />
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Paper withBorder p="md" radius="md" shadow="md">
            <Media />
          </Paper>
        </Grid.Col>
      </Grid>
    </CharacterDesignProvider>
  )
}
