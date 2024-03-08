'use client'

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { config } from '../config'
import { AttributesMap, MintConfig } from '../types'
import { useGenerateMedia } from './use-generate'
import { useMintStaged, useStageMint } from './use-mint'

export type CharacterDesign = {
  config: MintConfig
  mintState: any
  stagedMintState: any
  attributeValuesMap: AttributesMap
  mediaState: any
  showConfirmMint: boolean
  isMinting: boolean
  setAttributeValue: (attributeName: string, newValue: string) => void
  generatePreview: () => void
  randomize: () => void
  setShowConfirmMint: (value: boolean) => void
  mint: () => void
}
export const CharacterDesignContext = createContext<CharacterDesign>(undefined!)

export const useCharacterDesign = () => useContext(CharacterDesignContext)

const randomItem = (arr: any[]) => {
  let item

  while (item === 'None' || !item) {
    item = arr[Math.floor(Math.random() * arr.length)]
  }

  return item
}

const randomKey = (obj: Record<string, any>) => randomItem(Object.keys(obj))

export function CharacterDesignProvider({ children }: { children: ReactNode; config: MintConfig }) {
  const [attributeValuesMap, setAttributeValuesMap] = useState<AttributesMap>({
    Background: 'Abstract',
    'Skin Color': 'Human 1',
    Face: 'Smile',
    Head: 'TipLink Helmet',
    Torso: 'TipLink Shirt',
    Logo: 'TipLink',
    Legs: 'TipLink Pants',
    Feet: 'TipLink Shoes',
  })

  const [showConfirmMint, setShowConfirmMint] = useState(false)

  const { stagedMintState, stageMint } = useStageMint()

  const { mintState, mintStaged } = useMintStaged()

  const { mediaState, generatePreview } = useGenerateMedia()

  const [isMinting, setIsMinting] = useState(false)

  const setAttributeValue = (attributeName: string, newValue: string) => {
    attributeValuesMap[attributeName] = newValue

    setAttributeValuesMap({ ...attributeValuesMap })
  }

  const randomize = () => {
    const random = {} as Record<string, any>

    for (const key in config.attributes) {
      random[key] = randomKey(config.attributes[key])

      setAttributeValuesMap(random)
    }
  }

  const mint = async () => {
    if (isMinting) {
      return
    }

    console.log('Minting character...')
  }

  const generate = () => generatePreview(attributeValuesMap)

  // Generate preview on attribute change
  useEffect(() => {
    generate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeValuesMap])

  const value = {
    config,

    // State
    mintState,
    stagedMintState,
    attributeValuesMap,
    mediaState,
    showConfirmMint,
    isMinting,

    // Actions
    setAttributeValue,
    generatePreview: generate,
    randomize,
    setShowConfirmMint,

    // Perform character mint
    mint,
  }

  return <CharacterDesignContext.Provider value={value}>{children}</CharacterDesignContext.Provider>
}
