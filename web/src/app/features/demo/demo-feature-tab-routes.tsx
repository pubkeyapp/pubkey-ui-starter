import { SimpleGrid } from '@mantine/core'
import { UiCard, UiTabRoutes } from '@pubkey-ui/core'

export function DemoFeatureTabRoutes({ basePath = '/demo/tab-routes' }: { basePath?: string }) {
  return (
    <UiCard title="Tab Routes">
      <UiTabRoutes
        basePath={basePath}
        tabs={[
          {
            path: 'dashboard',
            label: 'Dashboard',
            element: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Dashboard">Dashboard</UiCard>
              </SimpleGrid>
            ),
          },
          {
            path: 'content',
            label: 'Content',
            element: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Content">Content</UiCard>
              </SimpleGrid>
            ),
          },
          {
            path: 'settings',
            label: 'Settings',
            element: (
              <SimpleGrid cols={2} spacing="md">
                <UiCard title="Settings">Settings</UiCard>
              </SimpleGrid>
            ),
          },
        ]}
      />
    </UiCard>
  )
}
