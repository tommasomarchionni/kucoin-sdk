import * as RestMarketTypes from './modules/restful/market/types';
import * as RestTradeTypes from './modules/restful/trade/types';
import * as RestWalletTypes from './modules/restful/wallet/types';

import { AccountType, OperationType, OrderStatus, OrderType, Side, TimeInForce, TradeType } from './modules/enum';
import { Spot } from './spot';
import { DataArrayResponse, DataResponse, PaginatedData, SpotOptions } from './setters/types';
import { LogFn, LoggerInterface } from './setters/mixinBase';

export {
    AccountType,
    DataArrayResponse,
    DataResponse,
    PaginatedData,
    LogFn,
    LoggerInterface,
    OperationType,
    OrderStatus,
    OrderType,
    RestMarketTypes,
    RestTradeTypes,
    RestWalletTypes,
    Side,
    Spot,
    SpotOptions,
    TimeInForce,
    TradeType
};