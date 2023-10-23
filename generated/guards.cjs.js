
var Bundle_possibleTypes = ['Bundle']
module.exports.isBundle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBundle"')
  return Bundle_possibleTypes.includes(obj.__typename)
}



var Burn_possibleTypes = ['Burn']
module.exports.isBurn = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBurn"')
  return Burn_possibleTypes.includes(obj.__typename)
}



var Collect_possibleTypes = ['Collect']
module.exports.isCollect = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCollect"')
  return Collect_possibleTypes.includes(obj.__typename)
}



var Factory_possibleTypes = ['Factory']
module.exports.isFactory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFactory"')
  return Factory_possibleTypes.includes(obj.__typename)
}



var Flash_possibleTypes = ['Flash']
module.exports.isFlash = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFlash"')
  return Flash_possibleTypes.includes(obj.__typename)
}



var Incentive_possibleTypes = ['Incentive']
module.exports.isIncentive = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIncentive"')
  return Incentive_possibleTypes.includes(obj.__typename)
}



var Mint_possibleTypes = ['Mint']
module.exports.isMint = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMint"')
  return Mint_possibleTypes.includes(obj.__typename)
}



var Pool_possibleTypes = ['Pool']
module.exports.isPool = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPool"')
  return Pool_possibleTypes.includes(obj.__typename)
}



var PoolDayData_possibleTypes = ['PoolDayData']
module.exports.isPoolDayData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPoolDayData"')
  return PoolDayData_possibleTypes.includes(obj.__typename)
}



var PoolHourData_possibleTypes = ['PoolHourData']
module.exports.isPoolHourData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPoolHourData"')
  return PoolHourData_possibleTypes.includes(obj.__typename)
}



var Position_possibleTypes = ['Position']
module.exports.isPosition = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPosition"')
  return Position_possibleTypes.includes(obj.__typename)
}



var PositionSnapshot_possibleTypes = ['PositionSnapshot']
module.exports.isPositionSnapshot = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPositionSnapshot"')
  return PositionSnapshot_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Subscription_possibleTypes = ['Subscription']
module.exports.isSubscription = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



var Swap_possibleTypes = ['Swap']
module.exports.isSwap = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}



var Tick_possibleTypes = ['Tick']
module.exports.isTick = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTick"')
  return Tick_possibleTypes.includes(obj.__typename)
}



var TickDayData_possibleTypes = ['TickDayData']
module.exports.isTickDayData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTickDayData"')
  return TickDayData_possibleTypes.includes(obj.__typename)
}



var TickHourData_possibleTypes = ['TickHourData']
module.exports.isTickHourData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTickHourData"')
  return TickHourData_possibleTypes.includes(obj.__typename)
}



var Token_possibleTypes = ['Token']
module.exports.isToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



var TokenDayData_possibleTypes = ['TokenDayData']
module.exports.isTokenDayData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTokenDayData"')
  return TokenDayData_possibleTypes.includes(obj.__typename)
}



var TokenHourData_possibleTypes = ['TokenHourData']
module.exports.isTokenHourData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTokenHourData"')
  return TokenHourData_possibleTypes.includes(obj.__typename)
}



var Transaction_possibleTypes = ['Transaction']
module.exports.isTransaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransaction"')
  return Transaction_possibleTypes.includes(obj.__typename)
}



var UniswapDayData_possibleTypes = ['UniswapDayData']
module.exports.isUniswapDayData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUniswapDayData"')
  return UniswapDayData_possibleTypes.includes(obj.__typename)
}



var _Block__possibleTypes = ['_Block_']
module.exports.is_Block_ = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "is_Block_"')
  return _Block__possibleTypes.includes(obj.__typename)
}



var _Meta__possibleTypes = ['_Meta_']
module.exports.is_Meta_ = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "is_Meta_"')
  return _Meta__possibleTypes.includes(obj.__typename)
}
