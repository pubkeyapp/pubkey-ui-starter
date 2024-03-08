import { Button, SimpleGrid } from '@mantine/core'
import { UiCard, UiGroup } from '@pubkey-ui/core'

export function DemoFeatureGroup() {
  return (
    <UiCard title="Group">
      <SimpleGrid cols={2}>
        <UiGroup justify="space-between">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="xs">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="sm">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="md">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="lg">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
        <UiGroup gap="xl">
          <Button>Save</Button> <Button variant="default">Cancel</Button>
        </UiGroup>
      </SimpleGrid>
    </UiCard>
  )
}
