import { ChainId } from '@sushiswap/chain'

export enum ProtocolVersion {
  V2 = 'V2',
  LEGACY = 'LEGACY',
  TRIDENT = 'TRIDENT',
  V3 = 'V3',
}

export enum ProtocolName {
  SUSHISWAP = 'SushiSwap',
  UNISWAP = 'UniSwap',
  PANCAKESWAP = 'PancakeSwap',
  QUICKSWAP = 'QuickSwap',
  SWAPFISH = 'SwapFish',
  TRADERJOE = 'TraderJoe',
  SPOOKYSWAP = 'SpookySwap',
  UBESWAP = 'UbeSwap',
}

export enum PoolType {
  CONSTANT_PRODUCT_POOL = 'CONSTANT_PRODUCT_POOL',
  STABLE_POOL = 'STABLE_POOL',
  CONCENTRATED_LIQUIDITY_POOL = 'CONCENTRATED_LIQUIDITY_POOL',
}

export enum Price {
  USD = 'USD',
  NATIVE = 'NATIVE',
}

const GRAPH_HOST_ENDPOINT = 'api.thegraph.com'
const SUSHI_HOST_ENDPOINT = 'subgraphs.sushi.com'

export const GRAPH_HOST: Record<number | string, string> = {
  [ChainId.OPTIMISM]: GRAPH_HOST_ENDPOINT,
  [ChainId.ETHEREUM]: GRAPH_HOST_ENDPOINT,
  [ChainId.AVALANCHE]: GRAPH_HOST_ENDPOINT,
  [ChainId.ARBITRUM]: GRAPH_HOST_ENDPOINT,
  [ChainId.BSC]: GRAPH_HOST_ENDPOINT,
  [ChainId.CELO]: GRAPH_HOST_ENDPOINT,
  [ChainId.FANTOM]: GRAPH_HOST_ENDPOINT,
  [ChainId.FUSE]: GRAPH_HOST_ENDPOINT,
  [ChainId.GNOSIS]: GRAPH_HOST_ENDPOINT,
  [ChainId.MOONBEAM]: GRAPH_HOST_ENDPOINT,
  [ChainId.MOONRIVER]: GRAPH_HOST_ENDPOINT,
  [ChainId.HARMONY]: GRAPH_HOST_ENDPOINT,
  [ChainId.POLYGON]: GRAPH_HOST_ENDPOINT,
  [ChainId.KAVA]: 'pvt.graph.kava.io',
  [ChainId.METIS]: 'andromeda.thegraph.metis.io',
  [ChainId.ARBITRUM_NOVA]: SUSHI_HOST_ENDPOINT,
  [ChainId.BOBA]: GRAPH_HOST_ENDPOINT,
  [ChainId.BTTC]: SUSHI_HOST_ENDPOINT,
}

// SUSHISWAP
export const SUSHISWAP_CHAINS = [
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
  ChainId.CELO,
  ChainId.ETHEREUM,
  ChainId.FANTOM,
  ChainId.FUSE,
  ChainId.GNOSIS,
  ChainId.MOONBEAM,
  ChainId.MOONRIVER,
  ChainId.POLYGON,
  ChainId.HARMONY,
  ChainId.ARBITRUM_NOVA,
  ChainId.BOBA,
]

export const TRIDENT_CHAINS = [
  ChainId.POLYGON,
  ChainId.OPTIMISM,
  ChainId.METIS,
  ChainId.KAVA,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
  ChainId.BTTC,
]

export const LEGACY_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.ETHEREUM]: 'sushiswap-subgraphs/sushiswap-ethereum',
  [ChainId.AVALANCHE]: 'sushi-0m/sushiswap-avalanche',
  [ChainId.ARBITRUM]: 'sushi-0m/sushiswap-arbitrum',
  [ChainId.BSC]: 'subgraph-qa/sushiswap-bsc',
  [ChainId.CELO]: 'sushi-0m/sushiswap-celo',
  [ChainId.FANTOM]: 'sushi-0m/sushiswap-fantom',
  [ChainId.FUSE]: 'sushi-0m/sushiswap-fuse',
  [ChainId.GNOSIS]: 'sushi-0m/sushiswap-gnosis',
  [ChainId.MOONBEAM]: 'sushi-0m/sushiswap-moonbeam',
  [ChainId.MOONRIVER]: 'sushi-0m/sushiswap-moonriver',
  [ChainId.HARMONY]: 'olastenberg/sushiswap-harmony-fix',
  [ChainId.ARBITRUM_NOVA]: 'sushi-0m/sushiswap-arbitrum-nova',
  // [ChainId.BOBA_AVAX]: 'sushi-0m/sushiswap-boba-avax',
  [ChainId.POLYGON]: 'subgraph-qa/sushiswap-polygon',
  [ChainId.BOBA]: 'sushi-0m/sushiswap-boba',
}

export const TRIDENT_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.POLYGON]: 'sushi-qa/trident-polygon',
  [ChainId.OPTIMISM]: 'sushi-qa/trident-optimism',
  [ChainId.METIS]: 'sushi-qa/trident-metis',
  [ChainId.KAVA]: 'sushi-qa/trident-kava',
  [ChainId.ARBITRUM]: 'sushi-qa/trident-arbitrum',
  [ChainId.AVALANCHE]: 'sushi-qa/trident-avalanche',
  [ChainId.BSC]: 'sushi-qa/trident-bsc',
  [ChainId.BTTC]: 'sushi-qa/trident-bttc',
}

export const SUSHI_SUPPORTED_CHAINS = Array.from(new Set([...SUSHISWAP_CHAINS, ...TRIDENT_CHAINS]))

// PANCAKESWAP
export const PANCAKESWAP_V2_SUPPORTED_CHAINS = [ChainId.BSC]

export const PANCAKESWAP_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.BSC]: 'pancakeswap/pairs',
}

// UNISWAP
export const UNISWAP_V2_SUPPORTED_CHAINS = [ChainId.ETHEREUM]
export const UNISWAP_V2_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.ETHEREUM]: 'uniswap/uniswap-v2',
}

export const UNISWAP_V3_SUPPORTED_CHAINS = [ChainId.ETHEREUM, ChainId.POLYGON, ChainId.ARBITRUM]
export const UNISWAP_V3_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.ETHEREUM]: 'uniswap/uniswap-v3',
  [ChainId.ARBITRUM]: 'ianlapham/arbitrum-minimal',
  [ChainId.POLYGON]: 'ianlapham/uniswap-v3-polygon',
  //messari/uniswap-v3-optimism
}

// QUICKSWAP
export const QUICKSWAP_SUPPORTED_CHAINS = [ChainId.POLYGON]
export const QUICKSWAP_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.POLYGON]: 'sameepsi/quickswap06',
}

// SWAPFISH
export const SWAPFISH_SUPPORTED_CHAINS = [ChainId.ARBITRUM]
export const SWAPFISH_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.ARBITRUM]: 'swapfish/swapfish',
}

// TRADERJOE
export const TRADERJOE_V2_SUPPORTED_CHAINS = [ChainId.AVALANCHE]
export const TRADERJOE_V2_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.AVALANCHE]: 'traderjoe-xyz/exchange',
}

// SPOOKYSWAP
export const SPOOKYSWAP_V2_SUPPORTED_CHAINS = [ChainId.FANTOM]
export const SPOOKYSWAP_V2_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.FANTOM]: 'int3grtor/spooky-exchange',
}

// UBESWAP
export const UBESWAP_V2_SUPPORTED_CHAINS = [ChainId.CELO]
export const UBESWAP_V2_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.CELO]: 'ubeswap/ubeswap',
}

