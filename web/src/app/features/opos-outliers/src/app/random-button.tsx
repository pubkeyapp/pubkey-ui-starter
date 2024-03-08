import { useCharacterDesign } from '../hooks/use-character-design'

export function RandomButton() {
  const { randomize } = useCharacterDesign()

  return (
    <button className="btn bg-secondary w-full border border-0 font-space-mono" onClick={randomize}>
      Random
    </button>
  )
}
