import { SimpleGrid } from '@mantine/core'
import { UiAlert, UiCard, UiError, UiInfo, UiSuccess, UiWarning } from '@pubkey-ui/core'

export function DemoFeatureAlerts() {
  return (
    <UiCard title="Alerts">
      <SimpleGrid cols={2}>
        <UiError message="Hello World" />
        <UiInfo message="Hello World" />
        <UiSuccess message="Hello World" />
        <UiWarning message="Hello World" />
        <UiAlert message="Hello World" />
      </SimpleGrid>
    </UiCard>
  )
}
