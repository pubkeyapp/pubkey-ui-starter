import { MintConfig } from './types'

const {
  COLLECTION_MINT = '',
  COLLECTION_METADATA_ACCOUNT = '',
  COLLECTION_MASTER_EDITION_ACCOUNT = '',
  SHADOW_ACCOUNT = '',
  MERKLE_TREE = '',
} = process.env

const assetUrl = `https://raw.githubusercontent.com/TipLink/opos-outliers/main/public/attributes`
export const config: MintConfig = {
  metadata: {
    name: 'OPOS Outliers',
    description: 'Unlimited compressed NFT characters. Only possible on Solana, powered by TipLink.',
    symbol: 'OPOSOUT',
    external_url: 'https://opos.quest',
    properties: {
      files: [],
      category: 'image',
    },
  },

  // Hardcoded values that represent the production environment
  productionEnvironment: {
    payer: 'p7X5mwA9CKX6uZz4xwwD9Jqg3hUE9PWfgV3QBQsYfoh',
    activeTree: 'tJTjTKqDdin8Xsjfb4Kx2vGcg1F7m19C53AUHnDcnCT',
    trees: ['tL2TAswGPHjtCvxN9ez5y8TDrAU1Pxh8PEVmHC8tiyy', 'tJTjTKqDdin8Xsjfb4Kx2vGcg1F7m19C53AUHnDcnCT'],
  },

  // Based on local environment
  tree: {
    publicKey: MERKLE_TREE,
    maxBufferSize: 64,
    maxDepth: 17,
    canopy: 8,
  },

  collection: {
    collectionMint: COLLECTION_MINT,
    collectionMetadataAccount: COLLECTION_METADATA_ACCOUNT,
    collectionMasterEditionAccount: COLLECTION_MASTER_EDITION_ACCOUNT,
    collectionMetadataUri:
      'https://shdw-drive.genesysgo.net/7J165fhor8ysTfu46LiKG76gsLzG33coqZQLqhvJYESy/1691558993463.json',
  },

  storage: {
    shadowAccount: SHADOW_ACCOUNT,
  },

  defaultAttributes: {
    Background: 'Abstract',
    'Skin Color': 'Human 1',
    Face: 'Smile',
    Head: 'TipLink Helmet',
    Torso: 'TipLink Shirt',
    Logo: 'TipLink',
    Legs: 'TipLink Pants',
    Feet: 'TipLink Shoes',
  },

  newAttributes: {
    Background: ['DAA'],
    Head: ['Dark Tippy', 'DAA', 'Samo', 'Bonk', 'Pony Tail 1', 'Pony Tail 2', 'Pony Tail 3', 'DAA', 'SMB'],
    Logo: ['Helium', 'Metaplex', 'Solana', 'Solarplex', 'Logo', 'Drift', '3Land'],
  },

  attributes: {
    Background: {
      Abstract: `${assetUrl}/Backgrounds/Abstract.png`,
      TipLink: `${assetUrl}/Backgrounds/TipLink.png?3`,
      DAA: `${assetUrl}/Backgrounds/DAA.png?2`,
      Blue: `${assetUrl}/Backgrounds/Blue.png`,
      Green: `${assetUrl}/Backgrounds/Green.png`,
      Grey: `${assetUrl}/Backgrounds/Grey.png`,
      Pink: `${assetUrl}/Backgrounds/Pink.png`,
      Purple: `${assetUrl}/Backgrounds/Purple.png`,
      Red: `${assetUrl}/Backgrounds/Red.png`,
      Solana: `${assetUrl}/Backgrounds/Solana.png`,
      White: `${assetUrl}/Backgrounds/White.png`,
      Yellow: `${assetUrl}/Backgrounds/Yellow.png`,
    },
    'Skin Color': {
      'Human 1': `${assetUrl}/Heads/Color/Skin1.png`,
      'Human 2': `${assetUrl}/Heads/Color/Skin2.png`,
      'Human 3': `${assetUrl}/Heads/Color/Skin3.png`,
      'Human 4': `${assetUrl}/Heads/Color/Skin4.png`,
      'Human 5': `${assetUrl}/Heads/Color/Skin5.png`,
      Alien: `${assetUrl}/Heads/Color/Alien.png`,
      Zombie: `${assetUrl}/Heads/Color/Zombie.png`,
      None: `${assetUrl}/None.png`,
    },
    Face: {
      Smile: `${assetUrl}/Heads/Faces/BasicSmile.png`,
      Cursed: `${assetUrl}/Heads/Faces/Cursed.png`,
      Duck: `${assetUrl}/Heads/Faces/Duck.png`,
      'Red Laser Eyes': `${assetUrl}/Heads/Faces/LaserEyesRed.png`,
      Scarecrow: `${assetUrl}/Heads/Faces/Scarecrow.png`,
      Vampire: `${assetUrl}/Heads/Faces/Vampire.png`,
      Visor: `${assetUrl}/Heads/Faces/Visor.png`,
      'Solana Viper': `${assetUrl}/Heads/Faces/SolanaViper.png`,
      'TipLink Viper': `${assetUrl}/Heads/Faces/TipLinkViper.png`,
      None: `${assetUrl}/None.png`,
    },
    Head: {
      Tippy: `${assetUrl}/Heads/Special/TippyHead.png`,
      'Dark Tippy': `${assetUrl}/Heads/Special/TippyHeadDark.png`,
      DAA: `${assetUrl}/Heads/Hair/Hair:Hat/DAA.png?3`,
      Samo: `${assetUrl}/Heads/Hair/Hair:Hat/Samo.png?3`,
      SMB: `${assetUrl}/Heads/Hair/Hair:Hat/SMB.png?3`,
      Bonk: `${assetUrl}/Heads/Hair/Hair:Hat/Bonk.png`,
      'Pony Tail 1': `${assetUrl}/Heads/Hair/Hair:Hat/Pony Tail1.png`,
      'Pony Tail 2': `${assetUrl}/Heads/Hair/Hair:Hat/Pony Tail2.png`,
      'Pony Tail 3': `${assetUrl}/Heads/Hair/Hair:Hat/Pony Tail3.png`,
      Baby: `${assetUrl}/Heads/Hair/Hair:Hat/Baby.png`,
      'Black Beanie': `${assetUrl}/Heads/Hair/Hair:Hat/BeanieBlack.png`,
      'Orange Beanie': `${assetUrl}/Heads/Hair/Hair:Hat/BeanieOrange.png`,
      'Solana Beanie': `${assetUrl}/Heads/Hair/Hair:Hat/BeanieSolana.png`,
      Daisy: `${assetUrl}/Heads/Hair/Hair:Hat/Daisy.png`,
      Horns: `${assetUrl}/Heads/Hair/Hair:Hat/DevilHorns.png`,
      Halo: `${assetUrl}/Heads/Hair/Hair:Hat/Halo.png`,
      'Black Hat': `${assetUrl}/Heads/Hair/Hair:Hat/Hat.png`,
      Headband: `${assetUrl}/Heads/Hair/Hair:Hat/Headband.png`,
      Mohawk: `${assetUrl}/Heads/Hair/Hair:Hat/Mohawk.png`,
      None: `${assetUrl}/None.png`,
    },
    Torso: {
      'TipLink Shirt': `${assetUrl}/Torso/Shirt/White.png`,
      'Black Shirt': `${assetUrl}/Torso/Shirt/Black.png`,
      'Blue Shirt': `${assetUrl}/Torso/Shirt/Blue.png`,
      'Gold Shirt': `${assetUrl}/Torso/Shirt/Gold.png`,
      'Green Shirt': `${assetUrl}/Torso/Shirt/Green.png`,
      'Grey Shirt': `${assetUrl}/Torso/Shirt/Grey.png`,
      'Red Shirt': `${assetUrl}/Torso/Shirt/Red.png`,
      'Solana Blue Shirt': `${assetUrl}/Torso/Shirt/SolBlue.png`,
      'Solana Green Shirt': `${assetUrl}/Torso/Shirt/SolGreen.png`,
      'Solana Purple Shirt': `${assetUrl}/Torso/Shirt/SolPurple.png`,
      None: `${assetUrl}/None.png`,
    },
    Logo: {
      TipLink: `${assetUrl}/Torso/Logos/TipLink.png`,
      Helius: `${assetUrl}/Torso/Logos/Helius.png?2`,
      Helium: `${assetUrl}/Torso/Logos/Helium.png?1`,
      Metaplex: `${assetUrl}/Torso/Logos/Metaplex.png`,
      Solana: `${assetUrl}/Torso/Logos/Solana.png`,
      Solarplex: `${assetUrl}/Torso/Logos/Solarplex.png`,
      Drift: `${assetUrl}/Torso/Logos/Drift.png?1`,
      '3Land': `${assetUrl}/Torso/Logos/3Land.png`,
      None: `${assetUrl}/None.png`,
    },
    Legs: {
      'TipLink Pants': `${assetUrl}/Legs/Pants/Blue.png`,
      'Brown Pants': `${assetUrl}/Legs/Pants/Brown.png`,
      'Dark Grey Pants': `${assetUrl}/Legs/Pants/DarkGrey.png`,
      'Light Grey Pants': `${assetUrl}/Legs/Pants/LightGrey.png`,
      'Gold Pants': `${assetUrl}/Legs/Pants/Gold.png`,
      'Green Pants': `${assetUrl}/Legs/Pants/Green.png`,
      'Khaki Pants': `${assetUrl}/Legs/Pants/Khaki.png`,
      'Magenta Pants': `${assetUrl}/Legs/Pants/Magenta.png`,
      'Red Pants': `${assetUrl}/Legs/Pants/Red.png`,
      'Solana Pants': `${assetUrl}/Legs/Pants/Solana.png`,
      None: `${assetUrl}/None.png`,
    },
    Feet: {
      'TipLink Shoes': `${assetUrl}/Feet/Shoes/Grey.png`,
      'Black Shoes': `${assetUrl}/Feet/Shoes/Black.png`,
      'White Shoes': `${assetUrl}/Feet/Shoes/White.png`,
      'Blue Shoes': `${assetUrl}/Feet/Shoes/Blue.png`,
      'Gold Shoes': `${assetUrl}/Feet/Shoes/Gold.png`,
      'Green Shoes': `${assetUrl}/Feet/Shoes/Green.png`,
      'Red Shoes': `${assetUrl}/Feet/Shoes/Red.png`,
      'Solana Blue Shoes': `${assetUrl}/Feet/Shoes/SolBlue.png`,
      'Solana Green Shoes': `${assetUrl}/Feet/Shoes/SolGreen.png`,
      'Solana Purple Shoes': `${assetUrl}/Feet/Shoes/SolPurple.png`,
      None: `${assetUrl}/None.png`,
    },
  },
}
