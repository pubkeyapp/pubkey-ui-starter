export type AttributesConfig = {
  [Attribute: string]: {
    [value: string]: string
  }
}

export type AttributesMap = {
  [key: string]: string
}

export type Account = {
  address: string
  balance: number
}

export type MintConfig = {
  // Attribute combinations
  attributes: AttributesConfig
}

export type MediaResponse = {
  primary?: string
  pfp?: string
}
