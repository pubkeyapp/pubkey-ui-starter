import { ActionIcon, Group, Text } from '@mantine/core'
import { UiGroup, UiStack } from '@pubkey-ui/core'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { config } from '../config'
import { useCharacterDesign } from '../hooks/use-character-design'

type SelectorProps = {
  options: string[]
  label?: string
  selectedIndex?: number
  onChange: (idx: number) => void
}

function ArrowSelector({ options, label = '', selectedIndex = 0, onChange }: SelectorProps) {
  const [idx, setIdx] = useState<number>(0)

  const prev = () => {
    setIdx(idx < 1 ? options.length - 1 : idx - 1)
  }

  const next = () => {
    setIdx(idx > options.length - 2 ? 0 : idx + 1)
  }

  useEffect(() => onChange(idx), [idx])

  return (
    <UiGroup key={idx}>
      <ActionIcon onClick={prev} size="xl">
        <IconArrowLeft size={30} />
      </ActionIcon>
      <UiStack gap="xs">
        <Group align="center" justify="center">
          <Text c="dimmed" size="xs">
            {label}
          </Text>
        </Group>
        <Text fw="bold">{options[selectedIndex || idx]}</Text>
      </UiStack>
      <ActionIcon onClick={next} size="xl">
        <IconArrowRight size={30} />
      </ActionIcon>
    </UiGroup>
  )
}

const AttributesArrowSelector = ({ attributeName }: { attributeName: string }) => {
  const { setAttributeValue, attributeValuesMap } = useCharacterDesign()

  const options = Object.keys(config.attributes[attributeName])
  const selectedIndex = options.indexOf(attributeValuesMap[attributeName])

  return (
    <div className="font-space-mono flex" key={attributeName}>
      <ArrowSelector
        options={options}
        label={attributeName}
        selectedIndex={selectedIndex}
        onChange={(newAttributeValueIndex) => {
          setAttributeValue(attributeName, options[newAttributeValueIndex])
        }}
      />
    </div>
  )
}

export function AttributeSelector() {
  return (
    <UiStack>
      <AttributesArrowSelector attributeName="Background" />
      <AttributesArrowSelector attributeName="Skin Color" />
      <AttributesArrowSelector attributeName="Head" />
      <AttributesArrowSelector attributeName="Face" />
      <AttributesArrowSelector attributeName="Torso" />
      <AttributesArrowSelector attributeName="Logo" />
      <AttributesArrowSelector attributeName="Legs" />
      <AttributesArrowSelector attributeName="Feet" />
    </UiStack>
  )
}
