import { Button } from '@mantine/core'
import { useCharacterDesign } from '../hooks/use-character-design'

export function MintButton() {
  const { mint, mediaState, isMinting } = useCharacterDesign()

  return (
    <div className="w-full">
      {isMinting && (
        <div>
          <p>Minting...</p>

          <progress className="progress w-full"></progress>
        </div>
      )}

      <Button color={mediaState.data ? 'success' : 'gray'} loading={isMinting} onClick={mint}>
        Free!
      </Button>
    </div>
  )
}
