import { Button, SimpleGrid } from '@mantine/core'
import { UiCard, toastError, toastInfo, toastSuccess, toastWarning } from '@pubkey-ui/core'

export function DemoFeatureToast() {
  return (
    <UiCard title="Toast">
      <SimpleGrid cols={2}>
        <Button color="green" onClick={() => toastSuccess('This is a success toast')}>
          Toast Success
        </Button>
        <Button color="red" onClick={() => toastError('This is an error toast')}>
          Toast Error
        </Button>
        <Button color="yellow" onClick={() => toastWarning('This is a warning toast')}>
          Toast Warning
        </Button>
        <Button color="cyan" onClick={() => toastInfo('This is an info toast')}>
          Toast Info
        </Button>
      </SimpleGrid>
    </UiCard>
  )
}
