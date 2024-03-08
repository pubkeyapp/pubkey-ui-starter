import { Button, Group } from '@mantine/core'
import { UiCard, UiDebugModal, UiStack, UiThemeSelect, useUiThemeSelect } from '@pubkey-ui/core'

export function DemoFeatureThemeSelect() {
  const { themes, selected, selectTheme } = useUiThemeSelect()
  return (
    <UiStack>
      <UiCard title="ThemeSelect">
        <UiThemeSelect />
      </UiCard>
      <UiCard title="ThemeSelect">
        <Group>
          {themes.map((item) => (
            <Button disabled={selected.id === item.id} key={item.id} onClick={() => selectTheme(item.id)}>
              {item.id}
            </Button>
          ))}
        </Group>
      </UiCard>
      <UiDebugModal data={{ themes, selected }} />
    </UiStack>
  )
}
