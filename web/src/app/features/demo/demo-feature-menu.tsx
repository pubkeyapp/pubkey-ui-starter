import { Avatar, rem, Text } from '@mantine/core'
import { UiCard, UiGroup, UiMenu, UiMenuItem, useUiColorScheme } from '@pubkey-ui/core'
import {
  IconDoorExit,
  IconMessageCircle,
  IconMoon,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconSun,
  IconUser,
  IconUserCog,
} from '@tabler/icons-react'
import { ReactNode } from 'react'

export function DemoFeatureMenu() {
  const { colorScheme, toggleColorScheme } = useUiColorScheme()
  const icon: ReactNode = (
    <Avatar src="https://avatars.githubusercontent.com/u/36491?v=4" size={32}>
      <IconUser />
    </Avatar>
  )
  const items: UiMenuItem[] = [
    { label: 'Application', type: 'label' },
    {
      label: 'Settings',
      type: 'item',
      leftSection: <IconSettings style={{ width: rem(14), height: rem(14) }} />,
    },
    {
      label: 'Messages',
      type: 'item',
      leftSection: <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />,
    },
    {
      label: 'Gallery',
      type: 'item',
      leftSection: <IconPhoto style={{ width: rem(14), height: rem(14) }} />,
    },
    {
      label: 'Search',
      type: 'item',
      leftSection: <IconSearch style={{ width: rem(14), height: rem(14) }} />,
      rightSection: (
        <Text size="xs" c="dimmed">
          ⌘K
        </Text>
      ),
    },
    {
      label: `${colorScheme === 'dark' ? 'Light' : 'Dark'} theme`,
      type: 'item',
      leftSection:
        colorScheme === 'dark' ? (
          <IconSun style={{ width: rem(14), height: rem(14) }} />
        ) : (
          <IconMoon style={{ width: rem(14), height: rem(14) }} />
        ),
      onClick: () => toggleColorScheme(),
    },
    {
      label: 'Account',
      type: 'label',
    },
    {
      label: 'Profile',
      type: 'item',
      leftSection: <IconUserCog style={{ width: rem(14), height: rem(14) }} />,
    },
    {
      label: 'Sign out',
      type: 'item',
      leftSection: <IconDoorExit style={{ width: rem(14), height: rem(14) }} />,
    },
  ]
  return (
    <UiCard title="Menu">
      <UiGroup justify="space-between">
        <UiMenu icon={icon} items={items} />
        <UiMenu icon={icon} items={items} position="bottom-end" />
      </UiGroup>
    </UiCard>
  )
}
