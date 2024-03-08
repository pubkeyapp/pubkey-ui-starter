import { SimpleGrid } from '@mantine/core'
import { UiCard, UiTime } from '@pubkey-ui/core'

export function DemoFeatureTime() {
  return (
    <UiCard title="Time">
      <SimpleGrid cols={2}>
        <UiTime date={new Date(new Date().setMonth(new Date().getMonth() - 1))} />
        <UiTime date={new Date(new Date().setDate(new Date().getDate() - 7))} />
        <UiTime date={new Date(new Date().setDate(new Date().getDate() - 2))} />
        <UiTime date={new Date(new Date().setDate(new Date().getDate() - 1))} />
        <UiTime date={new Date()} />
        <UiTime date={new Date(new Date().setDate(new Date().getDate() + 1))} />
        <UiTime date={new Date(new Date().setDate(new Date().getDate() + 7))} />
        <UiTime date={new Date(new Date().setMonth(new Date().getMonth() + 1))} />
        <UiTime date={new Date(new Date().setFullYear(new Date().getFullYear() + 1))} />
        <UiTime date={new Date('2021-01-01')} />
      </SimpleGrid>
    </UiCard>
  )
}
