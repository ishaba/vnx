import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    BigDecimal: any,
    BigInt: any,
    Boolean: boolean,
    Bytes: any,
    Float: number,
    ID: string,
    Int: number,
    Int8: any,
    String: string,
}

export interface Bundle {
    id: Scalars['ID']
    ethPriceUSD: Scalars['BigDecimal']
    __typename: 'Bundle'
}

export type Bundle_orderBy = 'id' | 'ethPriceUSD'

export interface Burn {
    id: Scalars['ID']
    transaction: Transaction
    pool: Pool
    token0: Token
    token1: Token
    timestamp: Scalars['BigInt']
    owner?: Scalars['Bytes']
    origin: Scalars['Bytes']
    amount: Scalars['BigInt']
    amount0: Scalars['BigDecimal']
    amount1: Scalars['BigDecimal']
    amountUSD?: Scalars['BigDecimal']
    tickLower: Scalars['BigInt']
    tickUpper: Scalars['BigInt']
    logIndex?: Scalars['BigInt']
    __typename: 'Burn'
}

export type Burn_orderBy = 'id' | 'transaction' | 'transaction__id' | 'transaction__blockNumber' | 'transaction__timestamp' | 'transaction__gasUsed' | 'transaction__gasPrice' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'token0' | 'token0__id' | 'token0__symbol' | 'token0__name' | 'token0__decimals' | 'token0__totalSupply' | 'token0__volume' | 'token0__volumeUSD' | 'token0__untrackedVolumeUSD' | 'token0__feesUSD' | 'token0__txCount' | 'token0__poolCount' | 'token0__totalValueLocked' | 'token0__totalValueLockedUSD' | 'token0__totalValueLockedUSDUntracked' | 'token0__derivedETH' | 'token1' | 'token1__id' | 'token1__symbol' | 'token1__name' | 'token1__decimals' | 'token1__totalSupply' | 'token1__volume' | 'token1__volumeUSD' | 'token1__untrackedVolumeUSD' | 'token1__feesUSD' | 'token1__txCount' | 'token1__poolCount' | 'token1__totalValueLocked' | 'token1__totalValueLockedUSD' | 'token1__totalValueLockedUSDUntracked' | 'token1__derivedETH' | 'timestamp' | 'owner' | 'origin' | 'amount' | 'amount0' | 'amount1' | 'amountUSD' | 'tickLower' | 'tickUpper' | 'logIndex'

export interface Collect {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pool: Pool
    owner?: Scalars['Bytes']
    amount0: Scalars['BigDecimal']
    amount1: Scalars['BigDecimal']
    amountUSD?: Scalars['BigDecimal']
    tickLower: Scalars['BigInt']
    tickUpper: Scalars['BigInt']
    logIndex?: Scalars['BigInt']
    __typename: 'Collect'
}

export type Collect_orderBy = 'id' | 'transaction' | 'transaction__id' | 'transaction__blockNumber' | 'transaction__timestamp' | 'transaction__gasUsed' | 'transaction__gasPrice' | 'timestamp' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'owner' | 'amount0' | 'amount1' | 'amountUSD' | 'tickLower' | 'tickUpper' | 'logIndex'

export interface Factory {
    id: Scalars['ID']
    poolCount: Scalars['BigInt']
    txCount: Scalars['BigInt']
    totalVolumeUSD: Scalars['BigDecimal']
    totalVolumeETH: Scalars['BigDecimal']
    totalFeesUSD: Scalars['BigDecimal']
    totalFeesETH: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    totalValueLockedUSD: Scalars['BigDecimal']
    totalValueLockedETH: Scalars['BigDecimal']
    totalValueLockedUSDUntracked: Scalars['BigDecimal']
    totalValueLockedETHUntracked: Scalars['BigDecimal']
    owner: Scalars['ID']
    __typename: 'Factory'
}

export type Factory_orderBy = 'id' | 'poolCount' | 'txCount' | 'totalVolumeUSD' | 'totalVolumeETH' | 'totalFeesUSD' | 'totalFeesETH' | 'untrackedVolumeUSD' | 'totalValueLockedUSD' | 'totalValueLockedETH' | 'totalValueLockedUSDUntracked' | 'totalValueLockedETHUntracked' | 'owner'

export interface Flash {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pool: Pool
    sender: Scalars['Bytes']
    recipient: Scalars['Bytes']
    amount0: Scalars['BigDecimal']
    amount1: Scalars['BigDecimal']
    amountUSD: Scalars['BigDecimal']
    amount0Paid: Scalars['BigDecimal']
    amount1Paid: Scalars['BigDecimal']
    logIndex?: Scalars['BigInt']
    __typename: 'Flash'
}

export type Flash_orderBy = 'id' | 'transaction' | 'transaction__id' | 'transaction__blockNumber' | 'transaction__timestamp' | 'transaction__gasUsed' | 'transaction__gasPrice' | 'timestamp' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'sender' | 'recipient' | 'amount0' | 'amount1' | 'amountUSD' | 'amount0Paid' | 'amount1Paid' | 'logIndex'

export interface Incentive {
    id: Scalars['ID']
    rewardToken: Scalars['Bytes']
    pool: Scalars['Bytes']
    startTime: Scalars['BigInt']
    endTime: Scalars['BigInt']
    refundee: Scalars['Bytes']
    reward: Scalars['BigInt']
    ended: Scalars['Boolean']
    __typename: 'Incentive'
}

export type Incentive_orderBy = 'id' | 'rewardToken' | 'pool' | 'startTime' | 'endTime' | 'refundee' | 'reward' | 'ended'

export interface Mint {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pool: Pool
    token0: Token
    token1: Token
    owner: Scalars['Bytes']
    sender?: Scalars['Bytes']
    origin: Scalars['Bytes']
    amount: Scalars['BigInt']
    amount0: Scalars['BigDecimal']
    amount1: Scalars['BigDecimal']
    amountUSD?: Scalars['BigDecimal']
    tickLower: Scalars['BigInt']
    tickUpper: Scalars['BigInt']
    logIndex?: Scalars['BigInt']
    __typename: 'Mint'
}

export type Mint_orderBy = 'id' | 'transaction' | 'transaction__id' | 'transaction__blockNumber' | 'transaction__timestamp' | 'transaction__gasUsed' | 'transaction__gasPrice' | 'timestamp' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'token0' | 'token0__id' | 'token0__symbol' | 'token0__name' | 'token0__decimals' | 'token0__totalSupply' | 'token0__volume' | 'token0__volumeUSD' | 'token0__untrackedVolumeUSD' | 'token0__feesUSD' | 'token0__txCount' | 'token0__poolCount' | 'token0__totalValueLocked' | 'token0__totalValueLockedUSD' | 'token0__totalValueLockedUSDUntracked' | 'token0__derivedETH' | 'token1' | 'token1__id' | 'token1__symbol' | 'token1__name' | 'token1__decimals' | 'token1__totalSupply' | 'token1__volume' | 'token1__volumeUSD' | 'token1__untrackedVolumeUSD' | 'token1__feesUSD' | 'token1__txCount' | 'token1__poolCount' | 'token1__totalValueLocked' | 'token1__totalValueLockedUSD' | 'token1__totalValueLockedUSDUntracked' | 'token1__derivedETH' | 'owner' | 'sender' | 'origin' | 'amount' | 'amount0' | 'amount1' | 'amountUSD' | 'tickLower' | 'tickUpper' | 'logIndex'


/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export interface Pool {
    id: Scalars['ID']
    createdAtTimestamp: Scalars['BigInt']
    createdAtBlockNumber: Scalars['BigInt']
    token0: Token
    token1: Token
    feeTier: Scalars['BigInt']
    liquidity: Scalars['BigInt']
    sqrtPrice: Scalars['BigInt']
    feeGrowthGlobal0X128: Scalars['BigInt']
    feeGrowthGlobal1X128: Scalars['BigInt']
    token0Price: Scalars['BigDecimal']
    token1Price: Scalars['BigDecimal']
    tick?: Scalars['BigInt']
    observationIndex: Scalars['BigInt']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    collectedFeesToken0: Scalars['BigDecimal']
    collectedFeesToken1: Scalars['BigDecimal']
    collectedFeesUSD: Scalars['BigDecimal']
    totalValueLockedToken0: Scalars['BigDecimal']
    totalValueLockedToken1: Scalars['BigDecimal']
    totalValueLockedETH: Scalars['BigDecimal']
    totalValueLockedUSD: Scalars['BigDecimal']
    totalValueLockedUSDUntracked: Scalars['BigDecimal']
    liquidityProviderCount: Scalars['BigInt']
    poolHourData: PoolHourData[]
    poolDayData: PoolDayData[]
    mints: Mint[]
    burns: Burn[]
    swaps: Swap[]
    collects: Collect[]
    ticks: Tick[]
    __typename: 'Pool'
}

export interface PoolDayData {
    id: Scalars['ID']
    date: Scalars['Int']
    pool: Pool
    liquidity: Scalars['BigInt']
    sqrtPrice: Scalars['BigInt']
    token0Price: Scalars['BigDecimal']
    token1Price: Scalars['BigDecimal']
    tick?: Scalars['BigInt']
    feeGrowthGlobal0X128: Scalars['BigInt']
    feeGrowthGlobal1X128: Scalars['BigInt']
    tvlUSD: Scalars['BigDecimal']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    open: Scalars['BigDecimal']
    high: Scalars['BigDecimal']
    low: Scalars['BigDecimal']
    close: Scalars['BigDecimal']
    __typename: 'PoolDayData'
}

export type PoolDayData_orderBy = 'id' | 'date' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'liquidity' | 'sqrtPrice' | 'token0Price' | 'token1Price' | 'tick' | 'feeGrowthGlobal0X128' | 'feeGrowthGlobal1X128' | 'tvlUSD' | 'volumeToken0' | 'volumeToken1' | 'volumeUSD' | 'feesUSD' | 'txCount' | 'open' | 'high' | 'low' | 'close'

export interface PoolHourData {
    id: Scalars['ID']
    periodStartUnix: Scalars['Int']
    pool: Pool
    liquidity: Scalars['BigInt']
    sqrtPrice: Scalars['BigInt']
    token0Price: Scalars['BigDecimal']
    token1Price: Scalars['BigDecimal']
    tick?: Scalars['BigInt']
    feeGrowthGlobal0X128: Scalars['BigInt']
    feeGrowthGlobal1X128: Scalars['BigInt']
    tvlUSD: Scalars['BigDecimal']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    open: Scalars['BigDecimal']
    high: Scalars['BigDecimal']
    low: Scalars['BigDecimal']
    close: Scalars['BigDecimal']
    __typename: 'PoolHourData'
}

export type PoolHourData_orderBy = 'id' | 'periodStartUnix' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'liquidity' | 'sqrtPrice' | 'token0Price' | 'token1Price' | 'tick' | 'feeGrowthGlobal0X128' | 'feeGrowthGlobal1X128' | 'tvlUSD' | 'volumeToken0' | 'volumeToken1' | 'volumeUSD' | 'feesUSD' | 'txCount' | 'open' | 'high' | 'low' | 'close'

export type Pool_orderBy = 'id' | 'createdAtTimestamp' | 'createdAtBlockNumber' | 'token0' | 'token0__id' | 'token0__symbol' | 'token0__name' | 'token0__decimals' | 'token0__totalSupply' | 'token0__volume' | 'token0__volumeUSD' | 'token0__untrackedVolumeUSD' | 'token0__feesUSD' | 'token0__txCount' | 'token0__poolCount' | 'token0__totalValueLocked' | 'token0__totalValueLockedUSD' | 'token0__totalValueLockedUSDUntracked' | 'token0__derivedETH' | 'token1' | 'token1__id' | 'token1__symbol' | 'token1__name' | 'token1__decimals' | 'token1__totalSupply' | 'token1__volume' | 'token1__volumeUSD' | 'token1__untrackedVolumeUSD' | 'token1__feesUSD' | 'token1__txCount' | 'token1__poolCount' | 'token1__totalValueLocked' | 'token1__totalValueLockedUSD' | 'token1__totalValueLockedUSDUntracked' | 'token1__derivedETH' | 'feeTier' | 'liquidity' | 'sqrtPrice' | 'feeGrowthGlobal0X128' | 'feeGrowthGlobal1X128' | 'token0Price' | 'token1Price' | 'tick' | 'observationIndex' | 'volumeToken0' | 'volumeToken1' | 'volumeUSD' | 'untrackedVolumeUSD' | 'feesUSD' | 'txCount' | 'collectedFeesToken0' | 'collectedFeesToken1' | 'collectedFeesUSD' | 'totalValueLockedToken0' | 'totalValueLockedToken1' | 'totalValueLockedETH' | 'totalValueLockedUSD' | 'totalValueLockedUSDUntracked' | 'liquidityProviderCount' | 'poolHourData' | 'poolDayData' | 'mints' | 'burns' | 'swaps' | 'collects' | 'ticks'

export interface Position {
    id: Scalars['ID']
    tokenId: Scalars['BigInt']
    owner: Scalars['Bytes']
    staked: Scalars['Boolean']
    oldOwner?: Scalars['Bytes']
    liquidity: Scalars['BigInt']
    approved?: Scalars['Bytes']
    incentiveId?: Scalars['Bytes']
    __typename: 'Position'
}

export interface PositionSnapshot {
    id: Scalars['ID']
    owner: Scalars['Bytes']
    pool: Pool
    position: Position
    blockNumber: Scalars['BigInt']
    timestamp: Scalars['BigInt']
    liquidity: Scalars['BigInt']
    depositedToken0: Scalars['BigDecimal']
    depositedToken1: Scalars['BigDecimal']
    withdrawnToken0: Scalars['BigDecimal']
    withdrawnToken1: Scalars['BigDecimal']
    collectedFeesToken0: Scalars['BigDecimal']
    collectedFeesToken1: Scalars['BigDecimal']
    transaction: Transaction
    feeGrowthInside0LastX128: Scalars['BigInt']
    feeGrowthInside1LastX128: Scalars['BigInt']
    __typename: 'PositionSnapshot'
}

export type PositionSnapshot_orderBy = 'id' | 'owner' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'position' | 'position__id' | 'position__tokenId' | 'position__owner' | 'position__staked' | 'position__oldOwner' | 'position__liquidity' | 'position__approved' | 'position__incentiveId' | 'blockNumber' | 'timestamp' | 'liquidity' | 'depositedToken0' | 'depositedToken1' | 'withdrawnToken0' | 'withdrawnToken1' | 'collectedFeesToken0' | 'collectedFeesToken1' | 'transaction' | 'transaction__id' | 'transaction__blockNumber' | 'transaction__timestamp' | 'transaction__gasUsed' | 'transaction__gasPrice' | 'feeGrowthInside0LastX128' | 'feeGrowthInside1LastX128'

export type Position_orderBy = 'id' | 'tokenId' | 'owner' | 'staked' | 'oldOwner' | 'liquidity' | 'approved' | 'incentiveId'

export interface Query {
    incentive?: Incentive
    incentives: Incentive[]
    position?: Position
    positions: Position[]
    factory?: Factory
    factories: Factory[]
    bundle?: Bundle
    bundles: Bundle[]
    token?: Token
    tokens: Token[]
    pool?: Pool
    pools: Pool[]
    tick?: Tick
    ticks: Tick[]
    positionSnapshot?: PositionSnapshot
    positionSnapshots: PositionSnapshot[]
    transaction?: Transaction
    transactions: Transaction[]
    mint?: Mint
    mints: Mint[]
    burn?: Burn
    burns: Burn[]
    swap?: Swap
    swaps: Swap[]
    collect?: Collect
    collects: Collect[]
    flash?: Flash
    flashes: Flash[]
    uniswapDayData?: UniswapDayData
    uniswapDayDatas: UniswapDayData[]
    poolDayData?: PoolDayData
    poolDayDatas: PoolDayData[]
    poolHourData?: PoolHourData
    poolHourDatas: PoolHourData[]
    tickHourData?: TickHourData
    tickHourDatas: TickHourData[]
    tickDayData?: TickDayData
    tickDayDatas: TickDayData[]
    tokenDayData?: TokenDayData
    tokenDayDatas: TokenDayData[]
    tokenHourData?: TokenHourData
    tokenHourDatas: TokenHourData[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Query'
}

export interface Subscription {
    incentive?: Incentive
    incentives: Incentive[]
    position?: Position
    positions: Position[]
    factory?: Factory
    factories: Factory[]
    bundle?: Bundle
    bundles: Bundle[]
    token?: Token
    tokens: Token[]
    pool?: Pool
    pools: Pool[]
    tick?: Tick
    ticks: Tick[]
    positionSnapshot?: PositionSnapshot
    positionSnapshots: PositionSnapshot[]
    transaction?: Transaction
    transactions: Transaction[]
    mint?: Mint
    mints: Mint[]
    burn?: Burn
    burns: Burn[]
    swap?: Swap
    swaps: Swap[]
    collect?: Collect
    collects: Collect[]
    flash?: Flash
    flashes: Flash[]
    uniswapDayData?: UniswapDayData
    uniswapDayDatas: UniswapDayData[]
    poolDayData?: PoolDayData
    poolDayDatas: PoolDayData[]
    poolHourData?: PoolHourData
    poolHourDatas: PoolHourData[]
    tickHourData?: TickHourData
    tickHourDatas: TickHourData[]
    tickDayData?: TickDayData
    tickDayDatas: TickDayData[]
    tokenDayData?: TokenDayData
    tokenDayDatas: TokenDayData[]
    tokenHourData?: TokenHourData
    tokenHourDatas: TokenHourData[]
    /** Access to subgraph metadata */
    _meta?: _Meta_
    __typename: 'Subscription'
}

export interface Swap {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pool: Pool
    token0: Token
    token1: Token
    sender: Scalars['Bytes']
    recipient: Scalars['Bytes']
    origin: Scalars['Bytes']
    amount0: Scalars['BigDecimal']
    amount1: Scalars['BigDecimal']
    amountUSD: Scalars['BigDecimal']
    sqrtPriceX96: Scalars['BigInt']
    tick: Scalars['BigInt']
    logIndex?: Scalars['BigInt']
    __typename: 'Swap'
}

export type Swap_orderBy = 'id' | 'transaction' | 'transaction__id' | 'transaction__blockNumber' | 'transaction__timestamp' | 'transaction__gasUsed' | 'transaction__gasPrice' | 'timestamp' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'token0' | 'token0__id' | 'token0__symbol' | 'token0__name' | 'token0__decimals' | 'token0__totalSupply' | 'token0__volume' | 'token0__volumeUSD' | 'token0__untrackedVolumeUSD' | 'token0__feesUSD' | 'token0__txCount' | 'token0__poolCount' | 'token0__totalValueLocked' | 'token0__totalValueLockedUSD' | 'token0__totalValueLockedUSDUntracked' | 'token0__derivedETH' | 'token1' | 'token1__id' | 'token1__symbol' | 'token1__name' | 'token1__decimals' | 'token1__totalSupply' | 'token1__volume' | 'token1__volumeUSD' | 'token1__untrackedVolumeUSD' | 'token1__feesUSD' | 'token1__txCount' | 'token1__poolCount' | 'token1__totalValueLocked' | 'token1__totalValueLockedUSD' | 'token1__totalValueLockedUSDUntracked' | 'token1__derivedETH' | 'sender' | 'recipient' | 'origin' | 'amount0' | 'amount1' | 'amountUSD' | 'sqrtPriceX96' | 'tick' | 'logIndex'

export interface Tick {
    id: Scalars['ID']
    poolAddress?: Scalars['String']
    tickIdx: Scalars['BigInt']
    pool: Pool
    liquidityGross: Scalars['BigInt']
    liquidityNet: Scalars['BigInt']
    price0: Scalars['BigDecimal']
    price1: Scalars['BigDecimal']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    collectedFeesToken0: Scalars['BigDecimal']
    collectedFeesToken1: Scalars['BigDecimal']
    collectedFeesUSD: Scalars['BigDecimal']
    createdAtTimestamp: Scalars['BigInt']
    createdAtBlockNumber: Scalars['BigInt']
    liquidityProviderCount: Scalars['BigInt']
    feeGrowthOutside0X128: Scalars['BigInt']
    feeGrowthOutside1X128: Scalars['BigInt']
    __typename: 'Tick'
}

export interface TickDayData {
    id: Scalars['ID']
    date: Scalars['Int']
    pool: Pool
    tick: Tick
    liquidityGross: Scalars['BigInt']
    liquidityNet: Scalars['BigInt']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    feeGrowthOutside0X128: Scalars['BigInt']
    feeGrowthOutside1X128: Scalars['BigInt']
    __typename: 'TickDayData'
}

export type TickDayData_orderBy = 'id' | 'date' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'tick' | 'tick__id' | 'tick__poolAddress' | 'tick__tickIdx' | 'tick__liquidityGross' | 'tick__liquidityNet' | 'tick__price0' | 'tick__price1' | 'tick__volumeToken0' | 'tick__volumeToken1' | 'tick__volumeUSD' | 'tick__untrackedVolumeUSD' | 'tick__feesUSD' | 'tick__collectedFeesToken0' | 'tick__collectedFeesToken1' | 'tick__collectedFeesUSD' | 'tick__createdAtTimestamp' | 'tick__createdAtBlockNumber' | 'tick__liquidityProviderCount' | 'tick__feeGrowthOutside0X128' | 'tick__feeGrowthOutside1X128' | 'liquidityGross' | 'liquidityNet' | 'volumeToken0' | 'volumeToken1' | 'volumeUSD' | 'feesUSD' | 'feeGrowthOutside0X128' | 'feeGrowthOutside1X128'

export interface TickHourData {
    id: Scalars['ID']
    periodStartUnix: Scalars['Int']
    pool: Pool
    tick: Tick
    liquidityGross: Scalars['BigInt']
    liquidityNet: Scalars['BigInt']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    __typename: 'TickHourData'
}

export type TickHourData_orderBy = 'id' | 'periodStartUnix' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'tick' | 'tick__id' | 'tick__poolAddress' | 'tick__tickIdx' | 'tick__liquidityGross' | 'tick__liquidityNet' | 'tick__price0' | 'tick__price1' | 'tick__volumeToken0' | 'tick__volumeToken1' | 'tick__volumeUSD' | 'tick__untrackedVolumeUSD' | 'tick__feesUSD' | 'tick__collectedFeesToken0' | 'tick__collectedFeesToken1' | 'tick__collectedFeesUSD' | 'tick__createdAtTimestamp' | 'tick__createdAtBlockNumber' | 'tick__liquidityProviderCount' | 'tick__feeGrowthOutside0X128' | 'tick__feeGrowthOutside1X128' | 'liquidityGross' | 'liquidityNet' | 'volumeToken0' | 'volumeToken1' | 'volumeUSD' | 'feesUSD'

export type Tick_orderBy = 'id' | 'poolAddress' | 'tickIdx' | 'pool' | 'pool__id' | 'pool__createdAtTimestamp' | 'pool__createdAtBlockNumber' | 'pool__feeTier' | 'pool__liquidity' | 'pool__sqrtPrice' | 'pool__feeGrowthGlobal0X128' | 'pool__feeGrowthGlobal1X128' | 'pool__token0Price' | 'pool__token1Price' | 'pool__tick' | 'pool__observationIndex' | 'pool__volumeToken0' | 'pool__volumeToken1' | 'pool__volumeUSD' | 'pool__untrackedVolumeUSD' | 'pool__feesUSD' | 'pool__txCount' | 'pool__collectedFeesToken0' | 'pool__collectedFeesToken1' | 'pool__collectedFeesUSD' | 'pool__totalValueLockedToken0' | 'pool__totalValueLockedToken1' | 'pool__totalValueLockedETH' | 'pool__totalValueLockedUSD' | 'pool__totalValueLockedUSDUntracked' | 'pool__liquidityProviderCount' | 'liquidityGross' | 'liquidityNet' | 'price0' | 'price1' | 'volumeToken0' | 'volumeToken1' | 'volumeUSD' | 'untrackedVolumeUSD' | 'feesUSD' | 'collectedFeesToken0' | 'collectedFeesToken1' | 'collectedFeesUSD' | 'createdAtTimestamp' | 'createdAtBlockNumber' | 'liquidityProviderCount' | 'feeGrowthOutside0X128' | 'feeGrowthOutside1X128'

export interface Token {
    id: Scalars['ID']
    symbol: Scalars['String']
    name: Scalars['String']
    decimals: Scalars['BigInt']
    totalSupply: Scalars['BigInt']
    volume: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    poolCount: Scalars['BigInt']
    totalValueLocked: Scalars['BigDecimal']
    totalValueLockedUSD: Scalars['BigDecimal']
    totalValueLockedUSDUntracked: Scalars['BigDecimal']
    derivedETH: Scalars['BigDecimal']
    whitelistPools: Pool[]
    tokenDayData: TokenDayData[]
    __typename: 'Token'
}

export interface TokenDayData {
    id: Scalars['ID']
    date: Scalars['Int']
    token: Token
    volume: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    totalValueLocked: Scalars['BigDecimal']
    totalValueLockedUSD: Scalars['BigDecimal']
    priceUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    open: Scalars['BigDecimal']
    high: Scalars['BigDecimal']
    low: Scalars['BigDecimal']
    close: Scalars['BigDecimal']
    __typename: 'TokenDayData'
}

export type TokenDayData_orderBy = 'id' | 'date' | 'token' | 'token__id' | 'token__symbol' | 'token__name' | 'token__decimals' | 'token__totalSupply' | 'token__volume' | 'token__volumeUSD' | 'token__untrackedVolumeUSD' | 'token__feesUSD' | 'token__txCount' | 'token__poolCount' | 'token__totalValueLocked' | 'token__totalValueLockedUSD' | 'token__totalValueLockedUSDUntracked' | 'token__derivedETH' | 'volume' | 'volumeUSD' | 'untrackedVolumeUSD' | 'totalValueLocked' | 'totalValueLockedUSD' | 'priceUSD' | 'feesUSD' | 'open' | 'high' | 'low' | 'close'

export interface TokenHourData {
    id: Scalars['ID']
    periodStartUnix: Scalars['Int']
    token: Token
    volume: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    totalValueLocked: Scalars['BigDecimal']
    totalValueLockedUSD: Scalars['BigDecimal']
    priceUSD: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    open: Scalars['BigDecimal']
    high: Scalars['BigDecimal']
    low: Scalars['BigDecimal']
    close: Scalars['BigDecimal']
    __typename: 'TokenHourData'
}

export type TokenHourData_orderBy = 'id' | 'periodStartUnix' | 'token' | 'token__id' | 'token__symbol' | 'token__name' | 'token__decimals' | 'token__totalSupply' | 'token__volume' | 'token__volumeUSD' | 'token__untrackedVolumeUSD' | 'token__feesUSD' | 'token__txCount' | 'token__poolCount' | 'token__totalValueLocked' | 'token__totalValueLockedUSD' | 'token__totalValueLockedUSDUntracked' | 'token__derivedETH' | 'volume' | 'volumeUSD' | 'untrackedVolumeUSD' | 'totalValueLocked' | 'totalValueLockedUSD' | 'priceUSD' | 'feesUSD' | 'open' | 'high' | 'low' | 'close'

export type Token_orderBy = 'id' | 'symbol' | 'name' | 'decimals' | 'totalSupply' | 'volume' | 'volumeUSD' | 'untrackedVolumeUSD' | 'feesUSD' | 'txCount' | 'poolCount' | 'totalValueLocked' | 'totalValueLockedUSD' | 'totalValueLockedUSDUntracked' | 'derivedETH' | 'whitelistPools' | 'tokenDayData'

export interface Transaction {
    id: Scalars['ID']
    blockNumber: Scalars['BigInt']
    timestamp: Scalars['BigInt']
    gasUsed: Scalars['BigInt']
    gasPrice: Scalars['BigInt']
    mints: Mint[]
    burns: Burn[]
    swaps: Swap[]
    flashed: Flash[]
    collects: Collect[]
    __typename: 'Transaction'
}

export type Transaction_orderBy = 'id' | 'blockNumber' | 'timestamp' | 'gasUsed' | 'gasPrice' | 'mints' | 'burns' | 'swaps' | 'flashed' | 'collects'

export interface UniswapDayData {
    id: Scalars['ID']
    date: Scalars['Int']
    volumeETH: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    volumeUSDUntracked: Scalars['BigDecimal']
    feesUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    tvlUSD: Scalars['BigDecimal']
    __typename: 'UniswapDayData'
}

export type UniswapDayData_orderBy = 'id' | 'date' | 'volumeETH' | 'volumeUSD' | 'volumeUSDUntracked' | 'feesUSD' | 'txCount' | 'tvlUSD'

export interface _Block_ {
    /** The hash of the block */
    hash?: Scalars['Bytes']
    /** The block number */
    number: Scalars['Int']
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Scalars['Int']
    __typename: '_Block_'
}


/** The type for the top-level _meta field */
export interface _Meta_ {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     * 
     */
    block: _Block_
    /** The deployment ID */
    deployment: Scalars['String']
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']
    __typename: '_Meta_'
}

export type _SubgraphErrorPolicy_ = 'allow' | 'deny'

export interface BlockChangedFilter {number_gte: Scalars['Int']}

export interface Block_height {hash?: (Scalars['Bytes'] | null),number?: (Scalars['Int'] | null),number_gte?: (Scalars['Int'] | null)}

export interface BundleRequest{
    id?: boolean | number
    ethPriceUSD?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Bundle_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),ethPriceUSD?: (Scalars['BigDecimal'] | null),ethPriceUSD_not?: (Scalars['BigDecimal'] | null),ethPriceUSD_gt?: (Scalars['BigDecimal'] | null),ethPriceUSD_lt?: (Scalars['BigDecimal'] | null),ethPriceUSD_gte?: (Scalars['BigDecimal'] | null),ethPriceUSD_lte?: (Scalars['BigDecimal'] | null),ethPriceUSD_in?: (Scalars['BigDecimal'][] | null),ethPriceUSD_not_in?: (Scalars['BigDecimal'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Bundle_filter | null)[] | null),or?: ((Bundle_filter | null)[] | null)}

export interface BurnRequest{
    id?: boolean | number
    transaction?: TransactionRequest
    pool?: PoolRequest
    token0?: TokenRequest
    token1?: TokenRequest
    timestamp?: boolean | number
    owner?: boolean | number
    origin?: boolean | number
    amount?: boolean | number
    amount0?: boolean | number
    amount1?: boolean | number
    amountUSD?: boolean | number
    tickLower?: boolean | number
    tickUpper?: boolean | number
    logIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Burn_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_contains_nocase?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_not_contains_nocase?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_starts_with_nocase?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_not_starts_with_nocase?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_ends_with_nocase?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),transaction_not_ends_with_nocase?: (Scalars['String'] | null),transaction_?: (Transaction_filter | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),token0?: (Scalars['String'] | null),token0_not?: (Scalars['String'] | null),token0_gt?: (Scalars['String'] | null),token0_lt?: (Scalars['String'] | null),token0_gte?: (Scalars['String'] | null),token0_lte?: (Scalars['String'] | null),token0_in?: (Scalars['String'][] | null),token0_not_in?: (Scalars['String'][] | null),token0_contains?: (Scalars['String'] | null),token0_contains_nocase?: (Scalars['String'] | null),token0_not_contains?: (Scalars['String'] | null),token0_not_contains_nocase?: (Scalars['String'] | null),token0_starts_with?: (Scalars['String'] | null),token0_starts_with_nocase?: (Scalars['String'] | null),token0_not_starts_with?: (Scalars['String'] | null),token0_not_starts_with_nocase?: (Scalars['String'] | null),token0_ends_with?: (Scalars['String'] | null),token0_ends_with_nocase?: (Scalars['String'] | null),token0_not_ends_with?: (Scalars['String'] | null),token0_not_ends_with_nocase?: (Scalars['String'] | null),token0_?: (Token_filter | null),token1?: (Scalars['String'] | null),token1_not?: (Scalars['String'] | null),token1_gt?: (Scalars['String'] | null),token1_lt?: (Scalars['String'] | null),token1_gte?: (Scalars['String'] | null),token1_lte?: (Scalars['String'] | null),token1_in?: (Scalars['String'][] | null),token1_not_in?: (Scalars['String'][] | null),token1_contains?: (Scalars['String'] | null),token1_contains_nocase?: (Scalars['String'] | null),token1_not_contains?: (Scalars['String'] | null),token1_not_contains_nocase?: (Scalars['String'] | null),token1_starts_with?: (Scalars['String'] | null),token1_starts_with_nocase?: (Scalars['String'] | null),token1_not_starts_with?: (Scalars['String'] | null),token1_not_starts_with_nocase?: (Scalars['String'] | null),token1_ends_with?: (Scalars['String'] | null),token1_ends_with_nocase?: (Scalars['String'] | null),token1_not_ends_with?: (Scalars['String'] | null),token1_not_ends_with_nocase?: (Scalars['String'] | null),token1_?: (Token_filter | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),owner?: (Scalars['Bytes'] | null),owner_not?: (Scalars['Bytes'] | null),owner_gt?: (Scalars['Bytes'] | null),owner_lt?: (Scalars['Bytes'] | null),owner_gte?: (Scalars['Bytes'] | null),owner_lte?: (Scalars['Bytes'] | null),owner_in?: (Scalars['Bytes'][] | null),owner_not_in?: (Scalars['Bytes'][] | null),owner_contains?: (Scalars['Bytes'] | null),owner_not_contains?: (Scalars['Bytes'] | null),origin?: (Scalars['Bytes'] | null),origin_not?: (Scalars['Bytes'] | null),origin_gt?: (Scalars['Bytes'] | null),origin_lt?: (Scalars['Bytes'] | null),origin_gte?: (Scalars['Bytes'] | null),origin_lte?: (Scalars['Bytes'] | null),origin_in?: (Scalars['Bytes'][] | null),origin_not_in?: (Scalars['Bytes'][] | null),origin_contains?: (Scalars['Bytes'] | null),origin_not_contains?: (Scalars['Bytes'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),amount0?: (Scalars['BigDecimal'] | null),amount0_not?: (Scalars['BigDecimal'] | null),amount0_gt?: (Scalars['BigDecimal'] | null),amount0_lt?: (Scalars['BigDecimal'] | null),amount0_gte?: (Scalars['BigDecimal'] | null),amount0_lte?: (Scalars['BigDecimal'] | null),amount0_in?: (Scalars['BigDecimal'][] | null),amount0_not_in?: (Scalars['BigDecimal'][] | null),amount1?: (Scalars['BigDecimal'] | null),amount1_not?: (Scalars['BigDecimal'] | null),amount1_gt?: (Scalars['BigDecimal'] | null),amount1_lt?: (Scalars['BigDecimal'] | null),amount1_gte?: (Scalars['BigDecimal'] | null),amount1_lte?: (Scalars['BigDecimal'] | null),amount1_in?: (Scalars['BigDecimal'][] | null),amount1_not_in?: (Scalars['BigDecimal'][] | null),amountUSD?: (Scalars['BigDecimal'] | null),amountUSD_not?: (Scalars['BigDecimal'] | null),amountUSD_gt?: (Scalars['BigDecimal'] | null),amountUSD_lt?: (Scalars['BigDecimal'] | null),amountUSD_gte?: (Scalars['BigDecimal'] | null),amountUSD_lte?: (Scalars['BigDecimal'] | null),amountUSD_in?: (Scalars['BigDecimal'][] | null),amountUSD_not_in?: (Scalars['BigDecimal'][] | null),tickLower?: (Scalars['BigInt'] | null),tickLower_not?: (Scalars['BigInt'] | null),tickLower_gt?: (Scalars['BigInt'] | null),tickLower_lt?: (Scalars['BigInt'] | null),tickLower_gte?: (Scalars['BigInt'] | null),tickLower_lte?: (Scalars['BigInt'] | null),tickLower_in?: (Scalars['BigInt'][] | null),tickLower_not_in?: (Scalars['BigInt'][] | null),tickUpper?: (Scalars['BigInt'] | null),tickUpper_not?: (Scalars['BigInt'] | null),tickUpper_gt?: (Scalars['BigInt'] | null),tickUpper_lt?: (Scalars['BigInt'] | null),tickUpper_gte?: (Scalars['BigInt'] | null),tickUpper_lte?: (Scalars['BigInt'] | null),tickUpper_in?: (Scalars['BigInt'][] | null),tickUpper_not_in?: (Scalars['BigInt'][] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Burn_filter | null)[] | null),or?: ((Burn_filter | null)[] | null)}

export interface CollectRequest{
    id?: boolean | number
    transaction?: TransactionRequest
    timestamp?: boolean | number
    pool?: PoolRequest
    owner?: boolean | number
    amount0?: boolean | number
    amount1?: boolean | number
    amountUSD?: boolean | number
    tickLower?: boolean | number
    tickUpper?: boolean | number
    logIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Collect_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_contains_nocase?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_not_contains_nocase?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_starts_with_nocase?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_not_starts_with_nocase?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_ends_with_nocase?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),transaction_not_ends_with_nocase?: (Scalars['String'] | null),transaction_?: (Transaction_filter | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),owner?: (Scalars['Bytes'] | null),owner_not?: (Scalars['Bytes'] | null),owner_gt?: (Scalars['Bytes'] | null),owner_lt?: (Scalars['Bytes'] | null),owner_gte?: (Scalars['Bytes'] | null),owner_lte?: (Scalars['Bytes'] | null),owner_in?: (Scalars['Bytes'][] | null),owner_not_in?: (Scalars['Bytes'][] | null),owner_contains?: (Scalars['Bytes'] | null),owner_not_contains?: (Scalars['Bytes'] | null),amount0?: (Scalars['BigDecimal'] | null),amount0_not?: (Scalars['BigDecimal'] | null),amount0_gt?: (Scalars['BigDecimal'] | null),amount0_lt?: (Scalars['BigDecimal'] | null),amount0_gte?: (Scalars['BigDecimal'] | null),amount0_lte?: (Scalars['BigDecimal'] | null),amount0_in?: (Scalars['BigDecimal'][] | null),amount0_not_in?: (Scalars['BigDecimal'][] | null),amount1?: (Scalars['BigDecimal'] | null),amount1_not?: (Scalars['BigDecimal'] | null),amount1_gt?: (Scalars['BigDecimal'] | null),amount1_lt?: (Scalars['BigDecimal'] | null),amount1_gte?: (Scalars['BigDecimal'] | null),amount1_lte?: (Scalars['BigDecimal'] | null),amount1_in?: (Scalars['BigDecimal'][] | null),amount1_not_in?: (Scalars['BigDecimal'][] | null),amountUSD?: (Scalars['BigDecimal'] | null),amountUSD_not?: (Scalars['BigDecimal'] | null),amountUSD_gt?: (Scalars['BigDecimal'] | null),amountUSD_lt?: (Scalars['BigDecimal'] | null),amountUSD_gte?: (Scalars['BigDecimal'] | null),amountUSD_lte?: (Scalars['BigDecimal'] | null),amountUSD_in?: (Scalars['BigDecimal'][] | null),amountUSD_not_in?: (Scalars['BigDecimal'][] | null),tickLower?: (Scalars['BigInt'] | null),tickLower_not?: (Scalars['BigInt'] | null),tickLower_gt?: (Scalars['BigInt'] | null),tickLower_lt?: (Scalars['BigInt'] | null),tickLower_gte?: (Scalars['BigInt'] | null),tickLower_lte?: (Scalars['BigInt'] | null),tickLower_in?: (Scalars['BigInt'][] | null),tickLower_not_in?: (Scalars['BigInt'][] | null),tickUpper?: (Scalars['BigInt'] | null),tickUpper_not?: (Scalars['BigInt'] | null),tickUpper_gt?: (Scalars['BigInt'] | null),tickUpper_lt?: (Scalars['BigInt'] | null),tickUpper_gte?: (Scalars['BigInt'] | null),tickUpper_lte?: (Scalars['BigInt'] | null),tickUpper_in?: (Scalars['BigInt'][] | null),tickUpper_not_in?: (Scalars['BigInt'][] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Collect_filter | null)[] | null),or?: ((Collect_filter | null)[] | null)}

export interface FactoryRequest{
    id?: boolean | number
    poolCount?: boolean | number
    txCount?: boolean | number
    totalVolumeUSD?: boolean | number
    totalVolumeETH?: boolean | number
    totalFeesUSD?: boolean | number
    totalFeesETH?: boolean | number
    untrackedVolumeUSD?: boolean | number
    totalValueLockedUSD?: boolean | number
    totalValueLockedETH?: boolean | number
    totalValueLockedUSDUntracked?: boolean | number
    totalValueLockedETHUntracked?: boolean | number
    owner?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Factory_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),poolCount?: (Scalars['BigInt'] | null),poolCount_not?: (Scalars['BigInt'] | null),poolCount_gt?: (Scalars['BigInt'] | null),poolCount_lt?: (Scalars['BigInt'] | null),poolCount_gte?: (Scalars['BigInt'] | null),poolCount_lte?: (Scalars['BigInt'] | null),poolCount_in?: (Scalars['BigInt'][] | null),poolCount_not_in?: (Scalars['BigInt'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null),totalVolumeUSD?: (Scalars['BigDecimal'] | null),totalVolumeUSD_not?: (Scalars['BigDecimal'] | null),totalVolumeUSD_gt?: (Scalars['BigDecimal'] | null),totalVolumeUSD_lt?: (Scalars['BigDecimal'] | null),totalVolumeUSD_gte?: (Scalars['BigDecimal'] | null),totalVolumeUSD_lte?: (Scalars['BigDecimal'] | null),totalVolumeUSD_in?: (Scalars['BigDecimal'][] | null),totalVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),totalVolumeETH?: (Scalars['BigDecimal'] | null),totalVolumeETH_not?: (Scalars['BigDecimal'] | null),totalVolumeETH_gt?: (Scalars['BigDecimal'] | null),totalVolumeETH_lt?: (Scalars['BigDecimal'] | null),totalVolumeETH_gte?: (Scalars['BigDecimal'] | null),totalVolumeETH_lte?: (Scalars['BigDecimal'] | null),totalVolumeETH_in?: (Scalars['BigDecimal'][] | null),totalVolumeETH_not_in?: (Scalars['BigDecimal'][] | null),totalFeesUSD?: (Scalars['BigDecimal'] | null),totalFeesUSD_not?: (Scalars['BigDecimal'] | null),totalFeesUSD_gt?: (Scalars['BigDecimal'] | null),totalFeesUSD_lt?: (Scalars['BigDecimal'] | null),totalFeesUSD_gte?: (Scalars['BigDecimal'] | null),totalFeesUSD_lte?: (Scalars['BigDecimal'] | null),totalFeesUSD_in?: (Scalars['BigDecimal'][] | null),totalFeesUSD_not_in?: (Scalars['BigDecimal'][] | null),totalFeesETH?: (Scalars['BigDecimal'] | null),totalFeesETH_not?: (Scalars['BigDecimal'] | null),totalFeesETH_gt?: (Scalars['BigDecimal'] | null),totalFeesETH_lt?: (Scalars['BigDecimal'] | null),totalFeesETH_gte?: (Scalars['BigDecimal'] | null),totalFeesETH_lte?: (Scalars['BigDecimal'] | null),totalFeesETH_in?: (Scalars['BigDecimal'][] | null),totalFeesETH_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_not?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedETH?: (Scalars['BigDecimal'] | null),totalValueLockedETH_not?: (Scalars['BigDecimal'] | null),totalValueLockedETH_gt?: (Scalars['BigDecimal'] | null),totalValueLockedETH_lt?: (Scalars['BigDecimal'] | null),totalValueLockedETH_gte?: (Scalars['BigDecimal'] | null),totalValueLockedETH_lte?: (Scalars['BigDecimal'] | null),totalValueLockedETH_in?: (Scalars['BigDecimal'][] | null),totalValueLockedETH_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSDUntracked?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_not?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_gt?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_lt?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_gte?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_lte?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSDUntracked_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedETHUntracked?: (Scalars['BigDecimal'] | null),totalValueLockedETHUntracked_not?: (Scalars['BigDecimal'] | null),totalValueLockedETHUntracked_gt?: (Scalars['BigDecimal'] | null),totalValueLockedETHUntracked_lt?: (Scalars['BigDecimal'] | null),totalValueLockedETHUntracked_gte?: (Scalars['BigDecimal'] | null),totalValueLockedETHUntracked_lte?: (Scalars['BigDecimal'] | null),totalValueLockedETHUntracked_in?: (Scalars['BigDecimal'][] | null),totalValueLockedETHUntracked_not_in?: (Scalars['BigDecimal'][] | null),owner?: (Scalars['ID'] | null),owner_not?: (Scalars['ID'] | null),owner_gt?: (Scalars['ID'] | null),owner_lt?: (Scalars['ID'] | null),owner_gte?: (Scalars['ID'] | null),owner_lte?: (Scalars['ID'] | null),owner_in?: (Scalars['ID'][] | null),owner_not_in?: (Scalars['ID'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Factory_filter | null)[] | null),or?: ((Factory_filter | null)[] | null)}

export interface FlashRequest{
    id?: boolean | number
    transaction?: TransactionRequest
    timestamp?: boolean | number
    pool?: PoolRequest
    sender?: boolean | number
    recipient?: boolean | number
    amount0?: boolean | number
    amount1?: boolean | number
    amountUSD?: boolean | number
    amount0Paid?: boolean | number
    amount1Paid?: boolean | number
    logIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Flash_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_contains_nocase?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_not_contains_nocase?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_starts_with_nocase?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_not_starts_with_nocase?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_ends_with_nocase?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),transaction_not_ends_with_nocase?: (Scalars['String'] | null),transaction_?: (Transaction_filter | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),sender?: (Scalars['Bytes'] | null),sender_not?: (Scalars['Bytes'] | null),sender_gt?: (Scalars['Bytes'] | null),sender_lt?: (Scalars['Bytes'] | null),sender_gte?: (Scalars['Bytes'] | null),sender_lte?: (Scalars['Bytes'] | null),sender_in?: (Scalars['Bytes'][] | null),sender_not_in?: (Scalars['Bytes'][] | null),sender_contains?: (Scalars['Bytes'] | null),sender_not_contains?: (Scalars['Bytes'] | null),recipient?: (Scalars['Bytes'] | null),recipient_not?: (Scalars['Bytes'] | null),recipient_gt?: (Scalars['Bytes'] | null),recipient_lt?: (Scalars['Bytes'] | null),recipient_gte?: (Scalars['Bytes'] | null),recipient_lte?: (Scalars['Bytes'] | null),recipient_in?: (Scalars['Bytes'][] | null),recipient_not_in?: (Scalars['Bytes'][] | null),recipient_contains?: (Scalars['Bytes'] | null),recipient_not_contains?: (Scalars['Bytes'] | null),amount0?: (Scalars['BigDecimal'] | null),amount0_not?: (Scalars['BigDecimal'] | null),amount0_gt?: (Scalars['BigDecimal'] | null),amount0_lt?: (Scalars['BigDecimal'] | null),amount0_gte?: (Scalars['BigDecimal'] | null),amount0_lte?: (Scalars['BigDecimal'] | null),amount0_in?: (Scalars['BigDecimal'][] | null),amount0_not_in?: (Scalars['BigDecimal'][] | null),amount1?: (Scalars['BigDecimal'] | null),amount1_not?: (Scalars['BigDecimal'] | null),amount1_gt?: (Scalars['BigDecimal'] | null),amount1_lt?: (Scalars['BigDecimal'] | null),amount1_gte?: (Scalars['BigDecimal'] | null),amount1_lte?: (Scalars['BigDecimal'] | null),amount1_in?: (Scalars['BigDecimal'][] | null),amount1_not_in?: (Scalars['BigDecimal'][] | null),amountUSD?: (Scalars['BigDecimal'] | null),amountUSD_not?: (Scalars['BigDecimal'] | null),amountUSD_gt?: (Scalars['BigDecimal'] | null),amountUSD_lt?: (Scalars['BigDecimal'] | null),amountUSD_gte?: (Scalars['BigDecimal'] | null),amountUSD_lte?: (Scalars['BigDecimal'] | null),amountUSD_in?: (Scalars['BigDecimal'][] | null),amountUSD_not_in?: (Scalars['BigDecimal'][] | null),amount0Paid?: (Scalars['BigDecimal'] | null),amount0Paid_not?: (Scalars['BigDecimal'] | null),amount0Paid_gt?: (Scalars['BigDecimal'] | null),amount0Paid_lt?: (Scalars['BigDecimal'] | null),amount0Paid_gte?: (Scalars['BigDecimal'] | null),amount0Paid_lte?: (Scalars['BigDecimal'] | null),amount0Paid_in?: (Scalars['BigDecimal'][] | null),amount0Paid_not_in?: (Scalars['BigDecimal'][] | null),amount1Paid?: (Scalars['BigDecimal'] | null),amount1Paid_not?: (Scalars['BigDecimal'] | null),amount1Paid_gt?: (Scalars['BigDecimal'] | null),amount1Paid_lt?: (Scalars['BigDecimal'] | null),amount1Paid_gte?: (Scalars['BigDecimal'] | null),amount1Paid_lte?: (Scalars['BigDecimal'] | null),amount1Paid_in?: (Scalars['BigDecimal'][] | null),amount1Paid_not_in?: (Scalars['BigDecimal'][] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Flash_filter | null)[] | null),or?: ((Flash_filter | null)[] | null)}

export interface IncentiveRequest{
    id?: boolean | number
    rewardToken?: boolean | number
    pool?: boolean | number
    startTime?: boolean | number
    endTime?: boolean | number
    refundee?: boolean | number
    reward?: boolean | number
    ended?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Incentive_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),rewardToken?: (Scalars['Bytes'] | null),rewardToken_not?: (Scalars['Bytes'] | null),rewardToken_gt?: (Scalars['Bytes'] | null),rewardToken_lt?: (Scalars['Bytes'] | null),rewardToken_gte?: (Scalars['Bytes'] | null),rewardToken_lte?: (Scalars['Bytes'] | null),rewardToken_in?: (Scalars['Bytes'][] | null),rewardToken_not_in?: (Scalars['Bytes'][] | null),rewardToken_contains?: (Scalars['Bytes'] | null),rewardToken_not_contains?: (Scalars['Bytes'] | null),pool?: (Scalars['Bytes'] | null),pool_not?: (Scalars['Bytes'] | null),pool_gt?: (Scalars['Bytes'] | null),pool_lt?: (Scalars['Bytes'] | null),pool_gte?: (Scalars['Bytes'] | null),pool_lte?: (Scalars['Bytes'] | null),pool_in?: (Scalars['Bytes'][] | null),pool_not_in?: (Scalars['Bytes'][] | null),pool_contains?: (Scalars['Bytes'] | null),pool_not_contains?: (Scalars['Bytes'] | null),startTime?: (Scalars['BigInt'] | null),startTime_not?: (Scalars['BigInt'] | null),startTime_gt?: (Scalars['BigInt'] | null),startTime_lt?: (Scalars['BigInt'] | null),startTime_gte?: (Scalars['BigInt'] | null),startTime_lte?: (Scalars['BigInt'] | null),startTime_in?: (Scalars['BigInt'][] | null),startTime_not_in?: (Scalars['BigInt'][] | null),endTime?: (Scalars['BigInt'] | null),endTime_not?: (Scalars['BigInt'] | null),endTime_gt?: (Scalars['BigInt'] | null),endTime_lt?: (Scalars['BigInt'] | null),endTime_gte?: (Scalars['BigInt'] | null),endTime_lte?: (Scalars['BigInt'] | null),endTime_in?: (Scalars['BigInt'][] | null),endTime_not_in?: (Scalars['BigInt'][] | null),refundee?: (Scalars['Bytes'] | null),refundee_not?: (Scalars['Bytes'] | null),refundee_gt?: (Scalars['Bytes'] | null),refundee_lt?: (Scalars['Bytes'] | null),refundee_gte?: (Scalars['Bytes'] | null),refundee_lte?: (Scalars['Bytes'] | null),refundee_in?: (Scalars['Bytes'][] | null),refundee_not_in?: (Scalars['Bytes'][] | null),refundee_contains?: (Scalars['Bytes'] | null),refundee_not_contains?: (Scalars['Bytes'] | null),reward?: (Scalars['BigInt'] | null),reward_not?: (Scalars['BigInt'] | null),reward_gt?: (Scalars['BigInt'] | null),reward_lt?: (Scalars['BigInt'] | null),reward_gte?: (Scalars['BigInt'] | null),reward_lte?: (Scalars['BigInt'] | null),reward_in?: (Scalars['BigInt'][] | null),reward_not_in?: (Scalars['BigInt'][] | null),ended?: (Scalars['Boolean'] | null),ended_not?: (Scalars['Boolean'] | null),ended_in?: (Scalars['Boolean'][] | null),ended_not_in?: (Scalars['Boolean'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Incentive_filter | null)[] | null),or?: ((Incentive_filter | null)[] | null)}

export interface MintRequest{
    id?: boolean | number
    transaction?: TransactionRequest
    timestamp?: boolean | number
    pool?: PoolRequest
    token0?: TokenRequest
    token1?: TokenRequest
    owner?: boolean | number
    sender?: boolean | number
    origin?: boolean | number
    amount?: boolean | number
    amount0?: boolean | number
    amount1?: boolean | number
    amountUSD?: boolean | number
    tickLower?: boolean | number
    tickUpper?: boolean | number
    logIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Mint_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_contains_nocase?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_not_contains_nocase?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_starts_with_nocase?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_not_starts_with_nocase?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_ends_with_nocase?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),transaction_not_ends_with_nocase?: (Scalars['String'] | null),transaction_?: (Transaction_filter | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),token0?: (Scalars['String'] | null),token0_not?: (Scalars['String'] | null),token0_gt?: (Scalars['String'] | null),token0_lt?: (Scalars['String'] | null),token0_gte?: (Scalars['String'] | null),token0_lte?: (Scalars['String'] | null),token0_in?: (Scalars['String'][] | null),token0_not_in?: (Scalars['String'][] | null),token0_contains?: (Scalars['String'] | null),token0_contains_nocase?: (Scalars['String'] | null),token0_not_contains?: (Scalars['String'] | null),token0_not_contains_nocase?: (Scalars['String'] | null),token0_starts_with?: (Scalars['String'] | null),token0_starts_with_nocase?: (Scalars['String'] | null),token0_not_starts_with?: (Scalars['String'] | null),token0_not_starts_with_nocase?: (Scalars['String'] | null),token0_ends_with?: (Scalars['String'] | null),token0_ends_with_nocase?: (Scalars['String'] | null),token0_not_ends_with?: (Scalars['String'] | null),token0_not_ends_with_nocase?: (Scalars['String'] | null),token0_?: (Token_filter | null),token1?: (Scalars['String'] | null),token1_not?: (Scalars['String'] | null),token1_gt?: (Scalars['String'] | null),token1_lt?: (Scalars['String'] | null),token1_gte?: (Scalars['String'] | null),token1_lte?: (Scalars['String'] | null),token1_in?: (Scalars['String'][] | null),token1_not_in?: (Scalars['String'][] | null),token1_contains?: (Scalars['String'] | null),token1_contains_nocase?: (Scalars['String'] | null),token1_not_contains?: (Scalars['String'] | null),token1_not_contains_nocase?: (Scalars['String'] | null),token1_starts_with?: (Scalars['String'] | null),token1_starts_with_nocase?: (Scalars['String'] | null),token1_not_starts_with?: (Scalars['String'] | null),token1_not_starts_with_nocase?: (Scalars['String'] | null),token1_ends_with?: (Scalars['String'] | null),token1_ends_with_nocase?: (Scalars['String'] | null),token1_not_ends_with?: (Scalars['String'] | null),token1_not_ends_with_nocase?: (Scalars['String'] | null),token1_?: (Token_filter | null),owner?: (Scalars['Bytes'] | null),owner_not?: (Scalars['Bytes'] | null),owner_gt?: (Scalars['Bytes'] | null),owner_lt?: (Scalars['Bytes'] | null),owner_gte?: (Scalars['Bytes'] | null),owner_lte?: (Scalars['Bytes'] | null),owner_in?: (Scalars['Bytes'][] | null),owner_not_in?: (Scalars['Bytes'][] | null),owner_contains?: (Scalars['Bytes'] | null),owner_not_contains?: (Scalars['Bytes'] | null),sender?: (Scalars['Bytes'] | null),sender_not?: (Scalars['Bytes'] | null),sender_gt?: (Scalars['Bytes'] | null),sender_lt?: (Scalars['Bytes'] | null),sender_gte?: (Scalars['Bytes'] | null),sender_lte?: (Scalars['Bytes'] | null),sender_in?: (Scalars['Bytes'][] | null),sender_not_in?: (Scalars['Bytes'][] | null),sender_contains?: (Scalars['Bytes'] | null),sender_not_contains?: (Scalars['Bytes'] | null),origin?: (Scalars['Bytes'] | null),origin_not?: (Scalars['Bytes'] | null),origin_gt?: (Scalars['Bytes'] | null),origin_lt?: (Scalars['Bytes'] | null),origin_gte?: (Scalars['Bytes'] | null),origin_lte?: (Scalars['Bytes'] | null),origin_in?: (Scalars['Bytes'][] | null),origin_not_in?: (Scalars['Bytes'][] | null),origin_contains?: (Scalars['Bytes'] | null),origin_not_contains?: (Scalars['Bytes'] | null),amount?: (Scalars['BigInt'] | null),amount_not?: (Scalars['BigInt'] | null),amount_gt?: (Scalars['BigInt'] | null),amount_lt?: (Scalars['BigInt'] | null),amount_gte?: (Scalars['BigInt'] | null),amount_lte?: (Scalars['BigInt'] | null),amount_in?: (Scalars['BigInt'][] | null),amount_not_in?: (Scalars['BigInt'][] | null),amount0?: (Scalars['BigDecimal'] | null),amount0_not?: (Scalars['BigDecimal'] | null),amount0_gt?: (Scalars['BigDecimal'] | null),amount0_lt?: (Scalars['BigDecimal'] | null),amount0_gte?: (Scalars['BigDecimal'] | null),amount0_lte?: (Scalars['BigDecimal'] | null),amount0_in?: (Scalars['BigDecimal'][] | null),amount0_not_in?: (Scalars['BigDecimal'][] | null),amount1?: (Scalars['BigDecimal'] | null),amount1_not?: (Scalars['BigDecimal'] | null),amount1_gt?: (Scalars['BigDecimal'] | null),amount1_lt?: (Scalars['BigDecimal'] | null),amount1_gte?: (Scalars['BigDecimal'] | null),amount1_lte?: (Scalars['BigDecimal'] | null),amount1_in?: (Scalars['BigDecimal'][] | null),amount1_not_in?: (Scalars['BigDecimal'][] | null),amountUSD?: (Scalars['BigDecimal'] | null),amountUSD_not?: (Scalars['BigDecimal'] | null),amountUSD_gt?: (Scalars['BigDecimal'] | null),amountUSD_lt?: (Scalars['BigDecimal'] | null),amountUSD_gte?: (Scalars['BigDecimal'] | null),amountUSD_lte?: (Scalars['BigDecimal'] | null),amountUSD_in?: (Scalars['BigDecimal'][] | null),amountUSD_not_in?: (Scalars['BigDecimal'][] | null),tickLower?: (Scalars['BigInt'] | null),tickLower_not?: (Scalars['BigInt'] | null),tickLower_gt?: (Scalars['BigInt'] | null),tickLower_lt?: (Scalars['BigInt'] | null),tickLower_gte?: (Scalars['BigInt'] | null),tickLower_lte?: (Scalars['BigInt'] | null),tickLower_in?: (Scalars['BigInt'][] | null),tickLower_not_in?: (Scalars['BigInt'][] | null),tickUpper?: (Scalars['BigInt'] | null),tickUpper_not?: (Scalars['BigInt'] | null),tickUpper_gt?: (Scalars['BigInt'] | null),tickUpper_lt?: (Scalars['BigInt'] | null),tickUpper_gte?: (Scalars['BigInt'] | null),tickUpper_lte?: (Scalars['BigInt'] | null),tickUpper_in?: (Scalars['BigInt'][] | null),tickUpper_not_in?: (Scalars['BigInt'][] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Mint_filter | null)[] | null),or?: ((Mint_filter | null)[] | null)}

export interface PoolRequest{
    id?: boolean | number
    createdAtTimestamp?: boolean | number
    createdAtBlockNumber?: boolean | number
    token0?: TokenRequest
    token1?: TokenRequest
    feeTier?: boolean | number
    liquidity?: boolean | number
    sqrtPrice?: boolean | number
    feeGrowthGlobal0X128?: boolean | number
    feeGrowthGlobal1X128?: boolean | number
    token0Price?: boolean | number
    token1Price?: boolean | number
    tick?: boolean | number
    observationIndex?: boolean | number
    volumeToken0?: boolean | number
    volumeToken1?: boolean | number
    volumeUSD?: boolean | number
    untrackedVolumeUSD?: boolean | number
    feesUSD?: boolean | number
    txCount?: boolean | number
    collectedFeesToken0?: boolean | number
    collectedFeesToken1?: boolean | number
    collectedFeesUSD?: boolean | number
    totalValueLockedToken0?: boolean | number
    totalValueLockedToken1?: boolean | number
    totalValueLockedETH?: boolean | number
    totalValueLockedUSD?: boolean | number
    totalValueLockedUSDUntracked?: boolean | number
    liquidityProviderCount?: boolean | number
    poolHourData?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null)},PoolHourDataRequest] | PoolHourDataRequest
    poolDayData?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null)},PoolDayDataRequest] | PoolDayDataRequest
    mints?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)},MintRequest] | MintRequest
    burns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)},BurnRequest] | BurnRequest
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)},SwapRequest] | SwapRequest
    collects?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null)},CollectRequest] | CollectRequest
    ticks?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null)},TickRequest] | TickRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PoolDayDataRequest{
    id?: boolean | number
    date?: boolean | number
    pool?: PoolRequest
    liquidity?: boolean | number
    sqrtPrice?: boolean | number
    token0Price?: boolean | number
    token1Price?: boolean | number
    tick?: boolean | number
    feeGrowthGlobal0X128?: boolean | number
    feeGrowthGlobal1X128?: boolean | number
    tvlUSD?: boolean | number
    volumeToken0?: boolean | number
    volumeToken1?: boolean | number
    volumeUSD?: boolean | number
    feesUSD?: boolean | number
    txCount?: boolean | number
    open?: boolean | number
    high?: boolean | number
    low?: boolean | number
    close?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PoolDayData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),date?: (Scalars['Int'] | null),date_not?: (Scalars['Int'] | null),date_gt?: (Scalars['Int'] | null),date_lt?: (Scalars['Int'] | null),date_gte?: (Scalars['Int'] | null),date_lte?: (Scalars['Int'] | null),date_in?: (Scalars['Int'][] | null),date_not_in?: (Scalars['Int'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),liquidity?: (Scalars['BigInt'] | null),liquidity_not?: (Scalars['BigInt'] | null),liquidity_gt?: (Scalars['BigInt'] | null),liquidity_lt?: (Scalars['BigInt'] | null),liquidity_gte?: (Scalars['BigInt'] | null),liquidity_lte?: (Scalars['BigInt'] | null),liquidity_in?: (Scalars['BigInt'][] | null),liquidity_not_in?: (Scalars['BigInt'][] | null),sqrtPrice?: (Scalars['BigInt'] | null),sqrtPrice_not?: (Scalars['BigInt'] | null),sqrtPrice_gt?: (Scalars['BigInt'] | null),sqrtPrice_lt?: (Scalars['BigInt'] | null),sqrtPrice_gte?: (Scalars['BigInt'] | null),sqrtPrice_lte?: (Scalars['BigInt'] | null),sqrtPrice_in?: (Scalars['BigInt'][] | null),sqrtPrice_not_in?: (Scalars['BigInt'][] | null),token0Price?: (Scalars['BigDecimal'] | null),token0Price_not?: (Scalars['BigDecimal'] | null),token0Price_gt?: (Scalars['BigDecimal'] | null),token0Price_lt?: (Scalars['BigDecimal'] | null),token0Price_gte?: (Scalars['BigDecimal'] | null),token0Price_lte?: (Scalars['BigDecimal'] | null),token0Price_in?: (Scalars['BigDecimal'][] | null),token0Price_not_in?: (Scalars['BigDecimal'][] | null),token1Price?: (Scalars['BigDecimal'] | null),token1Price_not?: (Scalars['BigDecimal'] | null),token1Price_gt?: (Scalars['BigDecimal'] | null),token1Price_lt?: (Scalars['BigDecimal'] | null),token1Price_gte?: (Scalars['BigDecimal'] | null),token1Price_lte?: (Scalars['BigDecimal'] | null),token1Price_in?: (Scalars['BigDecimal'][] | null),token1Price_not_in?: (Scalars['BigDecimal'][] | null),tick?: (Scalars['BigInt'] | null),tick_not?: (Scalars['BigInt'] | null),tick_gt?: (Scalars['BigInt'] | null),tick_lt?: (Scalars['BigInt'] | null),tick_gte?: (Scalars['BigInt'] | null),tick_lte?: (Scalars['BigInt'] | null),tick_in?: (Scalars['BigInt'][] | null),tick_not_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal0X128?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_not?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_gt?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_lt?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_gte?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_lte?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal0X128_not_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal1X128?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_not?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_gt?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_lt?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_gte?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_lte?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal1X128_not_in?: (Scalars['BigInt'][] | null),tvlUSD?: (Scalars['BigDecimal'] | null),tvlUSD_not?: (Scalars['BigDecimal'] | null),tvlUSD_gt?: (Scalars['BigDecimal'] | null),tvlUSD_lt?: (Scalars['BigDecimal'] | null),tvlUSD_gte?: (Scalars['BigDecimal'] | null),tvlUSD_lte?: (Scalars['BigDecimal'] | null),tvlUSD_in?: (Scalars['BigDecimal'][] | null),tvlUSD_not_in?: (Scalars['BigDecimal'][] | null),volumeToken0?: (Scalars['BigDecimal'] | null),volumeToken0_not?: (Scalars['BigDecimal'] | null),volumeToken0_gt?: (Scalars['BigDecimal'] | null),volumeToken0_lt?: (Scalars['BigDecimal'] | null),volumeToken0_gte?: (Scalars['BigDecimal'] | null),volumeToken0_lte?: (Scalars['BigDecimal'] | null),volumeToken0_in?: (Scalars['BigDecimal'][] | null),volumeToken0_not_in?: (Scalars['BigDecimal'][] | null),volumeToken1?: (Scalars['BigDecimal'] | null),volumeToken1_not?: (Scalars['BigDecimal'] | null),volumeToken1_gt?: (Scalars['BigDecimal'] | null),volumeToken1_lt?: (Scalars['BigDecimal'] | null),volumeToken1_gte?: (Scalars['BigDecimal'] | null),volumeToken1_lte?: (Scalars['BigDecimal'] | null),volumeToken1_in?: (Scalars['BigDecimal'][] | null),volumeToken1_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null),open?: (Scalars['BigDecimal'] | null),open_not?: (Scalars['BigDecimal'] | null),open_gt?: (Scalars['BigDecimal'] | null),open_lt?: (Scalars['BigDecimal'] | null),open_gte?: (Scalars['BigDecimal'] | null),open_lte?: (Scalars['BigDecimal'] | null),open_in?: (Scalars['BigDecimal'][] | null),open_not_in?: (Scalars['BigDecimal'][] | null),high?: (Scalars['BigDecimal'] | null),high_not?: (Scalars['BigDecimal'] | null),high_gt?: (Scalars['BigDecimal'] | null),high_lt?: (Scalars['BigDecimal'] | null),high_gte?: (Scalars['BigDecimal'] | null),high_lte?: (Scalars['BigDecimal'] | null),high_in?: (Scalars['BigDecimal'][] | null),high_not_in?: (Scalars['BigDecimal'][] | null),low?: (Scalars['BigDecimal'] | null),low_not?: (Scalars['BigDecimal'] | null),low_gt?: (Scalars['BigDecimal'] | null),low_lt?: (Scalars['BigDecimal'] | null),low_gte?: (Scalars['BigDecimal'] | null),low_lte?: (Scalars['BigDecimal'] | null),low_in?: (Scalars['BigDecimal'][] | null),low_not_in?: (Scalars['BigDecimal'][] | null),close?: (Scalars['BigDecimal'] | null),close_not?: (Scalars['BigDecimal'] | null),close_gt?: (Scalars['BigDecimal'] | null),close_lt?: (Scalars['BigDecimal'] | null),close_gte?: (Scalars['BigDecimal'] | null),close_lte?: (Scalars['BigDecimal'] | null),close_in?: (Scalars['BigDecimal'][] | null),close_not_in?: (Scalars['BigDecimal'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((PoolDayData_filter | null)[] | null),or?: ((PoolDayData_filter | null)[] | null)}

export interface PoolHourDataRequest{
    id?: boolean | number
    periodStartUnix?: boolean | number
    pool?: PoolRequest
    liquidity?: boolean | number
    sqrtPrice?: boolean | number
    token0Price?: boolean | number
    token1Price?: boolean | number
    tick?: boolean | number
    feeGrowthGlobal0X128?: boolean | number
    feeGrowthGlobal1X128?: boolean | number
    tvlUSD?: boolean | number
    volumeToken0?: boolean | number
    volumeToken1?: boolean | number
    volumeUSD?: boolean | number
    feesUSD?: boolean | number
    txCount?: boolean | number
    open?: boolean | number
    high?: boolean | number
    low?: boolean | number
    close?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PoolHourData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),periodStartUnix?: (Scalars['Int'] | null),periodStartUnix_not?: (Scalars['Int'] | null),periodStartUnix_gt?: (Scalars['Int'] | null),periodStartUnix_lt?: (Scalars['Int'] | null),periodStartUnix_gte?: (Scalars['Int'] | null),periodStartUnix_lte?: (Scalars['Int'] | null),periodStartUnix_in?: (Scalars['Int'][] | null),periodStartUnix_not_in?: (Scalars['Int'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),liquidity?: (Scalars['BigInt'] | null),liquidity_not?: (Scalars['BigInt'] | null),liquidity_gt?: (Scalars['BigInt'] | null),liquidity_lt?: (Scalars['BigInt'] | null),liquidity_gte?: (Scalars['BigInt'] | null),liquidity_lte?: (Scalars['BigInt'] | null),liquidity_in?: (Scalars['BigInt'][] | null),liquidity_not_in?: (Scalars['BigInt'][] | null),sqrtPrice?: (Scalars['BigInt'] | null),sqrtPrice_not?: (Scalars['BigInt'] | null),sqrtPrice_gt?: (Scalars['BigInt'] | null),sqrtPrice_lt?: (Scalars['BigInt'] | null),sqrtPrice_gte?: (Scalars['BigInt'] | null),sqrtPrice_lte?: (Scalars['BigInt'] | null),sqrtPrice_in?: (Scalars['BigInt'][] | null),sqrtPrice_not_in?: (Scalars['BigInt'][] | null),token0Price?: (Scalars['BigDecimal'] | null),token0Price_not?: (Scalars['BigDecimal'] | null),token0Price_gt?: (Scalars['BigDecimal'] | null),token0Price_lt?: (Scalars['BigDecimal'] | null),token0Price_gte?: (Scalars['BigDecimal'] | null),token0Price_lte?: (Scalars['BigDecimal'] | null),token0Price_in?: (Scalars['BigDecimal'][] | null),token0Price_not_in?: (Scalars['BigDecimal'][] | null),token1Price?: (Scalars['BigDecimal'] | null),token1Price_not?: (Scalars['BigDecimal'] | null),token1Price_gt?: (Scalars['BigDecimal'] | null),token1Price_lt?: (Scalars['BigDecimal'] | null),token1Price_gte?: (Scalars['BigDecimal'] | null),token1Price_lte?: (Scalars['BigDecimal'] | null),token1Price_in?: (Scalars['BigDecimal'][] | null),token1Price_not_in?: (Scalars['BigDecimal'][] | null),tick?: (Scalars['BigInt'] | null),tick_not?: (Scalars['BigInt'] | null),tick_gt?: (Scalars['BigInt'] | null),tick_lt?: (Scalars['BigInt'] | null),tick_gte?: (Scalars['BigInt'] | null),tick_lte?: (Scalars['BigInt'] | null),tick_in?: (Scalars['BigInt'][] | null),tick_not_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal0X128?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_not?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_gt?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_lt?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_gte?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_lte?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal0X128_not_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal1X128?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_not?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_gt?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_lt?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_gte?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_lte?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal1X128_not_in?: (Scalars['BigInt'][] | null),tvlUSD?: (Scalars['BigDecimal'] | null),tvlUSD_not?: (Scalars['BigDecimal'] | null),tvlUSD_gt?: (Scalars['BigDecimal'] | null),tvlUSD_lt?: (Scalars['BigDecimal'] | null),tvlUSD_gte?: (Scalars['BigDecimal'] | null),tvlUSD_lte?: (Scalars['BigDecimal'] | null),tvlUSD_in?: (Scalars['BigDecimal'][] | null),tvlUSD_not_in?: (Scalars['BigDecimal'][] | null),volumeToken0?: (Scalars['BigDecimal'] | null),volumeToken0_not?: (Scalars['BigDecimal'] | null),volumeToken0_gt?: (Scalars['BigDecimal'] | null),volumeToken0_lt?: (Scalars['BigDecimal'] | null),volumeToken0_gte?: (Scalars['BigDecimal'] | null),volumeToken0_lte?: (Scalars['BigDecimal'] | null),volumeToken0_in?: (Scalars['BigDecimal'][] | null),volumeToken0_not_in?: (Scalars['BigDecimal'][] | null),volumeToken1?: (Scalars['BigDecimal'] | null),volumeToken1_not?: (Scalars['BigDecimal'] | null),volumeToken1_gt?: (Scalars['BigDecimal'] | null),volumeToken1_lt?: (Scalars['BigDecimal'] | null),volumeToken1_gte?: (Scalars['BigDecimal'] | null),volumeToken1_lte?: (Scalars['BigDecimal'] | null),volumeToken1_in?: (Scalars['BigDecimal'][] | null),volumeToken1_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null),open?: (Scalars['BigDecimal'] | null),open_not?: (Scalars['BigDecimal'] | null),open_gt?: (Scalars['BigDecimal'] | null),open_lt?: (Scalars['BigDecimal'] | null),open_gte?: (Scalars['BigDecimal'] | null),open_lte?: (Scalars['BigDecimal'] | null),open_in?: (Scalars['BigDecimal'][] | null),open_not_in?: (Scalars['BigDecimal'][] | null),high?: (Scalars['BigDecimal'] | null),high_not?: (Scalars['BigDecimal'] | null),high_gt?: (Scalars['BigDecimal'] | null),high_lt?: (Scalars['BigDecimal'] | null),high_gte?: (Scalars['BigDecimal'] | null),high_lte?: (Scalars['BigDecimal'] | null),high_in?: (Scalars['BigDecimal'][] | null),high_not_in?: (Scalars['BigDecimal'][] | null),low?: (Scalars['BigDecimal'] | null),low_not?: (Scalars['BigDecimal'] | null),low_gt?: (Scalars['BigDecimal'] | null),low_lt?: (Scalars['BigDecimal'] | null),low_gte?: (Scalars['BigDecimal'] | null),low_lte?: (Scalars['BigDecimal'] | null),low_in?: (Scalars['BigDecimal'][] | null),low_not_in?: (Scalars['BigDecimal'][] | null),close?: (Scalars['BigDecimal'] | null),close_not?: (Scalars['BigDecimal'] | null),close_gt?: (Scalars['BigDecimal'] | null),close_lt?: (Scalars['BigDecimal'] | null),close_gte?: (Scalars['BigDecimal'] | null),close_lte?: (Scalars['BigDecimal'] | null),close_in?: (Scalars['BigDecimal'][] | null),close_not_in?: (Scalars['BigDecimal'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((PoolHourData_filter | null)[] | null),or?: ((PoolHourData_filter | null)[] | null)}

export interface Pool_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),createdAtTimestamp?: (Scalars['BigInt'] | null),createdAtTimestamp_not?: (Scalars['BigInt'] | null),createdAtTimestamp_gt?: (Scalars['BigInt'] | null),createdAtTimestamp_lt?: (Scalars['BigInt'] | null),createdAtTimestamp_gte?: (Scalars['BigInt'] | null),createdAtTimestamp_lte?: (Scalars['BigInt'] | null),createdAtTimestamp_in?: (Scalars['BigInt'][] | null),createdAtTimestamp_not_in?: (Scalars['BigInt'][] | null),createdAtBlockNumber?: (Scalars['BigInt'] | null),createdAtBlockNumber_not?: (Scalars['BigInt'] | null),createdAtBlockNumber_gt?: (Scalars['BigInt'] | null),createdAtBlockNumber_lt?: (Scalars['BigInt'] | null),createdAtBlockNumber_gte?: (Scalars['BigInt'] | null),createdAtBlockNumber_lte?: (Scalars['BigInt'] | null),createdAtBlockNumber_in?: (Scalars['BigInt'][] | null),createdAtBlockNumber_not_in?: (Scalars['BigInt'][] | null),token0?: (Scalars['String'] | null),token0_not?: (Scalars['String'] | null),token0_gt?: (Scalars['String'] | null),token0_lt?: (Scalars['String'] | null),token0_gte?: (Scalars['String'] | null),token0_lte?: (Scalars['String'] | null),token0_in?: (Scalars['String'][] | null),token0_not_in?: (Scalars['String'][] | null),token0_contains?: (Scalars['String'] | null),token0_contains_nocase?: (Scalars['String'] | null),token0_not_contains?: (Scalars['String'] | null),token0_not_contains_nocase?: (Scalars['String'] | null),token0_starts_with?: (Scalars['String'] | null),token0_starts_with_nocase?: (Scalars['String'] | null),token0_not_starts_with?: (Scalars['String'] | null),token0_not_starts_with_nocase?: (Scalars['String'] | null),token0_ends_with?: (Scalars['String'] | null),token0_ends_with_nocase?: (Scalars['String'] | null),token0_not_ends_with?: (Scalars['String'] | null),token0_not_ends_with_nocase?: (Scalars['String'] | null),token0_?: (Token_filter | null),token1?: (Scalars['String'] | null),token1_not?: (Scalars['String'] | null),token1_gt?: (Scalars['String'] | null),token1_lt?: (Scalars['String'] | null),token1_gte?: (Scalars['String'] | null),token1_lte?: (Scalars['String'] | null),token1_in?: (Scalars['String'][] | null),token1_not_in?: (Scalars['String'][] | null),token1_contains?: (Scalars['String'] | null),token1_contains_nocase?: (Scalars['String'] | null),token1_not_contains?: (Scalars['String'] | null),token1_not_contains_nocase?: (Scalars['String'] | null),token1_starts_with?: (Scalars['String'] | null),token1_starts_with_nocase?: (Scalars['String'] | null),token1_not_starts_with?: (Scalars['String'] | null),token1_not_starts_with_nocase?: (Scalars['String'] | null),token1_ends_with?: (Scalars['String'] | null),token1_ends_with_nocase?: (Scalars['String'] | null),token1_not_ends_with?: (Scalars['String'] | null),token1_not_ends_with_nocase?: (Scalars['String'] | null),token1_?: (Token_filter | null),feeTier?: (Scalars['BigInt'] | null),feeTier_not?: (Scalars['BigInt'] | null),feeTier_gt?: (Scalars['BigInt'] | null),feeTier_lt?: (Scalars['BigInt'] | null),feeTier_gte?: (Scalars['BigInt'] | null),feeTier_lte?: (Scalars['BigInt'] | null),feeTier_in?: (Scalars['BigInt'][] | null),feeTier_not_in?: (Scalars['BigInt'][] | null),liquidity?: (Scalars['BigInt'] | null),liquidity_not?: (Scalars['BigInt'] | null),liquidity_gt?: (Scalars['BigInt'] | null),liquidity_lt?: (Scalars['BigInt'] | null),liquidity_gte?: (Scalars['BigInt'] | null),liquidity_lte?: (Scalars['BigInt'] | null),liquidity_in?: (Scalars['BigInt'][] | null),liquidity_not_in?: (Scalars['BigInt'][] | null),sqrtPrice?: (Scalars['BigInt'] | null),sqrtPrice_not?: (Scalars['BigInt'] | null),sqrtPrice_gt?: (Scalars['BigInt'] | null),sqrtPrice_lt?: (Scalars['BigInt'] | null),sqrtPrice_gte?: (Scalars['BigInt'] | null),sqrtPrice_lte?: (Scalars['BigInt'] | null),sqrtPrice_in?: (Scalars['BigInt'][] | null),sqrtPrice_not_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal0X128?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_not?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_gt?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_lt?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_gte?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_lte?: (Scalars['BigInt'] | null),feeGrowthGlobal0X128_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal0X128_not_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal1X128?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_not?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_gt?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_lt?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_gte?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_lte?: (Scalars['BigInt'] | null),feeGrowthGlobal1X128_in?: (Scalars['BigInt'][] | null),feeGrowthGlobal1X128_not_in?: (Scalars['BigInt'][] | null),token0Price?: (Scalars['BigDecimal'] | null),token0Price_not?: (Scalars['BigDecimal'] | null),token0Price_gt?: (Scalars['BigDecimal'] | null),token0Price_lt?: (Scalars['BigDecimal'] | null),token0Price_gte?: (Scalars['BigDecimal'] | null),token0Price_lte?: (Scalars['BigDecimal'] | null),token0Price_in?: (Scalars['BigDecimal'][] | null),token0Price_not_in?: (Scalars['BigDecimal'][] | null),token1Price?: (Scalars['BigDecimal'] | null),token1Price_not?: (Scalars['BigDecimal'] | null),token1Price_gt?: (Scalars['BigDecimal'] | null),token1Price_lt?: (Scalars['BigDecimal'] | null),token1Price_gte?: (Scalars['BigDecimal'] | null),token1Price_lte?: (Scalars['BigDecimal'] | null),token1Price_in?: (Scalars['BigDecimal'][] | null),token1Price_not_in?: (Scalars['BigDecimal'][] | null),tick?: (Scalars['BigInt'] | null),tick_not?: (Scalars['BigInt'] | null),tick_gt?: (Scalars['BigInt'] | null),tick_lt?: (Scalars['BigInt'] | null),tick_gte?: (Scalars['BigInt'] | null),tick_lte?: (Scalars['BigInt'] | null),tick_in?: (Scalars['BigInt'][] | null),tick_not_in?: (Scalars['BigInt'][] | null),observationIndex?: (Scalars['BigInt'] | null),observationIndex_not?: (Scalars['BigInt'] | null),observationIndex_gt?: (Scalars['BigInt'] | null),observationIndex_lt?: (Scalars['BigInt'] | null),observationIndex_gte?: (Scalars['BigInt'] | null),observationIndex_lte?: (Scalars['BigInt'] | null),observationIndex_in?: (Scalars['BigInt'][] | null),observationIndex_not_in?: (Scalars['BigInt'][] | null),volumeToken0?: (Scalars['BigDecimal'] | null),volumeToken0_not?: (Scalars['BigDecimal'] | null),volumeToken0_gt?: (Scalars['BigDecimal'] | null),volumeToken0_lt?: (Scalars['BigDecimal'] | null),volumeToken0_gte?: (Scalars['BigDecimal'] | null),volumeToken0_lte?: (Scalars['BigDecimal'] | null),volumeToken0_in?: (Scalars['BigDecimal'][] | null),volumeToken0_not_in?: (Scalars['BigDecimal'][] | null),volumeToken1?: (Scalars['BigDecimal'] | null),volumeToken1_not?: (Scalars['BigDecimal'] | null),volumeToken1_gt?: (Scalars['BigDecimal'] | null),volumeToken1_lt?: (Scalars['BigDecimal'] | null),volumeToken1_gte?: (Scalars['BigDecimal'] | null),volumeToken1_lte?: (Scalars['BigDecimal'] | null),volumeToken1_in?: (Scalars['BigDecimal'][] | null),volumeToken1_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null),collectedFeesToken0?: (Scalars['BigDecimal'] | null),collectedFeesToken0_not?: (Scalars['BigDecimal'] | null),collectedFeesToken0_gt?: (Scalars['BigDecimal'] | null),collectedFeesToken0_lt?: (Scalars['BigDecimal'] | null),collectedFeesToken0_gte?: (Scalars['BigDecimal'] | null),collectedFeesToken0_lte?: (Scalars['BigDecimal'] | null),collectedFeesToken0_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken0_not_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken1?: (Scalars['BigDecimal'] | null),collectedFeesToken1_not?: (Scalars['BigDecimal'] | null),collectedFeesToken1_gt?: (Scalars['BigDecimal'] | null),collectedFeesToken1_lt?: (Scalars['BigDecimal'] | null),collectedFeesToken1_gte?: (Scalars['BigDecimal'] | null),collectedFeesToken1_lte?: (Scalars['BigDecimal'] | null),collectedFeesToken1_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken1_not_in?: (Scalars['BigDecimal'][] | null),collectedFeesUSD?: (Scalars['BigDecimal'] | null),collectedFeesUSD_not?: (Scalars['BigDecimal'] | null),collectedFeesUSD_gt?: (Scalars['BigDecimal'] | null),collectedFeesUSD_lt?: (Scalars['BigDecimal'] | null),collectedFeesUSD_gte?: (Scalars['BigDecimal'] | null),collectedFeesUSD_lte?: (Scalars['BigDecimal'] | null),collectedFeesUSD_in?: (Scalars['BigDecimal'][] | null),collectedFeesUSD_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedToken0?: (Scalars['BigDecimal'] | null),totalValueLockedToken0_not?: (Scalars['BigDecimal'] | null),totalValueLockedToken0_gt?: (Scalars['BigDecimal'] | null),totalValueLockedToken0_lt?: (Scalars['BigDecimal'] | null),totalValueLockedToken0_gte?: (Scalars['BigDecimal'] | null),totalValueLockedToken0_lte?: (Scalars['BigDecimal'] | null),totalValueLockedToken0_in?: (Scalars['BigDecimal'][] | null),totalValueLockedToken0_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedToken1?: (Scalars['BigDecimal'] | null),totalValueLockedToken1_not?: (Scalars['BigDecimal'] | null),totalValueLockedToken1_gt?: (Scalars['BigDecimal'] | null),totalValueLockedToken1_lt?: (Scalars['BigDecimal'] | null),totalValueLockedToken1_gte?: (Scalars['BigDecimal'] | null),totalValueLockedToken1_lte?: (Scalars['BigDecimal'] | null),totalValueLockedToken1_in?: (Scalars['BigDecimal'][] | null),totalValueLockedToken1_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedETH?: (Scalars['BigDecimal'] | null),totalValueLockedETH_not?: (Scalars['BigDecimal'] | null),totalValueLockedETH_gt?: (Scalars['BigDecimal'] | null),totalValueLockedETH_lt?: (Scalars['BigDecimal'] | null),totalValueLockedETH_gte?: (Scalars['BigDecimal'] | null),totalValueLockedETH_lte?: (Scalars['BigDecimal'] | null),totalValueLockedETH_in?: (Scalars['BigDecimal'][] | null),totalValueLockedETH_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_not?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSDUntracked?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_not?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_gt?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_lt?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_gte?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_lte?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSDUntracked_not_in?: (Scalars['BigDecimal'][] | null),liquidityProviderCount?: (Scalars['BigInt'] | null),liquidityProviderCount_not?: (Scalars['BigInt'] | null),liquidityProviderCount_gt?: (Scalars['BigInt'] | null),liquidityProviderCount_lt?: (Scalars['BigInt'] | null),liquidityProviderCount_gte?: (Scalars['BigInt'] | null),liquidityProviderCount_lte?: (Scalars['BigInt'] | null),liquidityProviderCount_in?: (Scalars['BigInt'][] | null),liquidityProviderCount_not_in?: (Scalars['BigInt'][] | null),poolHourData_?: (PoolHourData_filter | null),poolDayData_?: (PoolDayData_filter | null),mints_?: (Mint_filter | null),burns_?: (Burn_filter | null),swaps_?: (Swap_filter | null),collects_?: (Collect_filter | null),ticks_?: (Tick_filter | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Pool_filter | null)[] | null),or?: ((Pool_filter | null)[] | null)}

export interface PositionRequest{
    id?: boolean | number
    tokenId?: boolean | number
    owner?: boolean | number
    staked?: boolean | number
    oldOwner?: boolean | number
    liquidity?: boolean | number
    approved?: boolean | number
    incentiveId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PositionSnapshotRequest{
    id?: boolean | number
    owner?: boolean | number
    pool?: PoolRequest
    position?: PositionRequest
    blockNumber?: boolean | number
    timestamp?: boolean | number
    liquidity?: boolean | number
    depositedToken0?: boolean | number
    depositedToken1?: boolean | number
    withdrawnToken0?: boolean | number
    withdrawnToken1?: boolean | number
    collectedFeesToken0?: boolean | number
    collectedFeesToken1?: boolean | number
    transaction?: TransactionRequest
    feeGrowthInside0LastX128?: boolean | number
    feeGrowthInside1LastX128?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PositionSnapshot_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),owner?: (Scalars['Bytes'] | null),owner_not?: (Scalars['Bytes'] | null),owner_gt?: (Scalars['Bytes'] | null),owner_lt?: (Scalars['Bytes'] | null),owner_gte?: (Scalars['Bytes'] | null),owner_lte?: (Scalars['Bytes'] | null),owner_in?: (Scalars['Bytes'][] | null),owner_not_in?: (Scalars['Bytes'][] | null),owner_contains?: (Scalars['Bytes'] | null),owner_not_contains?: (Scalars['Bytes'] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),position?: (Scalars['String'] | null),position_not?: (Scalars['String'] | null),position_gt?: (Scalars['String'] | null),position_lt?: (Scalars['String'] | null),position_gte?: (Scalars['String'] | null),position_lte?: (Scalars['String'] | null),position_in?: (Scalars['String'][] | null),position_not_in?: (Scalars['String'][] | null),position_contains?: (Scalars['String'] | null),position_contains_nocase?: (Scalars['String'] | null),position_not_contains?: (Scalars['String'] | null),position_not_contains_nocase?: (Scalars['String'] | null),position_starts_with?: (Scalars['String'] | null),position_starts_with_nocase?: (Scalars['String'] | null),position_not_starts_with?: (Scalars['String'] | null),position_not_starts_with_nocase?: (Scalars['String'] | null),position_ends_with?: (Scalars['String'] | null),position_ends_with_nocase?: (Scalars['String'] | null),position_not_ends_with?: (Scalars['String'] | null),position_not_ends_with_nocase?: (Scalars['String'] | null),position_?: (Position_filter | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),liquidity?: (Scalars['BigInt'] | null),liquidity_not?: (Scalars['BigInt'] | null),liquidity_gt?: (Scalars['BigInt'] | null),liquidity_lt?: (Scalars['BigInt'] | null),liquidity_gte?: (Scalars['BigInt'] | null),liquidity_lte?: (Scalars['BigInt'] | null),liquidity_in?: (Scalars['BigInt'][] | null),liquidity_not_in?: (Scalars['BigInt'][] | null),depositedToken0?: (Scalars['BigDecimal'] | null),depositedToken0_not?: (Scalars['BigDecimal'] | null),depositedToken0_gt?: (Scalars['BigDecimal'] | null),depositedToken0_lt?: (Scalars['BigDecimal'] | null),depositedToken0_gte?: (Scalars['BigDecimal'] | null),depositedToken0_lte?: (Scalars['BigDecimal'] | null),depositedToken0_in?: (Scalars['BigDecimal'][] | null),depositedToken0_not_in?: (Scalars['BigDecimal'][] | null),depositedToken1?: (Scalars['BigDecimal'] | null),depositedToken1_not?: (Scalars['BigDecimal'] | null),depositedToken1_gt?: (Scalars['BigDecimal'] | null),depositedToken1_lt?: (Scalars['BigDecimal'] | null),depositedToken1_gte?: (Scalars['BigDecimal'] | null),depositedToken1_lte?: (Scalars['BigDecimal'] | null),depositedToken1_in?: (Scalars['BigDecimal'][] | null),depositedToken1_not_in?: (Scalars['BigDecimal'][] | null),withdrawnToken0?: (Scalars['BigDecimal'] | null),withdrawnToken0_not?: (Scalars['BigDecimal'] | null),withdrawnToken0_gt?: (Scalars['BigDecimal'] | null),withdrawnToken0_lt?: (Scalars['BigDecimal'] | null),withdrawnToken0_gte?: (Scalars['BigDecimal'] | null),withdrawnToken0_lte?: (Scalars['BigDecimal'] | null),withdrawnToken0_in?: (Scalars['BigDecimal'][] | null),withdrawnToken0_not_in?: (Scalars['BigDecimal'][] | null),withdrawnToken1?: (Scalars['BigDecimal'] | null),withdrawnToken1_not?: (Scalars['BigDecimal'] | null),withdrawnToken1_gt?: (Scalars['BigDecimal'] | null),withdrawnToken1_lt?: (Scalars['BigDecimal'] | null),withdrawnToken1_gte?: (Scalars['BigDecimal'] | null),withdrawnToken1_lte?: (Scalars['BigDecimal'] | null),withdrawnToken1_in?: (Scalars['BigDecimal'][] | null),withdrawnToken1_not_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken0?: (Scalars['BigDecimal'] | null),collectedFeesToken0_not?: (Scalars['BigDecimal'] | null),collectedFeesToken0_gt?: (Scalars['BigDecimal'] | null),collectedFeesToken0_lt?: (Scalars['BigDecimal'] | null),collectedFeesToken0_gte?: (Scalars['BigDecimal'] | null),collectedFeesToken0_lte?: (Scalars['BigDecimal'] | null),collectedFeesToken0_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken0_not_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken1?: (Scalars['BigDecimal'] | null),collectedFeesToken1_not?: (Scalars['BigDecimal'] | null),collectedFeesToken1_gt?: (Scalars['BigDecimal'] | null),collectedFeesToken1_lt?: (Scalars['BigDecimal'] | null),collectedFeesToken1_gte?: (Scalars['BigDecimal'] | null),collectedFeesToken1_lte?: (Scalars['BigDecimal'] | null),collectedFeesToken1_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken1_not_in?: (Scalars['BigDecimal'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_contains_nocase?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_not_contains_nocase?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_starts_with_nocase?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_not_starts_with_nocase?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_ends_with_nocase?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),transaction_not_ends_with_nocase?: (Scalars['String'] | null),transaction_?: (Transaction_filter | null),feeGrowthInside0LastX128?: (Scalars['BigInt'] | null),feeGrowthInside0LastX128_not?: (Scalars['BigInt'] | null),feeGrowthInside0LastX128_gt?: (Scalars['BigInt'] | null),feeGrowthInside0LastX128_lt?: (Scalars['BigInt'] | null),feeGrowthInside0LastX128_gte?: (Scalars['BigInt'] | null),feeGrowthInside0LastX128_lte?: (Scalars['BigInt'] | null),feeGrowthInside0LastX128_in?: (Scalars['BigInt'][] | null),feeGrowthInside0LastX128_not_in?: (Scalars['BigInt'][] | null),feeGrowthInside1LastX128?: (Scalars['BigInt'] | null),feeGrowthInside1LastX128_not?: (Scalars['BigInt'] | null),feeGrowthInside1LastX128_gt?: (Scalars['BigInt'] | null),feeGrowthInside1LastX128_lt?: (Scalars['BigInt'] | null),feeGrowthInside1LastX128_gte?: (Scalars['BigInt'] | null),feeGrowthInside1LastX128_lte?: (Scalars['BigInt'] | null),feeGrowthInside1LastX128_in?: (Scalars['BigInt'][] | null),feeGrowthInside1LastX128_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((PositionSnapshot_filter | null)[] | null),or?: ((PositionSnapshot_filter | null)[] | null)}

export interface Position_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),tokenId?: (Scalars['BigInt'] | null),tokenId_not?: (Scalars['BigInt'] | null),tokenId_gt?: (Scalars['BigInt'] | null),tokenId_lt?: (Scalars['BigInt'] | null),tokenId_gte?: (Scalars['BigInt'] | null),tokenId_lte?: (Scalars['BigInt'] | null),tokenId_in?: (Scalars['BigInt'][] | null),tokenId_not_in?: (Scalars['BigInt'][] | null),owner?: (Scalars['Bytes'] | null),owner_not?: (Scalars['Bytes'] | null),owner_gt?: (Scalars['Bytes'] | null),owner_lt?: (Scalars['Bytes'] | null),owner_gte?: (Scalars['Bytes'] | null),owner_lte?: (Scalars['Bytes'] | null),owner_in?: (Scalars['Bytes'][] | null),owner_not_in?: (Scalars['Bytes'][] | null),owner_contains?: (Scalars['Bytes'] | null),owner_not_contains?: (Scalars['Bytes'] | null),staked?: (Scalars['Boolean'] | null),staked_not?: (Scalars['Boolean'] | null),staked_in?: (Scalars['Boolean'][] | null),staked_not_in?: (Scalars['Boolean'][] | null),oldOwner?: (Scalars['Bytes'] | null),oldOwner_not?: (Scalars['Bytes'] | null),oldOwner_gt?: (Scalars['Bytes'] | null),oldOwner_lt?: (Scalars['Bytes'] | null),oldOwner_gte?: (Scalars['Bytes'] | null),oldOwner_lte?: (Scalars['Bytes'] | null),oldOwner_in?: (Scalars['Bytes'][] | null),oldOwner_not_in?: (Scalars['Bytes'][] | null),oldOwner_contains?: (Scalars['Bytes'] | null),oldOwner_not_contains?: (Scalars['Bytes'] | null),liquidity?: (Scalars['BigInt'] | null),liquidity_not?: (Scalars['BigInt'] | null),liquidity_gt?: (Scalars['BigInt'] | null),liquidity_lt?: (Scalars['BigInt'] | null),liquidity_gte?: (Scalars['BigInt'] | null),liquidity_lte?: (Scalars['BigInt'] | null),liquidity_in?: (Scalars['BigInt'][] | null),liquidity_not_in?: (Scalars['BigInt'][] | null),approved?: (Scalars['Bytes'] | null),approved_not?: (Scalars['Bytes'] | null),approved_gt?: (Scalars['Bytes'] | null),approved_lt?: (Scalars['Bytes'] | null),approved_gte?: (Scalars['Bytes'] | null),approved_lte?: (Scalars['Bytes'] | null),approved_in?: (Scalars['Bytes'][] | null),approved_not_in?: (Scalars['Bytes'][] | null),approved_contains?: (Scalars['Bytes'] | null),approved_not_contains?: (Scalars['Bytes'] | null),incentiveId?: (Scalars['Bytes'] | null),incentiveId_not?: (Scalars['Bytes'] | null),incentiveId_gt?: (Scalars['Bytes'] | null),incentiveId_lt?: (Scalars['Bytes'] | null),incentiveId_gte?: (Scalars['Bytes'] | null),incentiveId_lte?: (Scalars['Bytes'] | null),incentiveId_in?: (Scalars['Bytes'][] | null),incentiveId_not_in?: (Scalars['Bytes'][] | null),incentiveId_contains?: (Scalars['Bytes'] | null),incentiveId_not_contains?: (Scalars['Bytes'] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Position_filter | null)[] | null),or?: ((Position_filter | null)[] | null)}

export interface QueryRequest{
    incentive?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},IncentiveRequest]
    incentives?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Incentive_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Incentive_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},IncentiveRequest]
    position?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PositionRequest]
    positions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Position_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Position_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PositionRequest]
    factory?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},FactoryRequest]
    factories?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Factory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Factory_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},FactoryRequest]
    bundle?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},BundleRequest]
    bundles?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},BundleRequest]
    token?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenRequest]
    tokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenRequest]
    pool?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolRequest]
    pools?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolRequest]
    tick?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickRequest]
    ticks?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickRequest]
    positionSnapshot?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PositionSnapshotRequest]
    positionSnapshots?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PositionSnapshot_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PositionSnapshotRequest]
    transaction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TransactionRequest]
    transactions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TransactionRequest]
    mint?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},MintRequest]
    mints?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},MintRequest]
    burn?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},BurnRequest]
    burns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},BurnRequest]
    swap?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},SwapRequest]
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},SwapRequest]
    collect?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},CollectRequest]
    collects?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},CollectRequest]
    flash?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},FlashRequest]
    flashes?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},FlashRequest]
    uniswapDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},UniswapDayDataRequest]
    uniswapDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},UniswapDayDataRequest]
    poolDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolDayDataRequest]
    poolDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolDayDataRequest]
    poolHourData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolHourDataRequest]
    poolHourDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolHourDataRequest]
    tickHourData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickHourDataRequest]
    tickHourDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickHourData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickHourDataRequest]
    tickDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickDayDataRequest]
    tickDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickDayData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickDayDataRequest]
    tokenDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenDayDataRequest]
    tokenDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenDayDataRequest]
    tokenHourData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenHourDataRequest]
    tokenHourDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenHourData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenHourDataRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionRequest{
    incentive?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},IncentiveRequest]
    incentives?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Incentive_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Incentive_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},IncentiveRequest]
    position?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PositionRequest]
    positions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Position_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Position_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PositionRequest]
    factory?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},FactoryRequest]
    factories?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Factory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Factory_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},FactoryRequest]
    bundle?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},BundleRequest]
    bundles?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},BundleRequest]
    token?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenRequest]
    tokens?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenRequest]
    pool?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolRequest]
    pools?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolRequest]
    tick?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickRequest]
    ticks?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickRequest]
    positionSnapshot?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PositionSnapshotRequest]
    positionSnapshots?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PositionSnapshot_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PositionSnapshotRequest]
    transaction?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TransactionRequest]
    transactions?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TransactionRequest]
    mint?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},MintRequest]
    mints?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},MintRequest]
    burn?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},BurnRequest]
    burns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},BurnRequest]
    swap?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},SwapRequest]
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},SwapRequest]
    collect?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},CollectRequest]
    collects?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},CollectRequest]
    flash?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},FlashRequest]
    flashes?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},FlashRequest]
    uniswapDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},UniswapDayDataRequest]
    uniswapDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},UniswapDayDataRequest]
    poolDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolDayDataRequest]
    poolDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolDayDataRequest]
    poolHourData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolHourDataRequest]
    poolHourDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},PoolHourDataRequest]
    tickHourData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickHourDataRequest]
    tickHourDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickHourData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickHourDataRequest]
    tickDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickDayDataRequest]
    tickDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickDayData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TickDayDataRequest]
    tokenDayData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenDayDataRequest]
    tokenDayDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenDayDataRequest]
    tokenHourData?: [{id: Scalars['ID'],
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenHourDataRequest]
    tokenHourDatas?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenHourData_filter | null),
    /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
    block?: (Block_height | null),
    /** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
    subgraphError: _SubgraphErrorPolicy_},TokenHourDataRequest]
    /** Access to subgraph metadata */
    _meta?: [{block?: (Block_height | null)},_Meta_Request] | _Meta_Request
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwapRequest{
    id?: boolean | number
    transaction?: TransactionRequest
    timestamp?: boolean | number
    pool?: PoolRequest
    token0?: TokenRequest
    token1?: TokenRequest
    sender?: boolean | number
    recipient?: boolean | number
    origin?: boolean | number
    amount0?: boolean | number
    amount1?: boolean | number
    amountUSD?: boolean | number
    sqrtPriceX96?: boolean | number
    tick?: boolean | number
    logIndex?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Swap_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),transaction?: (Scalars['String'] | null),transaction_not?: (Scalars['String'] | null),transaction_gt?: (Scalars['String'] | null),transaction_lt?: (Scalars['String'] | null),transaction_gte?: (Scalars['String'] | null),transaction_lte?: (Scalars['String'] | null),transaction_in?: (Scalars['String'][] | null),transaction_not_in?: (Scalars['String'][] | null),transaction_contains?: (Scalars['String'] | null),transaction_contains_nocase?: (Scalars['String'] | null),transaction_not_contains?: (Scalars['String'] | null),transaction_not_contains_nocase?: (Scalars['String'] | null),transaction_starts_with?: (Scalars['String'] | null),transaction_starts_with_nocase?: (Scalars['String'] | null),transaction_not_starts_with?: (Scalars['String'] | null),transaction_not_starts_with_nocase?: (Scalars['String'] | null),transaction_ends_with?: (Scalars['String'] | null),transaction_ends_with_nocase?: (Scalars['String'] | null),transaction_not_ends_with?: (Scalars['String'] | null),transaction_not_ends_with_nocase?: (Scalars['String'] | null),transaction_?: (Transaction_filter | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),token0?: (Scalars['String'] | null),token0_not?: (Scalars['String'] | null),token0_gt?: (Scalars['String'] | null),token0_lt?: (Scalars['String'] | null),token0_gte?: (Scalars['String'] | null),token0_lte?: (Scalars['String'] | null),token0_in?: (Scalars['String'][] | null),token0_not_in?: (Scalars['String'][] | null),token0_contains?: (Scalars['String'] | null),token0_contains_nocase?: (Scalars['String'] | null),token0_not_contains?: (Scalars['String'] | null),token0_not_contains_nocase?: (Scalars['String'] | null),token0_starts_with?: (Scalars['String'] | null),token0_starts_with_nocase?: (Scalars['String'] | null),token0_not_starts_with?: (Scalars['String'] | null),token0_not_starts_with_nocase?: (Scalars['String'] | null),token0_ends_with?: (Scalars['String'] | null),token0_ends_with_nocase?: (Scalars['String'] | null),token0_not_ends_with?: (Scalars['String'] | null),token0_not_ends_with_nocase?: (Scalars['String'] | null),token0_?: (Token_filter | null),token1?: (Scalars['String'] | null),token1_not?: (Scalars['String'] | null),token1_gt?: (Scalars['String'] | null),token1_lt?: (Scalars['String'] | null),token1_gte?: (Scalars['String'] | null),token1_lte?: (Scalars['String'] | null),token1_in?: (Scalars['String'][] | null),token1_not_in?: (Scalars['String'][] | null),token1_contains?: (Scalars['String'] | null),token1_contains_nocase?: (Scalars['String'] | null),token1_not_contains?: (Scalars['String'] | null),token1_not_contains_nocase?: (Scalars['String'] | null),token1_starts_with?: (Scalars['String'] | null),token1_starts_with_nocase?: (Scalars['String'] | null),token1_not_starts_with?: (Scalars['String'] | null),token1_not_starts_with_nocase?: (Scalars['String'] | null),token1_ends_with?: (Scalars['String'] | null),token1_ends_with_nocase?: (Scalars['String'] | null),token1_not_ends_with?: (Scalars['String'] | null),token1_not_ends_with_nocase?: (Scalars['String'] | null),token1_?: (Token_filter | null),sender?: (Scalars['Bytes'] | null),sender_not?: (Scalars['Bytes'] | null),sender_gt?: (Scalars['Bytes'] | null),sender_lt?: (Scalars['Bytes'] | null),sender_gte?: (Scalars['Bytes'] | null),sender_lte?: (Scalars['Bytes'] | null),sender_in?: (Scalars['Bytes'][] | null),sender_not_in?: (Scalars['Bytes'][] | null),sender_contains?: (Scalars['Bytes'] | null),sender_not_contains?: (Scalars['Bytes'] | null),recipient?: (Scalars['Bytes'] | null),recipient_not?: (Scalars['Bytes'] | null),recipient_gt?: (Scalars['Bytes'] | null),recipient_lt?: (Scalars['Bytes'] | null),recipient_gte?: (Scalars['Bytes'] | null),recipient_lte?: (Scalars['Bytes'] | null),recipient_in?: (Scalars['Bytes'][] | null),recipient_not_in?: (Scalars['Bytes'][] | null),recipient_contains?: (Scalars['Bytes'] | null),recipient_not_contains?: (Scalars['Bytes'] | null),origin?: (Scalars['Bytes'] | null),origin_not?: (Scalars['Bytes'] | null),origin_gt?: (Scalars['Bytes'] | null),origin_lt?: (Scalars['Bytes'] | null),origin_gte?: (Scalars['Bytes'] | null),origin_lte?: (Scalars['Bytes'] | null),origin_in?: (Scalars['Bytes'][] | null),origin_not_in?: (Scalars['Bytes'][] | null),origin_contains?: (Scalars['Bytes'] | null),origin_not_contains?: (Scalars['Bytes'] | null),amount0?: (Scalars['BigDecimal'] | null),amount0_not?: (Scalars['BigDecimal'] | null),amount0_gt?: (Scalars['BigDecimal'] | null),amount0_lt?: (Scalars['BigDecimal'] | null),amount0_gte?: (Scalars['BigDecimal'] | null),amount0_lte?: (Scalars['BigDecimal'] | null),amount0_in?: (Scalars['BigDecimal'][] | null),amount0_not_in?: (Scalars['BigDecimal'][] | null),amount1?: (Scalars['BigDecimal'] | null),amount1_not?: (Scalars['BigDecimal'] | null),amount1_gt?: (Scalars['BigDecimal'] | null),amount1_lt?: (Scalars['BigDecimal'] | null),amount1_gte?: (Scalars['BigDecimal'] | null),amount1_lte?: (Scalars['BigDecimal'] | null),amount1_in?: (Scalars['BigDecimal'][] | null),amount1_not_in?: (Scalars['BigDecimal'][] | null),amountUSD?: (Scalars['BigDecimal'] | null),amountUSD_not?: (Scalars['BigDecimal'] | null),amountUSD_gt?: (Scalars['BigDecimal'] | null),amountUSD_lt?: (Scalars['BigDecimal'] | null),amountUSD_gte?: (Scalars['BigDecimal'] | null),amountUSD_lte?: (Scalars['BigDecimal'] | null),amountUSD_in?: (Scalars['BigDecimal'][] | null),amountUSD_not_in?: (Scalars['BigDecimal'][] | null),sqrtPriceX96?: (Scalars['BigInt'] | null),sqrtPriceX96_not?: (Scalars['BigInt'] | null),sqrtPriceX96_gt?: (Scalars['BigInt'] | null),sqrtPriceX96_lt?: (Scalars['BigInt'] | null),sqrtPriceX96_gte?: (Scalars['BigInt'] | null),sqrtPriceX96_lte?: (Scalars['BigInt'] | null),sqrtPriceX96_in?: (Scalars['BigInt'][] | null),sqrtPriceX96_not_in?: (Scalars['BigInt'][] | null),tick?: (Scalars['BigInt'] | null),tick_not?: (Scalars['BigInt'] | null),tick_gt?: (Scalars['BigInt'] | null),tick_lt?: (Scalars['BigInt'] | null),tick_gte?: (Scalars['BigInt'] | null),tick_lte?: (Scalars['BigInt'] | null),tick_in?: (Scalars['BigInt'][] | null),tick_not_in?: (Scalars['BigInt'][] | null),logIndex?: (Scalars['BigInt'] | null),logIndex_not?: (Scalars['BigInt'] | null),logIndex_gt?: (Scalars['BigInt'] | null),logIndex_lt?: (Scalars['BigInt'] | null),logIndex_gte?: (Scalars['BigInt'] | null),logIndex_lte?: (Scalars['BigInt'] | null),logIndex_in?: (Scalars['BigInt'][] | null),logIndex_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Swap_filter | null)[] | null),or?: ((Swap_filter | null)[] | null)}

export interface TickRequest{
    id?: boolean | number
    poolAddress?: boolean | number
    tickIdx?: boolean | number
    pool?: PoolRequest
    liquidityGross?: boolean | number
    liquidityNet?: boolean | number
    price0?: boolean | number
    price1?: boolean | number
    volumeToken0?: boolean | number
    volumeToken1?: boolean | number
    volumeUSD?: boolean | number
    untrackedVolumeUSD?: boolean | number
    feesUSD?: boolean | number
    collectedFeesToken0?: boolean | number
    collectedFeesToken1?: boolean | number
    collectedFeesUSD?: boolean | number
    createdAtTimestamp?: boolean | number
    createdAtBlockNumber?: boolean | number
    liquidityProviderCount?: boolean | number
    feeGrowthOutside0X128?: boolean | number
    feeGrowthOutside1X128?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TickDayDataRequest{
    id?: boolean | number
    date?: boolean | number
    pool?: PoolRequest
    tick?: TickRequest
    liquidityGross?: boolean | number
    liquidityNet?: boolean | number
    volumeToken0?: boolean | number
    volumeToken1?: boolean | number
    volumeUSD?: boolean | number
    feesUSD?: boolean | number
    feeGrowthOutside0X128?: boolean | number
    feeGrowthOutside1X128?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TickDayData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),date?: (Scalars['Int'] | null),date_not?: (Scalars['Int'] | null),date_gt?: (Scalars['Int'] | null),date_lt?: (Scalars['Int'] | null),date_gte?: (Scalars['Int'] | null),date_lte?: (Scalars['Int'] | null),date_in?: (Scalars['Int'][] | null),date_not_in?: (Scalars['Int'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),tick?: (Scalars['String'] | null),tick_not?: (Scalars['String'] | null),tick_gt?: (Scalars['String'] | null),tick_lt?: (Scalars['String'] | null),tick_gte?: (Scalars['String'] | null),tick_lte?: (Scalars['String'] | null),tick_in?: (Scalars['String'][] | null),tick_not_in?: (Scalars['String'][] | null),tick_contains?: (Scalars['String'] | null),tick_contains_nocase?: (Scalars['String'] | null),tick_not_contains?: (Scalars['String'] | null),tick_not_contains_nocase?: (Scalars['String'] | null),tick_starts_with?: (Scalars['String'] | null),tick_starts_with_nocase?: (Scalars['String'] | null),tick_not_starts_with?: (Scalars['String'] | null),tick_not_starts_with_nocase?: (Scalars['String'] | null),tick_ends_with?: (Scalars['String'] | null),tick_ends_with_nocase?: (Scalars['String'] | null),tick_not_ends_with?: (Scalars['String'] | null),tick_not_ends_with_nocase?: (Scalars['String'] | null),tick_?: (Tick_filter | null),liquidityGross?: (Scalars['BigInt'] | null),liquidityGross_not?: (Scalars['BigInt'] | null),liquidityGross_gt?: (Scalars['BigInt'] | null),liquidityGross_lt?: (Scalars['BigInt'] | null),liquidityGross_gte?: (Scalars['BigInt'] | null),liquidityGross_lte?: (Scalars['BigInt'] | null),liquidityGross_in?: (Scalars['BigInt'][] | null),liquidityGross_not_in?: (Scalars['BigInt'][] | null),liquidityNet?: (Scalars['BigInt'] | null),liquidityNet_not?: (Scalars['BigInt'] | null),liquidityNet_gt?: (Scalars['BigInt'] | null),liquidityNet_lt?: (Scalars['BigInt'] | null),liquidityNet_gte?: (Scalars['BigInt'] | null),liquidityNet_lte?: (Scalars['BigInt'] | null),liquidityNet_in?: (Scalars['BigInt'][] | null),liquidityNet_not_in?: (Scalars['BigInt'][] | null),volumeToken0?: (Scalars['BigDecimal'] | null),volumeToken0_not?: (Scalars['BigDecimal'] | null),volumeToken0_gt?: (Scalars['BigDecimal'] | null),volumeToken0_lt?: (Scalars['BigDecimal'] | null),volumeToken0_gte?: (Scalars['BigDecimal'] | null),volumeToken0_lte?: (Scalars['BigDecimal'] | null),volumeToken0_in?: (Scalars['BigDecimal'][] | null),volumeToken0_not_in?: (Scalars['BigDecimal'][] | null),volumeToken1?: (Scalars['BigDecimal'] | null),volumeToken1_not?: (Scalars['BigDecimal'] | null),volumeToken1_gt?: (Scalars['BigDecimal'] | null),volumeToken1_lt?: (Scalars['BigDecimal'] | null),volumeToken1_gte?: (Scalars['BigDecimal'] | null),volumeToken1_lte?: (Scalars['BigDecimal'] | null),volumeToken1_in?: (Scalars['BigDecimal'][] | null),volumeToken1_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),feeGrowthOutside0X128?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_not?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_gt?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_lt?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_gte?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_lte?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_in?: (Scalars['BigInt'][] | null),feeGrowthOutside0X128_not_in?: (Scalars['BigInt'][] | null),feeGrowthOutside1X128?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_not?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_gt?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_lt?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_gte?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_lte?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_in?: (Scalars['BigInt'][] | null),feeGrowthOutside1X128_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((TickDayData_filter | null)[] | null),or?: ((TickDayData_filter | null)[] | null)}

export interface TickHourDataRequest{
    id?: boolean | number
    periodStartUnix?: boolean | number
    pool?: PoolRequest
    tick?: TickRequest
    liquidityGross?: boolean | number
    liquidityNet?: boolean | number
    volumeToken0?: boolean | number
    volumeToken1?: boolean | number
    volumeUSD?: boolean | number
    feesUSD?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TickHourData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),periodStartUnix?: (Scalars['Int'] | null),periodStartUnix_not?: (Scalars['Int'] | null),periodStartUnix_gt?: (Scalars['Int'] | null),periodStartUnix_lt?: (Scalars['Int'] | null),periodStartUnix_gte?: (Scalars['Int'] | null),periodStartUnix_lte?: (Scalars['Int'] | null),periodStartUnix_in?: (Scalars['Int'][] | null),periodStartUnix_not_in?: (Scalars['Int'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),tick?: (Scalars['String'] | null),tick_not?: (Scalars['String'] | null),tick_gt?: (Scalars['String'] | null),tick_lt?: (Scalars['String'] | null),tick_gte?: (Scalars['String'] | null),tick_lte?: (Scalars['String'] | null),tick_in?: (Scalars['String'][] | null),tick_not_in?: (Scalars['String'][] | null),tick_contains?: (Scalars['String'] | null),tick_contains_nocase?: (Scalars['String'] | null),tick_not_contains?: (Scalars['String'] | null),tick_not_contains_nocase?: (Scalars['String'] | null),tick_starts_with?: (Scalars['String'] | null),tick_starts_with_nocase?: (Scalars['String'] | null),tick_not_starts_with?: (Scalars['String'] | null),tick_not_starts_with_nocase?: (Scalars['String'] | null),tick_ends_with?: (Scalars['String'] | null),tick_ends_with_nocase?: (Scalars['String'] | null),tick_not_ends_with?: (Scalars['String'] | null),tick_not_ends_with_nocase?: (Scalars['String'] | null),tick_?: (Tick_filter | null),liquidityGross?: (Scalars['BigInt'] | null),liquidityGross_not?: (Scalars['BigInt'] | null),liquidityGross_gt?: (Scalars['BigInt'] | null),liquidityGross_lt?: (Scalars['BigInt'] | null),liquidityGross_gte?: (Scalars['BigInt'] | null),liquidityGross_lte?: (Scalars['BigInt'] | null),liquidityGross_in?: (Scalars['BigInt'][] | null),liquidityGross_not_in?: (Scalars['BigInt'][] | null),liquidityNet?: (Scalars['BigInt'] | null),liquidityNet_not?: (Scalars['BigInt'] | null),liquidityNet_gt?: (Scalars['BigInt'] | null),liquidityNet_lt?: (Scalars['BigInt'] | null),liquidityNet_gte?: (Scalars['BigInt'] | null),liquidityNet_lte?: (Scalars['BigInt'] | null),liquidityNet_in?: (Scalars['BigInt'][] | null),liquidityNet_not_in?: (Scalars['BigInt'][] | null),volumeToken0?: (Scalars['BigDecimal'] | null),volumeToken0_not?: (Scalars['BigDecimal'] | null),volumeToken0_gt?: (Scalars['BigDecimal'] | null),volumeToken0_lt?: (Scalars['BigDecimal'] | null),volumeToken0_gte?: (Scalars['BigDecimal'] | null),volumeToken0_lte?: (Scalars['BigDecimal'] | null),volumeToken0_in?: (Scalars['BigDecimal'][] | null),volumeToken0_not_in?: (Scalars['BigDecimal'][] | null),volumeToken1?: (Scalars['BigDecimal'] | null),volumeToken1_not?: (Scalars['BigDecimal'] | null),volumeToken1_gt?: (Scalars['BigDecimal'] | null),volumeToken1_lt?: (Scalars['BigDecimal'] | null),volumeToken1_gte?: (Scalars['BigDecimal'] | null),volumeToken1_lte?: (Scalars['BigDecimal'] | null),volumeToken1_in?: (Scalars['BigDecimal'][] | null),volumeToken1_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((TickHourData_filter | null)[] | null),or?: ((TickHourData_filter | null)[] | null)}

export interface Tick_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),poolAddress?: (Scalars['String'] | null),poolAddress_not?: (Scalars['String'] | null),poolAddress_gt?: (Scalars['String'] | null),poolAddress_lt?: (Scalars['String'] | null),poolAddress_gte?: (Scalars['String'] | null),poolAddress_lte?: (Scalars['String'] | null),poolAddress_in?: (Scalars['String'][] | null),poolAddress_not_in?: (Scalars['String'][] | null),poolAddress_contains?: (Scalars['String'] | null),poolAddress_contains_nocase?: (Scalars['String'] | null),poolAddress_not_contains?: (Scalars['String'] | null),poolAddress_not_contains_nocase?: (Scalars['String'] | null),poolAddress_starts_with?: (Scalars['String'] | null),poolAddress_starts_with_nocase?: (Scalars['String'] | null),poolAddress_not_starts_with?: (Scalars['String'] | null),poolAddress_not_starts_with_nocase?: (Scalars['String'] | null),poolAddress_ends_with?: (Scalars['String'] | null),poolAddress_ends_with_nocase?: (Scalars['String'] | null),poolAddress_not_ends_with?: (Scalars['String'] | null),poolAddress_not_ends_with_nocase?: (Scalars['String'] | null),tickIdx?: (Scalars['BigInt'] | null),tickIdx_not?: (Scalars['BigInt'] | null),tickIdx_gt?: (Scalars['BigInt'] | null),tickIdx_lt?: (Scalars['BigInt'] | null),tickIdx_gte?: (Scalars['BigInt'] | null),tickIdx_lte?: (Scalars['BigInt'] | null),tickIdx_in?: (Scalars['BigInt'][] | null),tickIdx_not_in?: (Scalars['BigInt'][] | null),pool?: (Scalars['String'] | null),pool_not?: (Scalars['String'] | null),pool_gt?: (Scalars['String'] | null),pool_lt?: (Scalars['String'] | null),pool_gte?: (Scalars['String'] | null),pool_lte?: (Scalars['String'] | null),pool_in?: (Scalars['String'][] | null),pool_not_in?: (Scalars['String'][] | null),pool_contains?: (Scalars['String'] | null),pool_contains_nocase?: (Scalars['String'] | null),pool_not_contains?: (Scalars['String'] | null),pool_not_contains_nocase?: (Scalars['String'] | null),pool_starts_with?: (Scalars['String'] | null),pool_starts_with_nocase?: (Scalars['String'] | null),pool_not_starts_with?: (Scalars['String'] | null),pool_not_starts_with_nocase?: (Scalars['String'] | null),pool_ends_with?: (Scalars['String'] | null),pool_ends_with_nocase?: (Scalars['String'] | null),pool_not_ends_with?: (Scalars['String'] | null),pool_not_ends_with_nocase?: (Scalars['String'] | null),pool_?: (Pool_filter | null),liquidityGross?: (Scalars['BigInt'] | null),liquidityGross_not?: (Scalars['BigInt'] | null),liquidityGross_gt?: (Scalars['BigInt'] | null),liquidityGross_lt?: (Scalars['BigInt'] | null),liquidityGross_gte?: (Scalars['BigInt'] | null),liquidityGross_lte?: (Scalars['BigInt'] | null),liquidityGross_in?: (Scalars['BigInt'][] | null),liquidityGross_not_in?: (Scalars['BigInt'][] | null),liquidityNet?: (Scalars['BigInt'] | null),liquidityNet_not?: (Scalars['BigInt'] | null),liquidityNet_gt?: (Scalars['BigInt'] | null),liquidityNet_lt?: (Scalars['BigInt'] | null),liquidityNet_gte?: (Scalars['BigInt'] | null),liquidityNet_lte?: (Scalars['BigInt'] | null),liquidityNet_in?: (Scalars['BigInt'][] | null),liquidityNet_not_in?: (Scalars['BigInt'][] | null),price0?: (Scalars['BigDecimal'] | null),price0_not?: (Scalars['BigDecimal'] | null),price0_gt?: (Scalars['BigDecimal'] | null),price0_lt?: (Scalars['BigDecimal'] | null),price0_gte?: (Scalars['BigDecimal'] | null),price0_lte?: (Scalars['BigDecimal'] | null),price0_in?: (Scalars['BigDecimal'][] | null),price0_not_in?: (Scalars['BigDecimal'][] | null),price1?: (Scalars['BigDecimal'] | null),price1_not?: (Scalars['BigDecimal'] | null),price1_gt?: (Scalars['BigDecimal'] | null),price1_lt?: (Scalars['BigDecimal'] | null),price1_gte?: (Scalars['BigDecimal'] | null),price1_lte?: (Scalars['BigDecimal'] | null),price1_in?: (Scalars['BigDecimal'][] | null),price1_not_in?: (Scalars['BigDecimal'][] | null),volumeToken0?: (Scalars['BigDecimal'] | null),volumeToken0_not?: (Scalars['BigDecimal'] | null),volumeToken0_gt?: (Scalars['BigDecimal'] | null),volumeToken0_lt?: (Scalars['BigDecimal'] | null),volumeToken0_gte?: (Scalars['BigDecimal'] | null),volumeToken0_lte?: (Scalars['BigDecimal'] | null),volumeToken0_in?: (Scalars['BigDecimal'][] | null),volumeToken0_not_in?: (Scalars['BigDecimal'][] | null),volumeToken1?: (Scalars['BigDecimal'] | null),volumeToken1_not?: (Scalars['BigDecimal'] | null),volumeToken1_gt?: (Scalars['BigDecimal'] | null),volumeToken1_lt?: (Scalars['BigDecimal'] | null),volumeToken1_gte?: (Scalars['BigDecimal'] | null),volumeToken1_lte?: (Scalars['BigDecimal'] | null),volumeToken1_in?: (Scalars['BigDecimal'][] | null),volumeToken1_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken0?: (Scalars['BigDecimal'] | null),collectedFeesToken0_not?: (Scalars['BigDecimal'] | null),collectedFeesToken0_gt?: (Scalars['BigDecimal'] | null),collectedFeesToken0_lt?: (Scalars['BigDecimal'] | null),collectedFeesToken0_gte?: (Scalars['BigDecimal'] | null),collectedFeesToken0_lte?: (Scalars['BigDecimal'] | null),collectedFeesToken0_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken0_not_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken1?: (Scalars['BigDecimal'] | null),collectedFeesToken1_not?: (Scalars['BigDecimal'] | null),collectedFeesToken1_gt?: (Scalars['BigDecimal'] | null),collectedFeesToken1_lt?: (Scalars['BigDecimal'] | null),collectedFeesToken1_gte?: (Scalars['BigDecimal'] | null),collectedFeesToken1_lte?: (Scalars['BigDecimal'] | null),collectedFeesToken1_in?: (Scalars['BigDecimal'][] | null),collectedFeesToken1_not_in?: (Scalars['BigDecimal'][] | null),collectedFeesUSD?: (Scalars['BigDecimal'] | null),collectedFeesUSD_not?: (Scalars['BigDecimal'] | null),collectedFeesUSD_gt?: (Scalars['BigDecimal'] | null),collectedFeesUSD_lt?: (Scalars['BigDecimal'] | null),collectedFeesUSD_gte?: (Scalars['BigDecimal'] | null),collectedFeesUSD_lte?: (Scalars['BigDecimal'] | null),collectedFeesUSD_in?: (Scalars['BigDecimal'][] | null),collectedFeesUSD_not_in?: (Scalars['BigDecimal'][] | null),createdAtTimestamp?: (Scalars['BigInt'] | null),createdAtTimestamp_not?: (Scalars['BigInt'] | null),createdAtTimestamp_gt?: (Scalars['BigInt'] | null),createdAtTimestamp_lt?: (Scalars['BigInt'] | null),createdAtTimestamp_gte?: (Scalars['BigInt'] | null),createdAtTimestamp_lte?: (Scalars['BigInt'] | null),createdAtTimestamp_in?: (Scalars['BigInt'][] | null),createdAtTimestamp_not_in?: (Scalars['BigInt'][] | null),createdAtBlockNumber?: (Scalars['BigInt'] | null),createdAtBlockNumber_not?: (Scalars['BigInt'] | null),createdAtBlockNumber_gt?: (Scalars['BigInt'] | null),createdAtBlockNumber_lt?: (Scalars['BigInt'] | null),createdAtBlockNumber_gte?: (Scalars['BigInt'] | null),createdAtBlockNumber_lte?: (Scalars['BigInt'] | null),createdAtBlockNumber_in?: (Scalars['BigInt'][] | null),createdAtBlockNumber_not_in?: (Scalars['BigInt'][] | null),liquidityProviderCount?: (Scalars['BigInt'] | null),liquidityProviderCount_not?: (Scalars['BigInt'] | null),liquidityProviderCount_gt?: (Scalars['BigInt'] | null),liquidityProviderCount_lt?: (Scalars['BigInt'] | null),liquidityProviderCount_gte?: (Scalars['BigInt'] | null),liquidityProviderCount_lte?: (Scalars['BigInt'] | null),liquidityProviderCount_in?: (Scalars['BigInt'][] | null),liquidityProviderCount_not_in?: (Scalars['BigInt'][] | null),feeGrowthOutside0X128?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_not?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_gt?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_lt?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_gte?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_lte?: (Scalars['BigInt'] | null),feeGrowthOutside0X128_in?: (Scalars['BigInt'][] | null),feeGrowthOutside0X128_not_in?: (Scalars['BigInt'][] | null),feeGrowthOutside1X128?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_not?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_gt?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_lt?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_gte?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_lte?: (Scalars['BigInt'] | null),feeGrowthOutside1X128_in?: (Scalars['BigInt'][] | null),feeGrowthOutside1X128_not_in?: (Scalars['BigInt'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Tick_filter | null)[] | null),or?: ((Tick_filter | null)[] | null)}

export interface TokenRequest{
    id?: boolean | number
    symbol?: boolean | number
    name?: boolean | number
    decimals?: boolean | number
    totalSupply?: boolean | number
    volume?: boolean | number
    volumeUSD?: boolean | number
    untrackedVolumeUSD?: boolean | number
    feesUSD?: boolean | number
    txCount?: boolean | number
    poolCount?: boolean | number
    totalValueLocked?: boolean | number
    totalValueLockedUSD?: boolean | number
    totalValueLockedUSDUntracked?: boolean | number
    derivedETH?: boolean | number
    whitelistPools?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null)},PoolRequest] | PoolRequest
    tokenDayData?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null)},TokenDayDataRequest] | TokenDayDataRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenDayDataRequest{
    id?: boolean | number
    date?: boolean | number
    token?: TokenRequest
    volume?: boolean | number
    volumeUSD?: boolean | number
    untrackedVolumeUSD?: boolean | number
    totalValueLocked?: boolean | number
    totalValueLockedUSD?: boolean | number
    priceUSD?: boolean | number
    feesUSD?: boolean | number
    open?: boolean | number
    high?: boolean | number
    low?: boolean | number
    close?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenDayData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),date?: (Scalars['Int'] | null),date_not?: (Scalars['Int'] | null),date_gt?: (Scalars['Int'] | null),date_lt?: (Scalars['Int'] | null),date_gte?: (Scalars['Int'] | null),date_lte?: (Scalars['Int'] | null),date_in?: (Scalars['Int'][] | null),date_not_in?: (Scalars['Int'][] | null),token?: (Scalars['String'] | null),token_not?: (Scalars['String'] | null),token_gt?: (Scalars['String'] | null),token_lt?: (Scalars['String'] | null),token_gte?: (Scalars['String'] | null),token_lte?: (Scalars['String'] | null),token_in?: (Scalars['String'][] | null),token_not_in?: (Scalars['String'][] | null),token_contains?: (Scalars['String'] | null),token_contains_nocase?: (Scalars['String'] | null),token_not_contains?: (Scalars['String'] | null),token_not_contains_nocase?: (Scalars['String'] | null),token_starts_with?: (Scalars['String'] | null),token_starts_with_nocase?: (Scalars['String'] | null),token_not_starts_with?: (Scalars['String'] | null),token_not_starts_with_nocase?: (Scalars['String'] | null),token_ends_with?: (Scalars['String'] | null),token_ends_with_nocase?: (Scalars['String'] | null),token_not_ends_with?: (Scalars['String'] | null),token_not_ends_with_nocase?: (Scalars['String'] | null),token_?: (Token_filter | null),volume?: (Scalars['BigDecimal'] | null),volume_not?: (Scalars['BigDecimal'] | null),volume_gt?: (Scalars['BigDecimal'] | null),volume_lt?: (Scalars['BigDecimal'] | null),volume_gte?: (Scalars['BigDecimal'] | null),volume_lte?: (Scalars['BigDecimal'] | null),volume_in?: (Scalars['BigDecimal'][] | null),volume_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),totalValueLocked?: (Scalars['BigDecimal'] | null),totalValueLocked_not?: (Scalars['BigDecimal'] | null),totalValueLocked_gt?: (Scalars['BigDecimal'] | null),totalValueLocked_lt?: (Scalars['BigDecimal'] | null),totalValueLocked_gte?: (Scalars['BigDecimal'] | null),totalValueLocked_lte?: (Scalars['BigDecimal'] | null),totalValueLocked_in?: (Scalars['BigDecimal'][] | null),totalValueLocked_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_not?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD_not_in?: (Scalars['BigDecimal'][] | null),priceUSD?: (Scalars['BigDecimal'] | null),priceUSD_not?: (Scalars['BigDecimal'] | null),priceUSD_gt?: (Scalars['BigDecimal'] | null),priceUSD_lt?: (Scalars['BigDecimal'] | null),priceUSD_gte?: (Scalars['BigDecimal'] | null),priceUSD_lte?: (Scalars['BigDecimal'] | null),priceUSD_in?: (Scalars['BigDecimal'][] | null),priceUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),open?: (Scalars['BigDecimal'] | null),open_not?: (Scalars['BigDecimal'] | null),open_gt?: (Scalars['BigDecimal'] | null),open_lt?: (Scalars['BigDecimal'] | null),open_gte?: (Scalars['BigDecimal'] | null),open_lte?: (Scalars['BigDecimal'] | null),open_in?: (Scalars['BigDecimal'][] | null),open_not_in?: (Scalars['BigDecimal'][] | null),high?: (Scalars['BigDecimal'] | null),high_not?: (Scalars['BigDecimal'] | null),high_gt?: (Scalars['BigDecimal'] | null),high_lt?: (Scalars['BigDecimal'] | null),high_gte?: (Scalars['BigDecimal'] | null),high_lte?: (Scalars['BigDecimal'] | null),high_in?: (Scalars['BigDecimal'][] | null),high_not_in?: (Scalars['BigDecimal'][] | null),low?: (Scalars['BigDecimal'] | null),low_not?: (Scalars['BigDecimal'] | null),low_gt?: (Scalars['BigDecimal'] | null),low_lt?: (Scalars['BigDecimal'] | null),low_gte?: (Scalars['BigDecimal'] | null),low_lte?: (Scalars['BigDecimal'] | null),low_in?: (Scalars['BigDecimal'][] | null),low_not_in?: (Scalars['BigDecimal'][] | null),close?: (Scalars['BigDecimal'] | null),close_not?: (Scalars['BigDecimal'] | null),close_gt?: (Scalars['BigDecimal'] | null),close_lt?: (Scalars['BigDecimal'] | null),close_gte?: (Scalars['BigDecimal'] | null),close_lte?: (Scalars['BigDecimal'] | null),close_in?: (Scalars['BigDecimal'][] | null),close_not_in?: (Scalars['BigDecimal'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((TokenDayData_filter | null)[] | null),or?: ((TokenDayData_filter | null)[] | null)}

export interface TokenHourDataRequest{
    id?: boolean | number
    periodStartUnix?: boolean | number
    token?: TokenRequest
    volume?: boolean | number
    volumeUSD?: boolean | number
    untrackedVolumeUSD?: boolean | number
    totalValueLocked?: boolean | number
    totalValueLockedUSD?: boolean | number
    priceUSD?: boolean | number
    feesUSD?: boolean | number
    open?: boolean | number
    high?: boolean | number
    low?: boolean | number
    close?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenHourData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),periodStartUnix?: (Scalars['Int'] | null),periodStartUnix_not?: (Scalars['Int'] | null),periodStartUnix_gt?: (Scalars['Int'] | null),periodStartUnix_lt?: (Scalars['Int'] | null),periodStartUnix_gte?: (Scalars['Int'] | null),periodStartUnix_lte?: (Scalars['Int'] | null),periodStartUnix_in?: (Scalars['Int'][] | null),periodStartUnix_not_in?: (Scalars['Int'][] | null),token?: (Scalars['String'] | null),token_not?: (Scalars['String'] | null),token_gt?: (Scalars['String'] | null),token_lt?: (Scalars['String'] | null),token_gte?: (Scalars['String'] | null),token_lte?: (Scalars['String'] | null),token_in?: (Scalars['String'][] | null),token_not_in?: (Scalars['String'][] | null),token_contains?: (Scalars['String'] | null),token_contains_nocase?: (Scalars['String'] | null),token_not_contains?: (Scalars['String'] | null),token_not_contains_nocase?: (Scalars['String'] | null),token_starts_with?: (Scalars['String'] | null),token_starts_with_nocase?: (Scalars['String'] | null),token_not_starts_with?: (Scalars['String'] | null),token_not_starts_with_nocase?: (Scalars['String'] | null),token_ends_with?: (Scalars['String'] | null),token_ends_with_nocase?: (Scalars['String'] | null),token_not_ends_with?: (Scalars['String'] | null),token_not_ends_with_nocase?: (Scalars['String'] | null),token_?: (Token_filter | null),volume?: (Scalars['BigDecimal'] | null),volume_not?: (Scalars['BigDecimal'] | null),volume_gt?: (Scalars['BigDecimal'] | null),volume_lt?: (Scalars['BigDecimal'] | null),volume_gte?: (Scalars['BigDecimal'] | null),volume_lte?: (Scalars['BigDecimal'] | null),volume_in?: (Scalars['BigDecimal'][] | null),volume_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),totalValueLocked?: (Scalars['BigDecimal'] | null),totalValueLocked_not?: (Scalars['BigDecimal'] | null),totalValueLocked_gt?: (Scalars['BigDecimal'] | null),totalValueLocked_lt?: (Scalars['BigDecimal'] | null),totalValueLocked_gte?: (Scalars['BigDecimal'] | null),totalValueLocked_lte?: (Scalars['BigDecimal'] | null),totalValueLocked_in?: (Scalars['BigDecimal'][] | null),totalValueLocked_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_not?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD_not_in?: (Scalars['BigDecimal'][] | null),priceUSD?: (Scalars['BigDecimal'] | null),priceUSD_not?: (Scalars['BigDecimal'] | null),priceUSD_gt?: (Scalars['BigDecimal'] | null),priceUSD_lt?: (Scalars['BigDecimal'] | null),priceUSD_gte?: (Scalars['BigDecimal'] | null),priceUSD_lte?: (Scalars['BigDecimal'] | null),priceUSD_in?: (Scalars['BigDecimal'][] | null),priceUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),open?: (Scalars['BigDecimal'] | null),open_not?: (Scalars['BigDecimal'] | null),open_gt?: (Scalars['BigDecimal'] | null),open_lt?: (Scalars['BigDecimal'] | null),open_gte?: (Scalars['BigDecimal'] | null),open_lte?: (Scalars['BigDecimal'] | null),open_in?: (Scalars['BigDecimal'][] | null),open_not_in?: (Scalars['BigDecimal'][] | null),high?: (Scalars['BigDecimal'] | null),high_not?: (Scalars['BigDecimal'] | null),high_gt?: (Scalars['BigDecimal'] | null),high_lt?: (Scalars['BigDecimal'] | null),high_gte?: (Scalars['BigDecimal'] | null),high_lte?: (Scalars['BigDecimal'] | null),high_in?: (Scalars['BigDecimal'][] | null),high_not_in?: (Scalars['BigDecimal'][] | null),low?: (Scalars['BigDecimal'] | null),low_not?: (Scalars['BigDecimal'] | null),low_gt?: (Scalars['BigDecimal'] | null),low_lt?: (Scalars['BigDecimal'] | null),low_gte?: (Scalars['BigDecimal'] | null),low_lte?: (Scalars['BigDecimal'] | null),low_in?: (Scalars['BigDecimal'][] | null),low_not_in?: (Scalars['BigDecimal'][] | null),close?: (Scalars['BigDecimal'] | null),close_not?: (Scalars['BigDecimal'] | null),close_gt?: (Scalars['BigDecimal'] | null),close_lt?: (Scalars['BigDecimal'] | null),close_gte?: (Scalars['BigDecimal'] | null),close_lte?: (Scalars['BigDecimal'] | null),close_in?: (Scalars['BigDecimal'][] | null),close_not_in?: (Scalars['BigDecimal'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((TokenHourData_filter | null)[] | null),or?: ((TokenHourData_filter | null)[] | null)}

export interface Token_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),symbol?: (Scalars['String'] | null),symbol_not?: (Scalars['String'] | null),symbol_gt?: (Scalars['String'] | null),symbol_lt?: (Scalars['String'] | null),symbol_gte?: (Scalars['String'] | null),symbol_lte?: (Scalars['String'] | null),symbol_in?: (Scalars['String'][] | null),symbol_not_in?: (Scalars['String'][] | null),symbol_contains?: (Scalars['String'] | null),symbol_contains_nocase?: (Scalars['String'] | null),symbol_not_contains?: (Scalars['String'] | null),symbol_not_contains_nocase?: (Scalars['String'] | null),symbol_starts_with?: (Scalars['String'] | null),symbol_starts_with_nocase?: (Scalars['String'] | null),symbol_not_starts_with?: (Scalars['String'] | null),symbol_not_starts_with_nocase?: (Scalars['String'] | null),symbol_ends_with?: (Scalars['String'] | null),symbol_ends_with_nocase?: (Scalars['String'] | null),symbol_not_ends_with?: (Scalars['String'] | null),symbol_not_ends_with_nocase?: (Scalars['String'] | null),name?: (Scalars['String'] | null),name_not?: (Scalars['String'] | null),name_gt?: (Scalars['String'] | null),name_lt?: (Scalars['String'] | null),name_gte?: (Scalars['String'] | null),name_lte?: (Scalars['String'] | null),name_in?: (Scalars['String'][] | null),name_not_in?: (Scalars['String'][] | null),name_contains?: (Scalars['String'] | null),name_contains_nocase?: (Scalars['String'] | null),name_not_contains?: (Scalars['String'] | null),name_not_contains_nocase?: (Scalars['String'] | null),name_starts_with?: (Scalars['String'] | null),name_starts_with_nocase?: (Scalars['String'] | null),name_not_starts_with?: (Scalars['String'] | null),name_not_starts_with_nocase?: (Scalars['String'] | null),name_ends_with?: (Scalars['String'] | null),name_ends_with_nocase?: (Scalars['String'] | null),name_not_ends_with?: (Scalars['String'] | null),name_not_ends_with_nocase?: (Scalars['String'] | null),decimals?: (Scalars['BigInt'] | null),decimals_not?: (Scalars['BigInt'] | null),decimals_gt?: (Scalars['BigInt'] | null),decimals_lt?: (Scalars['BigInt'] | null),decimals_gte?: (Scalars['BigInt'] | null),decimals_lte?: (Scalars['BigInt'] | null),decimals_in?: (Scalars['BigInt'][] | null),decimals_not_in?: (Scalars['BigInt'][] | null),totalSupply?: (Scalars['BigInt'] | null),totalSupply_not?: (Scalars['BigInt'] | null),totalSupply_gt?: (Scalars['BigInt'] | null),totalSupply_lt?: (Scalars['BigInt'] | null),totalSupply_gte?: (Scalars['BigInt'] | null),totalSupply_lte?: (Scalars['BigInt'] | null),totalSupply_in?: (Scalars['BigInt'][] | null),totalSupply_not_in?: (Scalars['BigInt'][] | null),volume?: (Scalars['BigDecimal'] | null),volume_not?: (Scalars['BigDecimal'] | null),volume_gt?: (Scalars['BigDecimal'] | null),volume_lt?: (Scalars['BigDecimal'] | null),volume_gte?: (Scalars['BigDecimal'] | null),volume_lte?: (Scalars['BigDecimal'] | null),volume_in?: (Scalars['BigDecimal'][] | null),volume_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_not?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lt?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_gte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_lte?: (Scalars['BigDecimal'] | null),untrackedVolumeUSD_in?: (Scalars['BigDecimal'][] | null),untrackedVolumeUSD_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null),poolCount?: (Scalars['BigInt'] | null),poolCount_not?: (Scalars['BigInt'] | null),poolCount_gt?: (Scalars['BigInt'] | null),poolCount_lt?: (Scalars['BigInt'] | null),poolCount_gte?: (Scalars['BigInt'] | null),poolCount_lte?: (Scalars['BigInt'] | null),poolCount_in?: (Scalars['BigInt'][] | null),poolCount_not_in?: (Scalars['BigInt'][] | null),totalValueLocked?: (Scalars['BigDecimal'] | null),totalValueLocked_not?: (Scalars['BigDecimal'] | null),totalValueLocked_gt?: (Scalars['BigDecimal'] | null),totalValueLocked_lt?: (Scalars['BigDecimal'] | null),totalValueLocked_gte?: (Scalars['BigDecimal'] | null),totalValueLocked_lte?: (Scalars['BigDecimal'] | null),totalValueLocked_in?: (Scalars['BigDecimal'][] | null),totalValueLocked_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_not?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lt?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_gte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_lte?: (Scalars['BigDecimal'] | null),totalValueLockedUSD_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSD_not_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSDUntracked?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_not?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_gt?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_lt?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_gte?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_lte?: (Scalars['BigDecimal'] | null),totalValueLockedUSDUntracked_in?: (Scalars['BigDecimal'][] | null),totalValueLockedUSDUntracked_not_in?: (Scalars['BigDecimal'][] | null),derivedETH?: (Scalars['BigDecimal'] | null),derivedETH_not?: (Scalars['BigDecimal'] | null),derivedETH_gt?: (Scalars['BigDecimal'] | null),derivedETH_lt?: (Scalars['BigDecimal'] | null),derivedETH_gte?: (Scalars['BigDecimal'] | null),derivedETH_lte?: (Scalars['BigDecimal'] | null),derivedETH_in?: (Scalars['BigDecimal'][] | null),derivedETH_not_in?: (Scalars['BigDecimal'][] | null),whitelistPools?: (Scalars['String'][] | null),whitelistPools_not?: (Scalars['String'][] | null),whitelistPools_contains?: (Scalars['String'][] | null),whitelistPools_contains_nocase?: (Scalars['String'][] | null),whitelistPools_not_contains?: (Scalars['String'][] | null),whitelistPools_not_contains_nocase?: (Scalars['String'][] | null),whitelistPools_?: (Pool_filter | null),tokenDayData_?: (TokenDayData_filter | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Token_filter | null)[] | null),or?: ((Token_filter | null)[] | null)}

export interface TransactionRequest{
    id?: boolean | number
    blockNumber?: boolean | number
    timestamp?: boolean | number
    gasUsed?: boolean | number
    gasPrice?: boolean | number
    mints?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)},MintRequest] | MintRequest
    burns?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)},BurnRequest] | BurnRequest
    swaps?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)},SwapRequest] | SwapRequest
    flashed?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null)},FlashRequest] | FlashRequest
    collects?: [{skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null)},CollectRequest] | CollectRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Transaction_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),blockNumber?: (Scalars['BigInt'] | null),blockNumber_not?: (Scalars['BigInt'] | null),blockNumber_gt?: (Scalars['BigInt'] | null),blockNumber_lt?: (Scalars['BigInt'] | null),blockNumber_gte?: (Scalars['BigInt'] | null),blockNumber_lte?: (Scalars['BigInt'] | null),blockNumber_in?: (Scalars['BigInt'][] | null),blockNumber_not_in?: (Scalars['BigInt'][] | null),timestamp?: (Scalars['BigInt'] | null),timestamp_not?: (Scalars['BigInt'] | null),timestamp_gt?: (Scalars['BigInt'] | null),timestamp_lt?: (Scalars['BigInt'] | null),timestamp_gte?: (Scalars['BigInt'] | null),timestamp_lte?: (Scalars['BigInt'] | null),timestamp_in?: (Scalars['BigInt'][] | null),timestamp_not_in?: (Scalars['BigInt'][] | null),gasUsed?: (Scalars['BigInt'] | null),gasUsed_not?: (Scalars['BigInt'] | null),gasUsed_gt?: (Scalars['BigInt'] | null),gasUsed_lt?: (Scalars['BigInt'] | null),gasUsed_gte?: (Scalars['BigInt'] | null),gasUsed_lte?: (Scalars['BigInt'] | null),gasUsed_in?: (Scalars['BigInt'][] | null),gasUsed_not_in?: (Scalars['BigInt'][] | null),gasPrice?: (Scalars['BigInt'] | null),gasPrice_not?: (Scalars['BigInt'] | null),gasPrice_gt?: (Scalars['BigInt'] | null),gasPrice_lt?: (Scalars['BigInt'] | null),gasPrice_gte?: (Scalars['BigInt'] | null),gasPrice_lte?: (Scalars['BigInt'] | null),gasPrice_in?: (Scalars['BigInt'][] | null),gasPrice_not_in?: (Scalars['BigInt'][] | null),mints_?: (Mint_filter | null),burns_?: (Burn_filter | null),swaps_?: (Swap_filter | null),flashed_?: (Flash_filter | null),collects_?: (Collect_filter | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((Transaction_filter | null)[] | null),or?: ((Transaction_filter | null)[] | null)}

export interface UniswapDayDataRequest{
    id?: boolean | number
    date?: boolean | number
    volumeETH?: boolean | number
    volumeUSD?: boolean | number
    volumeUSDUntracked?: boolean | number
    feesUSD?: boolean | number
    txCount?: boolean | number
    tvlUSD?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UniswapDayData_filter {id?: (Scalars['ID'] | null),id_not?: (Scalars['ID'] | null),id_gt?: (Scalars['ID'] | null),id_lt?: (Scalars['ID'] | null),id_gte?: (Scalars['ID'] | null),id_lte?: (Scalars['ID'] | null),id_in?: (Scalars['ID'][] | null),id_not_in?: (Scalars['ID'][] | null),date?: (Scalars['Int'] | null),date_not?: (Scalars['Int'] | null),date_gt?: (Scalars['Int'] | null),date_lt?: (Scalars['Int'] | null),date_gte?: (Scalars['Int'] | null),date_lte?: (Scalars['Int'] | null),date_in?: (Scalars['Int'][] | null),date_not_in?: (Scalars['Int'][] | null),volumeETH?: (Scalars['BigDecimal'] | null),volumeETH_not?: (Scalars['BigDecimal'] | null),volumeETH_gt?: (Scalars['BigDecimal'] | null),volumeETH_lt?: (Scalars['BigDecimal'] | null),volumeETH_gte?: (Scalars['BigDecimal'] | null),volumeETH_lte?: (Scalars['BigDecimal'] | null),volumeETH_in?: (Scalars['BigDecimal'][] | null),volumeETH_not_in?: (Scalars['BigDecimal'][] | null),volumeUSD?: (Scalars['BigDecimal'] | null),volumeUSD_not?: (Scalars['BigDecimal'] | null),volumeUSD_gt?: (Scalars['BigDecimal'] | null),volumeUSD_lt?: (Scalars['BigDecimal'] | null),volumeUSD_gte?: (Scalars['BigDecimal'] | null),volumeUSD_lte?: (Scalars['BigDecimal'] | null),volumeUSD_in?: (Scalars['BigDecimal'][] | null),volumeUSD_not_in?: (Scalars['BigDecimal'][] | null),volumeUSDUntracked?: (Scalars['BigDecimal'] | null),volumeUSDUntracked_not?: (Scalars['BigDecimal'] | null),volumeUSDUntracked_gt?: (Scalars['BigDecimal'] | null),volumeUSDUntracked_lt?: (Scalars['BigDecimal'] | null),volumeUSDUntracked_gte?: (Scalars['BigDecimal'] | null),volumeUSDUntracked_lte?: (Scalars['BigDecimal'] | null),volumeUSDUntracked_in?: (Scalars['BigDecimal'][] | null),volumeUSDUntracked_not_in?: (Scalars['BigDecimal'][] | null),feesUSD?: (Scalars['BigDecimal'] | null),feesUSD_not?: (Scalars['BigDecimal'] | null),feesUSD_gt?: (Scalars['BigDecimal'] | null),feesUSD_lt?: (Scalars['BigDecimal'] | null),feesUSD_gte?: (Scalars['BigDecimal'] | null),feesUSD_lte?: (Scalars['BigDecimal'] | null),feesUSD_in?: (Scalars['BigDecimal'][] | null),feesUSD_not_in?: (Scalars['BigDecimal'][] | null),txCount?: (Scalars['BigInt'] | null),txCount_not?: (Scalars['BigInt'] | null),txCount_gt?: (Scalars['BigInt'] | null),txCount_lt?: (Scalars['BigInt'] | null),txCount_gte?: (Scalars['BigInt'] | null),txCount_lte?: (Scalars['BigInt'] | null),txCount_in?: (Scalars['BigInt'][] | null),txCount_not_in?: (Scalars['BigInt'][] | null),tvlUSD?: (Scalars['BigDecimal'] | null),tvlUSD_not?: (Scalars['BigDecimal'] | null),tvlUSD_gt?: (Scalars['BigDecimal'] | null),tvlUSD_lt?: (Scalars['BigDecimal'] | null),tvlUSD_gte?: (Scalars['BigDecimal'] | null),tvlUSD_lte?: (Scalars['BigDecimal'] | null),tvlUSD_in?: (Scalars['BigDecimal'][] | null),tvlUSD_not_in?: (Scalars['BigDecimal'][] | null),
/** Filter for the block changed event. */
_change_block?: (BlockChangedFilter | null),and?: ((UniswapDayData_filter | null)[] | null),or?: ((UniswapDayData_filter | null)[] | null)}

export interface _Block_Request{
    /** The hash of the block */
    hash?: boolean | number
    /** The block number */
    number?: boolean | number
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The type for the top-level _meta field */
export interface _Meta_Request{
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     * 
     */
    block?: _Block_Request
    /** The deployment ID */
    deployment?: boolean | number
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Bundle_possibleTypes = ['Bundle']
export const isBundle = (obj?: { __typename?: any } | null): obj is Bundle => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBundle"')
  return Bundle_possibleTypes.includes(obj.__typename)
}



const Burn_possibleTypes = ['Burn']
export const isBurn = (obj?: { __typename?: any } | null): obj is Burn => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBurn"')
  return Burn_possibleTypes.includes(obj.__typename)
}



const Collect_possibleTypes = ['Collect']
export const isCollect = (obj?: { __typename?: any } | null): obj is Collect => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCollect"')
  return Collect_possibleTypes.includes(obj.__typename)
}



const Factory_possibleTypes = ['Factory']
export const isFactory = (obj?: { __typename?: any } | null): obj is Factory => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFactory"')
  return Factory_possibleTypes.includes(obj.__typename)
}



const Flash_possibleTypes = ['Flash']
export const isFlash = (obj?: { __typename?: any } | null): obj is Flash => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFlash"')
  return Flash_possibleTypes.includes(obj.__typename)
}



const Incentive_possibleTypes = ['Incentive']
export const isIncentive = (obj?: { __typename?: any } | null): obj is Incentive => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isIncentive"')
  return Incentive_possibleTypes.includes(obj.__typename)
}



const Mint_possibleTypes = ['Mint']
export const isMint = (obj?: { __typename?: any } | null): obj is Mint => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMint"')
  return Mint_possibleTypes.includes(obj.__typename)
}



const Pool_possibleTypes = ['Pool']
export const isPool = (obj?: { __typename?: any } | null): obj is Pool => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPool"')
  return Pool_possibleTypes.includes(obj.__typename)
}



const PoolDayData_possibleTypes = ['PoolDayData']
export const isPoolDayData = (obj?: { __typename?: any } | null): obj is PoolDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPoolDayData"')
  return PoolDayData_possibleTypes.includes(obj.__typename)
}



const PoolHourData_possibleTypes = ['PoolHourData']
export const isPoolHourData = (obj?: { __typename?: any } | null): obj is PoolHourData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPoolHourData"')
  return PoolHourData_possibleTypes.includes(obj.__typename)
}



const Position_possibleTypes = ['Position']
export const isPosition = (obj?: { __typename?: any } | null): obj is Position => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPosition"')
  return Position_possibleTypes.includes(obj.__typename)
}



const PositionSnapshot_possibleTypes = ['PositionSnapshot']
export const isPositionSnapshot = (obj?: { __typename?: any } | null): obj is PositionSnapshot => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPositionSnapshot"')
  return PositionSnapshot_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



const Swap_possibleTypes = ['Swap']
export const isSwap = (obj?: { __typename?: any } | null): obj is Swap => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}



const Tick_possibleTypes = ['Tick']
export const isTick = (obj?: { __typename?: any } | null): obj is Tick => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTick"')
  return Tick_possibleTypes.includes(obj.__typename)
}



const TickDayData_possibleTypes = ['TickDayData']
export const isTickDayData = (obj?: { __typename?: any } | null): obj is TickDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTickDayData"')
  return TickDayData_possibleTypes.includes(obj.__typename)
}



const TickHourData_possibleTypes = ['TickHourData']
export const isTickHourData = (obj?: { __typename?: any } | null): obj is TickHourData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTickHourData"')
  return TickHourData_possibleTypes.includes(obj.__typename)
}



const Token_possibleTypes = ['Token']
export const isToken = (obj?: { __typename?: any } | null): obj is Token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



const TokenDayData_possibleTypes = ['TokenDayData']
export const isTokenDayData = (obj?: { __typename?: any } | null): obj is TokenDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTokenDayData"')
  return TokenDayData_possibleTypes.includes(obj.__typename)
}



const TokenHourData_possibleTypes = ['TokenHourData']
export const isTokenHourData = (obj?: { __typename?: any } | null): obj is TokenHourData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTokenHourData"')
  return TokenHourData_possibleTypes.includes(obj.__typename)
}



const Transaction_possibleTypes = ['Transaction']
export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}



const UniswapDayData_possibleTypes = ['UniswapDayData']
export const isUniswapDayData = (obj?: { __typename?: any } | null): obj is UniswapDayData => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUniswapDayData"')
  return UniswapDayData_possibleTypes.includes(obj.__typename)
}



const _Block__possibleTypes = ['_Block_']
export const is_Block_ = (obj?: { __typename?: any } | null): obj is _Block_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}



const _Meta__possibleTypes = ['_Meta_']
export const is_Meta_ = (obj?: { __typename?: any } | null): obj is _Meta_ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}


export interface BundlePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    ethPriceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface BundleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    ethPriceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface BurnPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    token0: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    token1: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    origin: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    tickLower: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tickUpper: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>})
}

export interface BurnObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    token0: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    token1: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    origin: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    tickLower: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tickUpper: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>})
}

export interface CollectPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    tickLower: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tickUpper: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>})
}

export interface CollectObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    owner: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    tickLower: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tickUpper: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>})
}

export interface FactoryPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    poolCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalFeesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalFeesETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedUSDUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedETHUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>})
}

export interface FactoryObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    poolCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalVolumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalFeesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalFeesETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedUSDUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedETHUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>})
}

export interface FlashPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    sender: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    recipient: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount0Paid: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount1Paid: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>})
}

export interface FlashObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    sender: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    recipient: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount0Paid: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount1Paid: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>})
}

export interface IncentivePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    rewardToken: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    pool: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    endTime: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    refundee: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    reward: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    ended: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface IncentiveObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    rewardToken: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    pool: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    startTime: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    endTime: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    refundee: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    reward: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    ended: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface MintPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    token0: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    token1: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    origin: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Promise<(Scalars['BigDecimal'] | undefined)>}),
    tickLower: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tickUpper: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>})
}

export interface MintObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    token0: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    token1: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    sender: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    origin: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    amount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigDecimal'] | undefined)) => Observable<(Scalars['BigDecimal'] | undefined)>}),
    tickLower: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tickUpper: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>})
}

export interface PoolPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    createdAtTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    createdAtBlockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    token0: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    token1: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    feeTier: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sqrtPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    feeGrowthGlobal0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    feeGrowthGlobal1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    token0Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    token1Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    tick: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    observationIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    collectedFeesToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    collectedFeesToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    collectedFeesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedUSDUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    liquidityProviderCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    poolHourData: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null)}) => {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: FieldsSelection<PoolHourData, R>[]) => Promise<FieldsSelection<PoolHourData, R>[]>})&({get: <R extends PoolHourDataRequest>(request: R, defaultValue?: FieldsSelection<PoolHourData, R>[]) => Promise<FieldsSelection<PoolHourData, R>[]>}),
    poolDayData: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null)}) => {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: FieldsSelection<PoolDayData, R>[]) => Promise<FieldsSelection<PoolDayData, R>[]>})&({get: <R extends PoolDayDataRequest>(request: R, defaultValue?: FieldsSelection<PoolDayData, R>[]) => Promise<FieldsSelection<PoolDayData, R>[]>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    collects: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null)}) => {get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Promise<FieldsSelection<Collect, R>[]>})&({get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Promise<FieldsSelection<Collect, R>[]>}),
    ticks: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null)}) => {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>[]) => Promise<FieldsSelection<Tick, R>[]>})&({get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>[]) => Promise<FieldsSelection<Tick, R>[]>})
}

export interface PoolObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    createdAtTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    createdAtBlockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    token0: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    token1: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    feeTier: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sqrtPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    feeGrowthGlobal0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    feeGrowthGlobal1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    token0Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    token1Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    tick: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    observationIndex: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    collectedFeesToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    collectedFeesToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    collectedFeesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedUSDUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    liquidityProviderCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    poolHourData: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null)}) => {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: FieldsSelection<PoolHourData, R>[]) => Observable<FieldsSelection<PoolHourData, R>[]>})&({get: <R extends PoolHourDataRequest>(request: R, defaultValue?: FieldsSelection<PoolHourData, R>[]) => Observable<FieldsSelection<PoolHourData, R>[]>}),
    poolDayData: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null)}) => {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: FieldsSelection<PoolDayData, R>[]) => Observable<FieldsSelection<PoolDayData, R>[]>})&({get: <R extends PoolDayDataRequest>(request: R, defaultValue?: FieldsSelection<PoolDayData, R>[]) => Observable<FieldsSelection<PoolDayData, R>[]>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    collects: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null)}) => {get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Observable<FieldsSelection<Collect, R>[]>})&({get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Observable<FieldsSelection<Collect, R>[]>}),
    ticks: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null)}) => {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>[]) => Observable<FieldsSelection<Tick, R>[]>})&({get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>[]) => Observable<FieldsSelection<Tick, R>[]>})
}

export interface PoolDayDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sqrtPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    token0Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    token1Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    tick: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    feeGrowthGlobal0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    feeGrowthGlobal1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tvlUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface PoolDayDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sqrtPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    token0Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    token1Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    tick: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    feeGrowthGlobal0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    feeGrowthGlobal1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tvlUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface PoolHourDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    periodStartUnix: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    sqrtPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    token0Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    token1Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    tick: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>}),
    feeGrowthGlobal0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    feeGrowthGlobal1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tvlUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface PoolHourDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    periodStartUnix: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    sqrtPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    token0Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    token1Price: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    tick: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>}),
    feeGrowthGlobal0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    feeGrowthGlobal1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tvlUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface PositionPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    staked: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    oldOwner: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    approved: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    incentiveId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>})
}

export interface PositionObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    staked: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    oldOwner: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    approved: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    incentiveId: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>})
}

export interface PositionSnapshotPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    position: (PositionPromiseChain & {get: <R extends PositionRequest>(request: R, defaultValue?: FieldsSelection<Position, R>) => Promise<FieldsSelection<Position, R>>}),
    blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    depositedToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    depositedToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    withdrawnToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    withdrawnToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    collectedFeesToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    collectedFeesToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    feeGrowthInside0LastX128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    feeGrowthInside1LastX128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface PositionSnapshotObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    position: (PositionObservableChain & {get: <R extends PositionRequest>(request: R, defaultValue?: FieldsSelection<Position, R>) => Observable<FieldsSelection<Position, R>>}),
    blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidity: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    depositedToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    depositedToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    withdrawnToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    withdrawnToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    collectedFeesToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    collectedFeesToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    feeGrowthInside0LastX128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    feeGrowthInside1LastX128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface QueryPromiseChain{
    incentive: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => IncentivePromiseChain & {get: <R extends IncentiveRequest>(request: R, defaultValue?: (FieldsSelection<Incentive, R> | undefined)) => Promise<(FieldsSelection<Incentive, R> | undefined)>}),
    incentives: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Incentive_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Incentive_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends IncentiveRequest>(request: R, defaultValue?: FieldsSelection<Incentive, R>[]) => Promise<FieldsSelection<Incentive, R>[]>}),
    position: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PositionPromiseChain & {get: <R extends PositionRequest>(request: R, defaultValue?: (FieldsSelection<Position, R> | undefined)) => Promise<(FieldsSelection<Position, R> | undefined)>}),
    positions: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Position_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Position_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PositionRequest>(request: R, defaultValue?: FieldsSelection<Position, R>[]) => Promise<FieldsSelection<Position, R>[]>}),
    factory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => FactoryPromiseChain & {get: <R extends FactoryRequest>(request: R, defaultValue?: (FieldsSelection<Factory, R> | undefined)) => Promise<(FieldsSelection<Factory, R> | undefined)>}),
    factories: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Factory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Factory_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends FactoryRequest>(request: R, defaultValue?: FieldsSelection<Factory, R>[]) => Promise<FieldsSelection<Factory, R>[]>}),
    bundle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => BundlePromiseChain & {get: <R extends BundleRequest>(request: R, defaultValue?: (FieldsSelection<Bundle, R> | undefined)) => Promise<(FieldsSelection<Bundle, R> | undefined)>}),
    bundles: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Promise<FieldsSelection<Bundle, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Promise<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>}),
    pool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: (FieldsSelection<Pool, R> | undefined)) => Promise<(FieldsSelection<Pool, R> | undefined)>}),
    pools: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>}),
    tick: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickPromiseChain & {get: <R extends TickRequest>(request: R, defaultValue?: (FieldsSelection<Tick, R> | undefined)) => Promise<(FieldsSelection<Tick, R> | undefined)>}),
    ticks: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>[]) => Promise<FieldsSelection<Tick, R>[]>}),
    positionSnapshot: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PositionSnapshotPromiseChain & {get: <R extends PositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<PositionSnapshot, R> | undefined)) => Promise<(FieldsSelection<PositionSnapshot, R> | undefined)>}),
    positionSnapshots: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PositionSnapshot_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<PositionSnapshot, R>[]) => Promise<FieldsSelection<PositionSnapshot, R>[]>}),
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Promise<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>}),
    mint: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => MintPromiseChain & {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)) => Promise<(FieldsSelection<Mint, R> | undefined)>}),
    mints: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>}),
    burn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => BurnPromiseChain & {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)) => Promise<(FieldsSelection<Burn, R> | undefined)>}),
    burns: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => SwapPromiseChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Promise<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    collect: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => CollectPromiseChain & {get: <R extends CollectRequest>(request: R, defaultValue?: (FieldsSelection<Collect, R> | undefined)) => Promise<(FieldsSelection<Collect, R> | undefined)>}),
    collects: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Promise<FieldsSelection<Collect, R>[]>}),
    flash: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => FlashPromiseChain & {get: <R extends FlashRequest>(request: R, defaultValue?: (FieldsSelection<Flash, R> | undefined)) => Promise<(FieldsSelection<Flash, R> | undefined)>}),
    flashes: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends FlashRequest>(request: R, defaultValue?: FieldsSelection<Flash, R>[]) => Promise<FieldsSelection<Flash, R>[]>}),
    uniswapDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => UniswapDayDataPromiseChain & {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: (FieldsSelection<UniswapDayData, R> | undefined)) => Promise<(FieldsSelection<UniswapDayData, R> | undefined)>}),
    uniswapDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Promise<FieldsSelection<UniswapDayData, R>[]>}),
    poolDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolDayDataPromiseChain & {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: (FieldsSelection<PoolDayData, R> | undefined)) => Promise<(FieldsSelection<PoolDayData, R> | undefined)>}),
    poolDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: FieldsSelection<PoolDayData, R>[]) => Promise<FieldsSelection<PoolDayData, R>[]>}),
    poolHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolHourDataPromiseChain & {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: (FieldsSelection<PoolHourData, R> | undefined)) => Promise<(FieldsSelection<PoolHourData, R> | undefined)>}),
    poolHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: FieldsSelection<PoolHourData, R>[]) => Promise<FieldsSelection<PoolHourData, R>[]>}),
    tickHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickHourDataPromiseChain & {get: <R extends TickHourDataRequest>(request: R, defaultValue?: (FieldsSelection<TickHourData, R> | undefined)) => Promise<(FieldsSelection<TickHourData, R> | undefined)>}),
    tickHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickHourDataRequest>(request: R, defaultValue?: FieldsSelection<TickHourData, R>[]) => Promise<FieldsSelection<TickHourData, R>[]>}),
    tickDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickDayDataPromiseChain & {get: <R extends TickDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TickDayData, R> | undefined)) => Promise<(FieldsSelection<TickDayData, R> | undefined)>}),
    tickDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickDayDataRequest>(request: R, defaultValue?: FieldsSelection<TickDayData, R>[]) => Promise<FieldsSelection<TickDayData, R>[]>}),
    tokenDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenDayDataPromiseChain & {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenDayData, R> | undefined)) => Promise<(FieldsSelection<TokenDayData, R> | undefined)>}),
    tokenDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Promise<FieldsSelection<TokenDayData, R>[]>}),
    tokenHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenHourDataPromiseChain & {get: <R extends TokenHourDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenHourData, R> | undefined)) => Promise<(FieldsSelection<TokenHourData, R> | undefined)>}),
    tokenHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenHourDataRequest>(request: R, defaultValue?: FieldsSelection<TokenHourData, R>[]) => Promise<FieldsSelection<TokenHourData, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface QueryObservableChain{
    incentive: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => IncentiveObservableChain & {get: <R extends IncentiveRequest>(request: R, defaultValue?: (FieldsSelection<Incentive, R> | undefined)) => Observable<(FieldsSelection<Incentive, R> | undefined)>}),
    incentives: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Incentive_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Incentive_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends IncentiveRequest>(request: R, defaultValue?: FieldsSelection<Incentive, R>[]) => Observable<FieldsSelection<Incentive, R>[]>}),
    position: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PositionObservableChain & {get: <R extends PositionRequest>(request: R, defaultValue?: (FieldsSelection<Position, R> | undefined)) => Observable<(FieldsSelection<Position, R> | undefined)>}),
    positions: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Position_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Position_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PositionRequest>(request: R, defaultValue?: FieldsSelection<Position, R>[]) => Observable<FieldsSelection<Position, R>[]>}),
    factory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => FactoryObservableChain & {get: <R extends FactoryRequest>(request: R, defaultValue?: (FieldsSelection<Factory, R> | undefined)) => Observable<(FieldsSelection<Factory, R> | undefined)>}),
    factories: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Factory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Factory_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends FactoryRequest>(request: R, defaultValue?: FieldsSelection<Factory, R>[]) => Observable<FieldsSelection<Factory, R>[]>}),
    bundle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => BundleObservableChain & {get: <R extends BundleRequest>(request: R, defaultValue?: (FieldsSelection<Bundle, R> | undefined)) => Observable<(FieldsSelection<Bundle, R> | undefined)>}),
    bundles: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Observable<FieldsSelection<Bundle, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Observable<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>}),
    pool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: (FieldsSelection<Pool, R> | undefined)) => Observable<(FieldsSelection<Pool, R> | undefined)>}),
    pools: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>}),
    tick: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickObservableChain & {get: <R extends TickRequest>(request: R, defaultValue?: (FieldsSelection<Tick, R> | undefined)) => Observable<(FieldsSelection<Tick, R> | undefined)>}),
    ticks: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>[]) => Observable<FieldsSelection<Tick, R>[]>}),
    positionSnapshot: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PositionSnapshotObservableChain & {get: <R extends PositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<PositionSnapshot, R> | undefined)) => Observable<(FieldsSelection<PositionSnapshot, R> | undefined)>}),
    positionSnapshots: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PositionSnapshot_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<PositionSnapshot, R>[]) => Observable<FieldsSelection<PositionSnapshot, R>[]>}),
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Observable<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>}),
    mint: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => MintObservableChain & {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)) => Observable<(FieldsSelection<Mint, R> | undefined)>}),
    mints: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>}),
    burn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => BurnObservableChain & {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)) => Observable<(FieldsSelection<Burn, R> | undefined)>}),
    burns: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => SwapObservableChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Observable<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    collect: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => CollectObservableChain & {get: <R extends CollectRequest>(request: R, defaultValue?: (FieldsSelection<Collect, R> | undefined)) => Observable<(FieldsSelection<Collect, R> | undefined)>}),
    collects: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Observable<FieldsSelection<Collect, R>[]>}),
    flash: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => FlashObservableChain & {get: <R extends FlashRequest>(request: R, defaultValue?: (FieldsSelection<Flash, R> | undefined)) => Observable<(FieldsSelection<Flash, R> | undefined)>}),
    flashes: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends FlashRequest>(request: R, defaultValue?: FieldsSelection<Flash, R>[]) => Observable<FieldsSelection<Flash, R>[]>}),
    uniswapDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => UniswapDayDataObservableChain & {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: (FieldsSelection<UniswapDayData, R> | undefined)) => Observable<(FieldsSelection<UniswapDayData, R> | undefined)>}),
    uniswapDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Observable<FieldsSelection<UniswapDayData, R>[]>}),
    poolDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolDayDataObservableChain & {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: (FieldsSelection<PoolDayData, R> | undefined)) => Observable<(FieldsSelection<PoolDayData, R> | undefined)>}),
    poolDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: FieldsSelection<PoolDayData, R>[]) => Observable<FieldsSelection<PoolDayData, R>[]>}),
    poolHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolHourDataObservableChain & {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: (FieldsSelection<PoolHourData, R> | undefined)) => Observable<(FieldsSelection<PoolHourData, R> | undefined)>}),
    poolHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: FieldsSelection<PoolHourData, R>[]) => Observable<FieldsSelection<PoolHourData, R>[]>}),
    tickHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickHourDataObservableChain & {get: <R extends TickHourDataRequest>(request: R, defaultValue?: (FieldsSelection<TickHourData, R> | undefined)) => Observable<(FieldsSelection<TickHourData, R> | undefined)>}),
    tickHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickHourDataRequest>(request: R, defaultValue?: FieldsSelection<TickHourData, R>[]) => Observable<FieldsSelection<TickHourData, R>[]>}),
    tickDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickDayDataObservableChain & {get: <R extends TickDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TickDayData, R> | undefined)) => Observable<(FieldsSelection<TickDayData, R> | undefined)>}),
    tickDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickDayDataRequest>(request: R, defaultValue?: FieldsSelection<TickDayData, R>[]) => Observable<FieldsSelection<TickDayData, R>[]>}),
    tokenDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenDayDataObservableChain & {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenDayData, R> | undefined)) => Observable<(FieldsSelection<TokenDayData, R> | undefined)>}),
    tokenDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Observable<FieldsSelection<TokenDayData, R>[]>}),
    tokenHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenHourDataObservableChain & {get: <R extends TokenHourDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenHourData, R> | undefined)) => Observable<(FieldsSelection<TokenHourData, R> | undefined)>}),
    tokenHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenHourDataRequest>(request: R, defaultValue?: FieldsSelection<TokenHourData, R>[]) => Observable<FieldsSelection<TokenHourData, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionPromiseChain{
    incentive: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => IncentivePromiseChain & {get: <R extends IncentiveRequest>(request: R, defaultValue?: (FieldsSelection<Incentive, R> | undefined)) => Promise<(FieldsSelection<Incentive, R> | undefined)>}),
    incentives: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Incentive_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Incentive_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends IncentiveRequest>(request: R, defaultValue?: FieldsSelection<Incentive, R>[]) => Promise<FieldsSelection<Incentive, R>[]>}),
    position: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PositionPromiseChain & {get: <R extends PositionRequest>(request: R, defaultValue?: (FieldsSelection<Position, R> | undefined)) => Promise<(FieldsSelection<Position, R> | undefined)>}),
    positions: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Position_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Position_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PositionRequest>(request: R, defaultValue?: FieldsSelection<Position, R>[]) => Promise<FieldsSelection<Position, R>[]>}),
    factory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => FactoryPromiseChain & {get: <R extends FactoryRequest>(request: R, defaultValue?: (FieldsSelection<Factory, R> | undefined)) => Promise<(FieldsSelection<Factory, R> | undefined)>}),
    factories: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Factory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Factory_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends FactoryRequest>(request: R, defaultValue?: FieldsSelection<Factory, R>[]) => Promise<FieldsSelection<Factory, R>[]>}),
    bundle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => BundlePromiseChain & {get: <R extends BundleRequest>(request: R, defaultValue?: (FieldsSelection<Bundle, R> | undefined)) => Promise<(FieldsSelection<Bundle, R> | undefined)>}),
    bundles: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Promise<FieldsSelection<Bundle, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Promise<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Promise<FieldsSelection<Token, R>[]>}),
    pool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: (FieldsSelection<Pool, R> | undefined)) => Promise<(FieldsSelection<Pool, R> | undefined)>}),
    pools: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>}),
    tick: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickPromiseChain & {get: <R extends TickRequest>(request: R, defaultValue?: (FieldsSelection<Tick, R> | undefined)) => Promise<(FieldsSelection<Tick, R> | undefined)>}),
    ticks: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>[]) => Promise<FieldsSelection<Tick, R>[]>}),
    positionSnapshot: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PositionSnapshotPromiseChain & {get: <R extends PositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<PositionSnapshot, R> | undefined)) => Promise<(FieldsSelection<PositionSnapshot, R> | undefined)>}),
    positionSnapshots: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PositionSnapshot_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<PositionSnapshot, R>[]) => Promise<FieldsSelection<PositionSnapshot, R>[]>}),
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Promise<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Promise<FieldsSelection<Transaction, R>[]>}),
    mint: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => MintPromiseChain & {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)) => Promise<(FieldsSelection<Mint, R> | undefined)>}),
    mints: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>}),
    burn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => BurnPromiseChain & {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)) => Promise<(FieldsSelection<Burn, R> | undefined)>}),
    burns: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => SwapPromiseChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Promise<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    collect: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => CollectPromiseChain & {get: <R extends CollectRequest>(request: R, defaultValue?: (FieldsSelection<Collect, R> | undefined)) => Promise<(FieldsSelection<Collect, R> | undefined)>}),
    collects: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Promise<FieldsSelection<Collect, R>[]>}),
    flash: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => FlashPromiseChain & {get: <R extends FlashRequest>(request: R, defaultValue?: (FieldsSelection<Flash, R> | undefined)) => Promise<(FieldsSelection<Flash, R> | undefined)>}),
    flashes: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends FlashRequest>(request: R, defaultValue?: FieldsSelection<Flash, R>[]) => Promise<FieldsSelection<Flash, R>[]>}),
    uniswapDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => UniswapDayDataPromiseChain & {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: (FieldsSelection<UniswapDayData, R> | undefined)) => Promise<(FieldsSelection<UniswapDayData, R> | undefined)>}),
    uniswapDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Promise<FieldsSelection<UniswapDayData, R>[]>}),
    poolDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolDayDataPromiseChain & {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: (FieldsSelection<PoolDayData, R> | undefined)) => Promise<(FieldsSelection<PoolDayData, R> | undefined)>}),
    poolDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: FieldsSelection<PoolDayData, R>[]) => Promise<FieldsSelection<PoolDayData, R>[]>}),
    poolHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolHourDataPromiseChain & {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: (FieldsSelection<PoolHourData, R> | undefined)) => Promise<(FieldsSelection<PoolHourData, R> | undefined)>}),
    poolHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: FieldsSelection<PoolHourData, R>[]) => Promise<FieldsSelection<PoolHourData, R>[]>}),
    tickHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickHourDataPromiseChain & {get: <R extends TickHourDataRequest>(request: R, defaultValue?: (FieldsSelection<TickHourData, R> | undefined)) => Promise<(FieldsSelection<TickHourData, R> | undefined)>}),
    tickHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickHourDataRequest>(request: R, defaultValue?: FieldsSelection<TickHourData, R>[]) => Promise<FieldsSelection<TickHourData, R>[]>}),
    tickDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickDayDataPromiseChain & {get: <R extends TickDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TickDayData, R> | undefined)) => Promise<(FieldsSelection<TickDayData, R> | undefined)>}),
    tickDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickDayDataRequest>(request: R, defaultValue?: FieldsSelection<TickDayData, R>[]) => Promise<FieldsSelection<TickDayData, R>[]>}),
    tokenDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenDayDataPromiseChain & {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenDayData, R> | undefined)) => Promise<(FieldsSelection<TokenDayData, R> | undefined)>}),
    tokenDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Promise<FieldsSelection<TokenDayData, R>[]>}),
    tokenHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenHourDataPromiseChain & {get: <R extends TokenHourDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenHourData, R> | undefined)) => Promise<(FieldsSelection<TokenHourData, R> | undefined)>}),
    tokenHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenHourDataRequest>(request: R, defaultValue?: FieldsSelection<TokenHourData, R>[]) => Promise<FieldsSelection<TokenHourData, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_PromiseChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Promise<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    incentive: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => IncentiveObservableChain & {get: <R extends IncentiveRequest>(request: R, defaultValue?: (FieldsSelection<Incentive, R> | undefined)) => Observable<(FieldsSelection<Incentive, R> | undefined)>}),
    incentives: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Incentive_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Incentive_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends IncentiveRequest>(request: R, defaultValue?: FieldsSelection<Incentive, R>[]) => Observable<FieldsSelection<Incentive, R>[]>}),
    position: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PositionObservableChain & {get: <R extends PositionRequest>(request: R, defaultValue?: (FieldsSelection<Position, R> | undefined)) => Observable<(FieldsSelection<Position, R> | undefined)>}),
    positions: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Position_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Position_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PositionRequest>(request: R, defaultValue?: FieldsSelection<Position, R>[]) => Observable<FieldsSelection<Position, R>[]>}),
    factory: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => FactoryObservableChain & {get: <R extends FactoryRequest>(request: R, defaultValue?: (FieldsSelection<Factory, R> | undefined)) => Observable<(FieldsSelection<Factory, R> | undefined)>}),
    factories: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Factory_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Factory_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends FactoryRequest>(request: R, defaultValue?: FieldsSelection<Factory, R>[]) => Observable<FieldsSelection<Factory, R>[]>}),
    bundle: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => BundleObservableChain & {get: <R extends BundleRequest>(request: R, defaultValue?: (FieldsSelection<Bundle, R> | undefined)) => Observable<(FieldsSelection<Bundle, R> | undefined)>}),
    bundles: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Bundle_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Bundle_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends BundleRequest>(request: R, defaultValue?: FieldsSelection<Bundle, R>[]) => Observable<FieldsSelection<Bundle, R>[]>}),
    token: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Observable<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Token_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Token_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>[]) => Observable<FieldsSelection<Token, R>[]>}),
    pool: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: (FieldsSelection<Pool, R> | undefined)) => Observable<(FieldsSelection<Pool, R> | undefined)>}),
    pools: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>}),
    tick: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickObservableChain & {get: <R extends TickRequest>(request: R, defaultValue?: (FieldsSelection<Tick, R> | undefined)) => Observable<(FieldsSelection<Tick, R> | undefined)>}),
    ticks: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Tick_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Tick_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>[]) => Observable<FieldsSelection<Tick, R>[]>}),
    positionSnapshot: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PositionSnapshotObservableChain & {get: <R extends PositionSnapshotRequest>(request: R, defaultValue?: (FieldsSelection<PositionSnapshot, R> | undefined)) => Observable<(FieldsSelection<PositionSnapshot, R> | undefined)>}),
    positionSnapshots: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PositionSnapshot_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PositionSnapshot_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PositionSnapshotRequest>(request: R, defaultValue?: FieldsSelection<PositionSnapshot, R>[]) => Observable<FieldsSelection<PositionSnapshot, R>[]>}),
    transaction: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: (FieldsSelection<Transaction, R> | undefined)) => Observable<(FieldsSelection<Transaction, R> | undefined)>}),
    transactions: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Transaction_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Transaction_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>[]) => Observable<FieldsSelection<Transaction, R>[]>}),
    mint: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => MintObservableChain & {get: <R extends MintRequest>(request: R, defaultValue?: (FieldsSelection<Mint, R> | undefined)) => Observable<(FieldsSelection<Mint, R> | undefined)>}),
    mints: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>}),
    burn: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => BurnObservableChain & {get: <R extends BurnRequest>(request: R, defaultValue?: (FieldsSelection<Burn, R> | undefined)) => Observable<(FieldsSelection<Burn, R> | undefined)>}),
    burns: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>}),
    swap: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => SwapObservableChain & {get: <R extends SwapRequest>(request: R, defaultValue?: (FieldsSelection<Swap, R> | undefined)) => Observable<(FieldsSelection<Swap, R> | undefined)>}),
    swaps: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    collect: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => CollectObservableChain & {get: <R extends CollectRequest>(request: R, defaultValue?: (FieldsSelection<Collect, R> | undefined)) => Observable<(FieldsSelection<Collect, R> | undefined)>}),
    collects: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Observable<FieldsSelection<Collect, R>[]>}),
    flash: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => FlashObservableChain & {get: <R extends FlashRequest>(request: R, defaultValue?: (FieldsSelection<Flash, R> | undefined)) => Observable<(FieldsSelection<Flash, R> | undefined)>}),
    flashes: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends FlashRequest>(request: R, defaultValue?: FieldsSelection<Flash, R>[]) => Observable<FieldsSelection<Flash, R>[]>}),
    uniswapDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => UniswapDayDataObservableChain & {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: (FieldsSelection<UniswapDayData, R> | undefined)) => Observable<(FieldsSelection<UniswapDayData, R> | undefined)>}),
    uniswapDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (UniswapDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (UniswapDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends UniswapDayDataRequest>(request: R, defaultValue?: FieldsSelection<UniswapDayData, R>[]) => Observable<FieldsSelection<UniswapDayData, R>[]>}),
    poolDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolDayDataObservableChain & {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: (FieldsSelection<PoolDayData, R> | undefined)) => Observable<(FieldsSelection<PoolDayData, R> | undefined)>}),
    poolDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolDayDataRequest>(request: R, defaultValue?: FieldsSelection<PoolDayData, R>[]) => Observable<FieldsSelection<PoolDayData, R>[]>}),
    poolHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => PoolHourDataObservableChain & {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: (FieldsSelection<PoolHourData, R> | undefined)) => Observable<(FieldsSelection<PoolHourData, R> | undefined)>}),
    poolHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (PoolHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (PoolHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends PoolHourDataRequest>(request: R, defaultValue?: FieldsSelection<PoolHourData, R>[]) => Observable<FieldsSelection<PoolHourData, R>[]>}),
    tickHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickHourDataObservableChain & {get: <R extends TickHourDataRequest>(request: R, defaultValue?: (FieldsSelection<TickHourData, R> | undefined)) => Observable<(FieldsSelection<TickHourData, R> | undefined)>}),
    tickHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickHourDataRequest>(request: R, defaultValue?: FieldsSelection<TickHourData, R>[]) => Observable<FieldsSelection<TickHourData, R>[]>}),
    tickDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TickDayDataObservableChain & {get: <R extends TickDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TickDayData, R> | undefined)) => Observable<(FieldsSelection<TickDayData, R> | undefined)>}),
    tickDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TickDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TickDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TickDayDataRequest>(request: R, defaultValue?: FieldsSelection<TickDayData, R>[]) => Observable<FieldsSelection<TickDayData, R>[]>}),
    tokenDayData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenDayDataObservableChain & {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenDayData, R> | undefined)) => Observable<(FieldsSelection<TokenDayData, R> | undefined)>}),
    tokenDayDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Observable<FieldsSelection<TokenDayData, R>[]>}),
    tokenHourData: ((args: {id: Scalars['ID'],
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => TokenHourDataObservableChain & {get: <R extends TokenHourDataRequest>(request: R, defaultValue?: (FieldsSelection<TokenHourData, R> | undefined)) => Observable<(FieldsSelection<TokenHourData, R> | undefined)>}),
    tokenHourDatas: ((args: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenHourData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenHourData_filter | null),
/** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted. */
block?: (Block_height | null),
/** Set to `allow` to receive data even if the subgraph has skipped over errors while syncing. */
subgraphError: _SubgraphErrorPolicy_}) => {get: <R extends TokenHourDataRequest>(request: R, defaultValue?: FieldsSelection<TokenHourData, R>[]) => Observable<FieldsSelection<TokenHourData, R>[]>}),
    
/** Access to subgraph metadata */
_meta: ((args?: {block?: (Block_height | null)}) => _Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})&(_Meta_ObservableChain & {get: <R extends _Meta_Request>(request: R, defaultValue?: (FieldsSelection<_Meta_, R> | undefined)) => Observable<(FieldsSelection<_Meta_, R> | undefined)>})
}

export interface SwapPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    transaction: (TransactionPromiseChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Promise<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    token0: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    token1: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    sender: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    recipient: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    origin: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Promise<Scalars['Bytes']>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    sqrtPriceX96: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tick: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Promise<(Scalars['BigInt'] | undefined)>})
}

export interface SwapObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    transaction: (TransactionObservableChain & {get: <R extends TransactionRequest>(request: R, defaultValue?: FieldsSelection<Transaction, R>) => Observable<FieldsSelection<Transaction, R>>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    token0: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    token1: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    sender: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    recipient: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    origin: ({get: (request?: boolean|number, defaultValue?: Scalars['Bytes']) => Observable<Scalars['Bytes']>}),
    amount0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amount1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    amountUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    sqrtPriceX96: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tick: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    logIndex: ({get: (request?: boolean|number, defaultValue?: (Scalars['BigInt'] | undefined)) => Observable<(Scalars['BigInt'] | undefined)>})
}

export interface TickPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    poolAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    tickIdx: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    liquidityGross: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityNet: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    price0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    price1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    collectedFeesToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    collectedFeesToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    collectedFeesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    createdAtTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    createdAtBlockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityProviderCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    feeGrowthOutside0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    feeGrowthOutside1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface TickObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    poolAddress: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    tickIdx: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    liquidityGross: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityNet: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    price0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    price1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    collectedFeesToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    collectedFeesToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    collectedFeesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    createdAtTimestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    createdAtBlockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityProviderCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    feeGrowthOutside0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    feeGrowthOutside1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface TickDayDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    tick: (TickPromiseChain & {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>) => Promise<FieldsSelection<Tick, R>>}),
    liquidityGross: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityNet: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feeGrowthOutside0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    feeGrowthOutside1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>})
}

export interface TickDayDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    tick: (TickObservableChain & {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>) => Observable<FieldsSelection<Tick, R>>}),
    liquidityGross: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityNet: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feeGrowthOutside0X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    feeGrowthOutside1X128: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>})
}

export interface TickHourDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    periodStartUnix: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    pool: (PoolPromiseChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Promise<FieldsSelection<Pool, R>>}),
    tick: (TickPromiseChain & {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>) => Promise<FieldsSelection<Tick, R>>}),
    liquidityGross: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    liquidityNet: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface TickHourDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    periodStartUnix: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    pool: (PoolObservableChain & {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>) => Observable<FieldsSelection<Pool, R>>}),
    tick: (TickObservableChain & {get: <R extends TickRequest>(request: R, defaultValue?: FieldsSelection<Tick, R>) => Observable<FieldsSelection<Tick, R>>}),
    liquidityGross: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    liquidityNet: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    volumeToken0: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeToken1: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface TokenPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    volume: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    poolCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedUSDUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    derivedETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    whitelistPools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null)}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>})&({get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Promise<FieldsSelection<Pool, R>[]>}),
    tokenDayData: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null)}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Promise<FieldsSelection<TokenDayData, R>[]>})&({get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Promise<FieldsSelection<TokenDayData, R>[]>})
}

export interface TokenObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    decimals: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    volume: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    poolCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedUSDUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    derivedETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    whitelistPools: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Pool_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Pool_filter | null)}) => {get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>})&({get: <R extends PoolRequest>(request: R, defaultValue?: FieldsSelection<Pool, R>[]) => Observable<FieldsSelection<Pool, R>[]>}),
    tokenDayData: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (TokenDayData_orderBy | null),orderDirection?: (OrderDirection | null),where?: (TokenDayData_filter | null)}) => {get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Observable<FieldsSelection<TokenDayData, R>[]>})&({get: <R extends TokenDayDataRequest>(request: R, defaultValue?: FieldsSelection<TokenDayData, R>[]) => Observable<FieldsSelection<TokenDayData, R>[]>})
}

export interface TokenDayDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    token: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    volume: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    priceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface TokenDayDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    token: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    volume: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    priceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface TokenHourDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    periodStartUnix: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    token: (TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Promise<FieldsSelection<Token, R>>}),
    volume: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    priceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface TokenHourDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    periodStartUnix: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    token: (TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: FieldsSelection<Token, R>) => Observable<FieldsSelection<Token, R>>}),
    volume: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    untrackedVolumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLocked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    totalValueLockedUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    priceUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    open: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    high: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    low: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    close: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface TransactionPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    gasUsed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    gasPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Promise<FieldsSelection<Mint, R>[]>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Promise<FieldsSelection<Burn, R>[]>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Promise<FieldsSelection<Swap, R>[]>}),
    flashed: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null)}) => {get: <R extends FlashRequest>(request: R, defaultValue?: FieldsSelection<Flash, R>[]) => Promise<FieldsSelection<Flash, R>[]>})&({get: <R extends FlashRequest>(request: R, defaultValue?: FieldsSelection<Flash, R>[]) => Promise<FieldsSelection<Flash, R>[]>}),
    collects: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null)}) => {get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Promise<FieldsSelection<Collect, R>[]>})&({get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Promise<FieldsSelection<Collect, R>[]>})
}

export interface TransactionObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    blockNumber: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    gasUsed: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    gasPrice: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    mints: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Mint_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Mint_filter | null)}) => {get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>})&({get: <R extends MintRequest>(request: R, defaultValue?: FieldsSelection<Mint, R>[]) => Observable<FieldsSelection<Mint, R>[]>}),
    burns: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Burn_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Burn_filter | null)}) => {get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>})&({get: <R extends BurnRequest>(request: R, defaultValue?: FieldsSelection<Burn, R>[]) => Observable<FieldsSelection<Burn, R>[]>}),
    swaps: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Swap_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Swap_filter | null)}) => {get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>})&({get: <R extends SwapRequest>(request: R, defaultValue?: FieldsSelection<Swap, R>[]) => Observable<FieldsSelection<Swap, R>[]>}),
    flashed: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Flash_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Flash_filter | null)}) => {get: <R extends FlashRequest>(request: R, defaultValue?: FieldsSelection<Flash, R>[]) => Observable<FieldsSelection<Flash, R>[]>})&({get: <R extends FlashRequest>(request: R, defaultValue?: FieldsSelection<Flash, R>[]) => Observable<FieldsSelection<Flash, R>[]>}),
    collects: ((args?: {skip?: (Scalars['Int'] | null),first?: (Scalars['Int'] | null),orderBy?: (Collect_orderBy | null),orderDirection?: (OrderDirection | null),where?: (Collect_filter | null)}) => {get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Observable<FieldsSelection<Collect, R>[]>})&({get: <R extends CollectRequest>(request: R, defaultValue?: FieldsSelection<Collect, R>[]) => Observable<FieldsSelection<Collect, R>[]>})
}

export interface UniswapDayDataPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    volumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    volumeUSDUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Promise<Scalars['BigInt']>}),
    tvlUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Promise<Scalars['BigDecimal']>})
}

export interface UniswapDayDataObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    volumeETH: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    volumeUSDUntracked: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    feesUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>}),
    txCount: ({get: (request?: boolean|number, defaultValue?: Scalars['BigInt']) => Observable<Scalars['BigInt']>}),
    tvlUSD: ({get: (request?: boolean|number, defaultValue?: Scalars['BigDecimal']) => Observable<Scalars['BigDecimal']>})
}

export interface _Block_PromiseChain{
    
/** The hash of the block */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Promise<(Scalars['Bytes'] | undefined)>}),
    
/** The block number */
number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** Integer representation of the timestamp stored in blocks for the chain */
timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}

export interface _Block_ObservableChain{
    
/** The hash of the block */
hash: ({get: (request?: boolean|number, defaultValue?: (Scalars['Bytes'] | undefined)) => Observable<(Scalars['Bytes'] | undefined)>}),
    
/** The block number */
number: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** Integer representation of the timestamp stored in blocks for the chain */
timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** The type for the top-level _meta field */
export interface _Meta_PromiseChain{
    
/**
 * Information about a specific subgraph block. The hash of the block
 * will be null if the _meta field has a block constraint that asks for
 * a block number. It will be filled if the _meta field has no block constraint
 * and therefore asks for the latest  block
 * 
 */
block: (_Block_PromiseChain & {get: <R extends _Block_Request>(request: R, defaultValue?: FieldsSelection<_Block_, R>) => Promise<FieldsSelection<_Block_, R>>}),
    
/** The deployment ID */
deployment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** If `true`, the subgraph encountered indexing errors at some past block */
hasIndexingErrors: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}


/** The type for the top-level _meta field */
export interface _Meta_ObservableChain{
    
/**
 * Information about a specific subgraph block. The hash of the block
 * will be null if the _meta field has a block constraint that asks for
 * a block number. It will be filled if the _meta field has no block constraint
 * and therefore asks for the latest  block
 * 
 */
block: (_Block_ObservableChain & {get: <R extends _Block_Request>(request: R, defaultValue?: FieldsSelection<_Block_, R>) => Observable<FieldsSelection<_Block_, R>>}),
    
/** The deployment ID */
deployment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** If `true`, the subgraph encountered indexing errors at some past block */
hasIndexingErrors: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}