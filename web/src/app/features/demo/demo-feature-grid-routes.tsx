import { Badge, SimpleGrid } from '@mantine/core'
import { UiCard, UiGridRoutes } from '@pubkey-ui/core'
import { IconDashboard } from '@tabler/icons-react'

export function DemoFeatureGridRoutes({ basePath = '/demo/grid-routes' }: { basePath?: string }) {
  return (
    <UiCard title="Grid Routes">
      <UiGridRoutes
        basePath={basePath}
        routes={[
          {
            path: 'dashboard',
            label: 'Dashboard',
            leftSection: <IconDashboard />,
            rightSection: (
              <Badge size="xs" color="brand" variant="outline">
                New
              </Badge>
            ),
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
            rightSection: (
              <Badge size="xs" color="brand" variant="outline">
                New
              </Badge>
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
