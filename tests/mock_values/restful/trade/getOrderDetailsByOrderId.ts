import { DataResponse, OperationType, OrderType, RestTradeTypes, Side, TimeInForce, TradeType } from '../../../../src/index';

export const mockResponse: DataResponse<RestTradeTypes.OrderDetails> = {
    code: '200000',
    data: 
    {
        id: '5c35c02703aa673ceec2a168',
        symbol: 'BTC-USDT',
        opType: OperationType.DEAL,
        type: OrderType.LIMIT,
        side: Side.BUY,
        price: '10',
        size: '2',
        funds: '0',
        dealFunds: '0.166',
        dealSize: '2',
        fee: '0',
        feeCurrency: 'USDT',
        stp: '',
        stop: '',
        stopTriggered: false,
        stopPrice: '0',
        timeInForce: TimeInForce.GTC,
        postOnly: false,
        hidden: false,
        iceberg: false,
        visibleSize: '0',
        cancelAfter: 0,
        channel: 'IOS',
        clientOid: '',
        remark: '',
        tags: '',
        isActive: false,
        cancelExist: false,
        createdAt: 1547026471000,
        tradeType: TradeType.TRADE
    }
};