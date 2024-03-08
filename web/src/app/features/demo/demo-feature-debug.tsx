import { SimpleGrid } from '@mantine/core'
import { UiCard, UiDebug, UiDebugModal } from '@pubkey-ui/core'

export function DemoFeatureDebug() {
  return (
    <UiCard title="Debug">
      <SimpleGrid cols={2}>
        <UiDebug data={{ foo: 'bar' }} open hideButton />
        <UiDebug data={{ foo: 'bar' }} />
        <UiDebug data={{ foo: 'bar' }} open />
        <UiDebugModal data={{ foo: 'bar' }} />
      </SimpleGrid>
    </UiCard>
  )
}
