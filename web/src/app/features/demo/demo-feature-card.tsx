import { UiCard, UiStack } from '@pubkey-ui/core'

export function DemoFeatureCard() {
  return (
    <UiStack>
      <UiCard title="Default Card">CARD CONTENT</UiCard>
      <UiCard withBorder title="Card" shadow="lg">
        CARD CONTENT
      </UiCard>
    </UiStack>
  )
}
