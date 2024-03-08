import { NftDetailsModal } from '../components/modals/nft-details'
import { config } from '../config'
import { useCharacterDesign } from '../hooks/use-character-design'

export function Preview(props: { children: React.ReactNode; show: boolean; setState: (state: boolean) => void }) {
  const { attributeValuesMap, mediaState } = useCharacterDesign()

  return (
    <NftDetailsModal
      show={props.show}
      close={() => props.setState(false)}
      item={{
        id: '0',
        name: config.metadata.name,
        description: config.metadata.description,
        image: mediaState.data?.primary || '',
        secondaryImage: mediaState.data?.pfp || '',
        attributes: Object.entries(attributeValuesMap).map(([trait_type, value]) => ({
          trait_type,
          value,
        })),
      }}
    >
      {props.children}
    </NftDetailsModal>
  )
}
