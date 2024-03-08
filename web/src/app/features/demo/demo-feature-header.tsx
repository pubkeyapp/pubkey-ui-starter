import { ActionIcon, Avatar, Button, Group, rem, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { UiCard, UiHeader, UiMenu, UiSearchInput, UiStack } from '@pubkey-ui/core'
import {
  IconDoorExit,
  IconLetterP,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconUser,
  IconUserCog,
} from '@tabler/icons-react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

export function DemoFeatureHeader() {
  const [opened, { toggle }] = useDisclosure(false)
  const [signedIn, setSignedIn] = useState(false)
  return (
    <UiCard title="Header">
      <UiStack gap="xl">
        <UiHeader
          base="/demo/header"
          opened={opened}
          toggle={toggle}
          links={[
            { link: '/demo/header/about', label: 'Features' },
            { link: '/demo/header/pricing', label: 'Pricing' },
            { link: '/demo/header/learn', label: 'Learn' },
          ]}
          profile={<UiSearchInput text={{ size: 'sm' }} />}
        />
        <UiHeader
          profile={
            <ActionIcon radius="xl" size="lg" variant="light">
              <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </ActionIcon>
          }
        />
        <UiHeader
          base="/demo/header"
          logo={
            <Group gap={6}>
              <IconLetterP size={28} />
              <Text size="xl" fw="bold">
                PubKey
              </Text>
            </Group>
          }
          logoSmall={<IconLetterP size={28} />}
        />
        <UiHeader
          profile={
            <Group gap="xs">
              {signedIn ? (
                <UiMenu
                  position="bottom-end"
                  withArrow
                  arrowOffset={14}
                  icon={
                    <Avatar src="https://avatars.githubusercontent.com/u/36491?v=4" size={32}>
                      <IconUser />
                    </Avatar>
                  }
                  items={[
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
                      onClick: () => setSignedIn(false),
                    },
                  ]}
                />
              ) : (
                <Button size="sm" variant="light" onClick={() => setSignedIn(true)}>
                  Sign in
                </Button>
              )}
            </Group>
          }
        />
        <UiStack hiddenFrom="md">
          {opened ? (
            <Button onClick={toggle}>Close menu</Button>
          ) : (
            <Button variant="light" onClick={toggle}>
              Open menu
            </Button>
          )}
        </UiStack>

        <Routes>
          <Route path="about" element={<div>About</div>} />
          <Route path="pricing" element={<div>Pricing</div>} />
          <Route path="learn" element={<div>Learn</div>} />
        </Routes>
      </UiStack>
    </UiCard>
  )
}
