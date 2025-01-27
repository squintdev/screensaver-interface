type NFT = {
    name: string
    description: string
    creator: string
    creationDate: Date
    image: string
    animation_url: string
    metadataUri: string
    media: {
      mimeType: string
      size: string
    },
    tags: string[]
    tokenId: number
}

export default NFT
