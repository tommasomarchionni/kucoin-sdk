import {
    OperationType,
    OrderStatus,
    OrderType,
    Side, TimeInForce, TradeType,
} from '../../enum';

export interface PlaceOrderOptions {
    /**
     * clientOid, the unique identifier created by the client, use of UUID, with a maximum length of 128 bits.
     */
    clientOid?: string;

    /**
     * buy or sell
     */
    side: Side;

    /**
     * symbol, e.g. ETH-BTC
     */
    symbol: string;

    /**
     * limit or market (default is limit)
     */
    type?: string;

    /**
     * remark for the order, length cannot exceed 100 utf8 characters
     */
    remark?: string;

    /**
     * self trade prevention, CN, CO, CB or DC {@link https://www.kucoin.com/docs/beginners/matching-engine/self-trade-prevention/introduction}
     */
    stp?: string;

    /**
     * The type of trading : TRADE（Spot Trade）, MARGIN_TRADE (Margin Trade). Default is TRADE. 
     * Note: To improve the system performance and to accelerate order placing and processing, KuCoin has added a new interface for order placing of margin. 
     * For traders still using the current interface, please move to the new one as soon as possible. 
     * The current one will no longer accept margin orders by May 1st, 2021 (UTC). At the time, KuCoin will notify users via the announcement, please pay attention to it.
     */
    tradeType?: string;

    price?: string;
    size?: string;

    timeInForce?: string;
    cancelAfter?: number;
    postOnly?: boolean;
    hidden?: boolean;
    iceberg?: boolean;
    visibleSize?: string;
    funds?: string;
}

export interface PlaceOrderResponse {
    
    /**
     * An order Id is returned once an order is successfully placed.
     */
    orderId: string;
}

export interface OrderDetails {
    /**
     * Order ID, the ID of an order
     */
    orderId: string;

    /**
     * symbol
     */
    symbol: string;

    /**
     * operation type,deal is pending order,cancel is cancel order
     */
    opType: OperationType;

    /**
     * order type,e.g. limit,market,stop_limit.
     */
    type: OrderType;

    /**
     * transaction direction,include buy and sell
     */
    side: Side;

    /**
     * order price
     */
    price: string;

    /**
     * order quantity
     */
    size: string;

    /**
     * order funds
     */
    funds: string;

    /**
     * deal funds
     */
    dealFunds: string;
    
    /**
     * deal quantity
     */
    dealSize: string;

    /**
     * fee
     */
    fee: string;

    /**
     * charge fee currency
     */
    feeCurrency: string;

    /**
     * self trade prevention,include CN,CO,DC,CB
     */
    stp: string;
    
    /**
     * stop type, include entry and loss
     */
    stop: string;

    /**
     * stop order is triggered
     */
    stopTriggered: boolean;
    
    /**
     * stop price
     */
    stopPrice: string; 

    /**
     * time InForce,include GTC,GTT,IOC,FOK
     */
    timeInForce: TimeInForce;

    /**
     * postOnly
     */
    postOnly: boolean;

    /**
     * hidden order
     */
    hidden: boolean

    /**
     * iceberg order
     */
    iceberg: boolean;

    /**
     * display quantity for iceberg order
     */
    visibleSize: string;

    /**
     * cancel orders time，requires timeInForce to be GTT
     */
    cancelAfter: number;

    /**
     * order source, e.g. API
     */
    channel: string;
    
    /**
     * user-entered order unique mark
     */
    clientOid: string;

    /**
     * remark
     */
    remark?: string;
    
    /**
     * tag order source
     */
    tags?: string;

    /**
     * order status, true and false. If true, the order is active, if false, the order is fillled or cancelled
     */
    isActive: boolean;
    
    /**
     * order cancellation transaction record
     */
    cancelExist: boolean;

    /**
     * create time e.g. 1704323692451
     */
    createdAt: number;

    /**
     * The type of trading : TRADE（Spot Trading）, MARGIN_TRADE (Margin Trading).
     */
    tradeType: TradeType;	
}

export interface GetOrderListOptions {
    
    /**
     * active or done(done as default), Only list orders with a specific status .
     */
    status?: OrderStatus;

    /**
     * Only list orders for a specific symbol
     */
    symbol?: string;
    
    /**
     * buy or sell
     */
    side?: Side;

    /**
     * limit, market, limit_stop or market_stop
     */
    type?: OrderType;

    /**
     * The type of trading:TRADE-Spot Trading(TRADE as default), MARGIN_TRADE-Cross Margin Trading, MARGIN_ISOLATED_TRADE-Isolated Margin Trading.
     */
    tradeType?: string;
    
    /**
     * Start time (milisecond)
     */
    startAt?: number;

    /**
     * End time (milisecond)
     */
    endAt?: number;
}