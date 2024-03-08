import { Button, SimpleGrid } from '@mantine/core'
import { UiBack, UiCard, UiPage, UiStack } from '@pubkey-ui/core'

export function DemoFeaturePage() {
  return (
    <UiCard title="Page">
      <UiPage title="Page title" leftAction={<UiBack />} rightAction={<Button variant="outline">Right action</Button>}>
        <UiCard title="Card with Grid inside Page">
          <SimpleGrid cols={2}>
            <UiStack>1</UiStack>
            <UiStack>2</UiStack>
            <UiStack>3</UiStack>
            <UiStack>4</UiStack>
          </SimpleGrid>
        </UiCard>
      </UiPage>
    </UiCard>
  )
}
