export enum AccountType {
    MAIN = 'main',
    TRADE = 'trade',
    MARGIN = 'margin',
    TRADE_HF = 'trade_hf',
}

export enum Side {
    SELL = 'sell',
    BUY = 'buy',
}

export enum TradeType {
    TRADE = 'TRADE',
    MARGIN_TRADE = 'MARGIN_TRADE'
}

export enum OrderStatus {
    ACTIVE = 'active',
    DONE = 'done'
}

export enum OrderType {
    LIMIT = 'limit', 
    MARKET = 'market',
    LIMIT_STOP =  'limit_stop',
    MARKET_STOP = 'market_stop'
}

export enum OperationType {
    DEAL = 'DEAL',
    CANCEL = 'CANCEL'
}

export enum TimeInForce {
    GTC = 'GTC',
    GTT = 'GTT',
    IOC = 'IOC',
    FOK = 'FOK'
}