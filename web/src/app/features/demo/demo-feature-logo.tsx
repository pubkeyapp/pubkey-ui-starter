import { SimpleGrid } from '@mantine/core'
import {
  UiCard,
  UiGroup,
  UiLogo,
  UiLogoType,
  UiLogoTypeBlack,
  UiLogoTypeWhite,
  UiStack,
  UiThemeSwitch,
} from '@pubkey-ui/core'

export function DemoFeatureLogo() {
  return (
    <UiCard title="Logo and LogoType">
      <SimpleGrid cols={2}>
        <UiStack align="center">
          <UiLogo height={64} />
        </UiStack>
        <UiStack align="center">
          <UiLogo height={128} />
        </UiStack>
        <UiStack align="center">
          <UiLogoTypeBlack height={64} />
        </UiStack>
        <UiStack align="center">
          <UiLogoTypeWhite height={64} />
        </UiStack>
        <UiStack align="center">
          <UiLogoType height={64} />
        </UiStack>
        <UiGroup>
          <UiStack align="center">
            <span>Toggle the theme to see the logo change color.</span>
            <UiThemeSwitch />
          </UiStack>
        </UiGroup>
      </SimpleGrid>
    </UiCard>
  )
}
