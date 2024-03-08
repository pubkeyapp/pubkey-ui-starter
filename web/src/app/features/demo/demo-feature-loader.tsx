import { SimpleGrid } from '@mantine/core'
import { UiCard, UiLoader } from '@pubkey-ui/core'

export function DemoFeatureLoader() {
  return (
    <UiCard title="Loader">
      <SimpleGrid cols={3}>
        <UiLoader />
        <UiLoader type="dots" />
        <UiLoader type="bars" />
      </SimpleGrid>
    </UiCard>
  )
}
