import { SimpleGrid } from '@mantine/core'
import { UiAnchor, UiCard } from '@pubkey-ui/core'

export function DemoFeatureAnchor() {
  return (
    <UiCard title="Anchor">
      <SimpleGrid cols={2}>
        <UiAnchor to="/">Anchor with To</UiAnchor>
        <UiAnchor href="https://google.com" target="_blank">
          Anchor without To
        </UiAnchor>
        <UiAnchor>Anchor without To</UiAnchor>
      </SimpleGrid>
    </UiCard>
  )
}
