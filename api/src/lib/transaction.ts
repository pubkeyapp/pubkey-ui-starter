import {
  Cluster,
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'

export type PostRequest = {
  account: string
}

export type PostResponse = {
  transaction: string
  message: string
  network: Cluster
}

// Main body of the POST request, this returns the transaction
export async function postImpl(network: Cluster, account: PublicKey, reference: PublicKey): Promise<PostResponse> {
  // Can also use a custom RPC here
  const endpoint = clusterApiUrl(network)
  const connection = new Connection(endpoint)

  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash()

  // Create any transaction
  const transaction = new Transaction({
    feePayer: account,
    blockhash,
    lastValidBlockHeight,
  })

  const transferInstruction = SystemProgram.transfer({
    fromPubkey: account,
    toPubkey: Keypair.generate().publicKey,
    lamports: LAMPORTS_PER_SOL / 1000,
  })

  // Add reference as a key to the instruction
  // This allows us to listen for this transaction
  transferInstruction.keys.push({
    pubkey: reference,
    isSigner: false,
    isWritable: false,
  })

  transaction.add(transferInstruction)

  // Serialize the transaction and convert to base64 to return it
  const serializedTransaction = transaction.serialize({
    requireAllSignatures: false, // account is a missing signature
  })
  const base64 = serializedTransaction.toString('base64')

  // Return the serialized transaction
  return {
    transaction: base64,
    message: 'Thank you for your purchase!',
    network,
  }
}
