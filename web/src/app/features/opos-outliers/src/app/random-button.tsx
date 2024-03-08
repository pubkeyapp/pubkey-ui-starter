import { Button } from '@mantine/core'
import { useCharacterDesign } from '../hooks/use-character-design'

export function RandomButton() {
  const { randomize } = useCharacterDesign()

  return (
    <Button fullWidth onClick={randomize}>
      Random
    </Button>
  )
}
