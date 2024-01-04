import { DataResponse, OperationType, OrderType, RestTradeTypes, Side, TimeInForce, TradeType } from '../../../../src/index';

export const mockResponse: DataResponse<RestTradeTypes.OrderDetails> = {
    code: '200000',
    data: 
    {
        id: '5f3113a1c9b6d539dc614dc6',
        symbol: 'KCS-BTC',
        opType: OperationType.DEAL,
        type: OrderType.LIMIT,
        side: Side.BUY,
        price: '0.00001',
        size: '1',
        funds: '0',
        dealFunds: '0',
        dealSize: '0',
        fee: '0',
        feeCurrency: 'BTC',
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
        channel: 'API',
        clientOid: '6d539dc614db312',
        remark: '',
        tags: '',
        isActive: true,
        cancelExist: false,
        createdAt: 1597051810000,
        tradeType: TradeType.TRADE
    }
};