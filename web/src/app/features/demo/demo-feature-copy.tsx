import { UiCard, UiCopy, UiStack } from '@pubkey-ui/core'

export function DemoFeatureCopy() {
  return (
    <UiCard title="Copy">
      <UiStack>
        <UiCopy text="Hello PubKey UI" />
      </UiStack>
    </UiCard>
  )
}
