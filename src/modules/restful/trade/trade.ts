import { Constructor, DataResponse, PaginatedData } from '../../../setters/types';
import { genClientOid, validateRequiredParameters } from '../../../helpers/utils';
import {
    PlaceOrderOptions,
    PlaceOrderResponse,
    GetOrderListOptions,
    OrderDetails
} from './types';
import { TradeMethods } from './methods';

export function mixinTrade<T extends Constructor>(base: T): Constructor<TradeMethods> & T {
    return class extends base {

        /**
         * Get Order Details by clientOid - (General) {@link https://www.kucoin.com/docs/rest/spot-trading/orders/get-order-details-by-clientoid}
         * Request via this interface to check the information of a single active order via clientOid. The system will prompt that the order does not exists if the order does not exist or has been settled.
         * 
         * @param {string} [clientOid] - Unique order id created by users to identify their orders
         */
        async getOrderDetailsByClientOid(clientOid: string): Promise<DataResponse<OrderDetails>> {
            validateRequiredParameters({ 
                clientOid
            });

            return await this.makeRequest('GET', '/order/client-order/'+clientOid);
        }

        /**
         * Get Order Details by orderId - (General) {@link https://www.kucoin.com/docs/rest/spot-trading/orders/get-order-details-by-orderid}
         * 
         * @param {string} [orderId] - Order ID, unique ID of the order.
         */
        async getOrderDetailsByOrderId(orderId: string): Promise<DataResponse<OrderDetails>> {
            validateRequiredParameters({ 
                orderId
            });

            return await this.makeRequest('GET', '/orders/'+orderId);
        }

        /**
         * Get Order List - (General) {@link https://www.kucoin.com/docs/rest/spot-trading/orders/get-order-list}
         * Request via this endpoint to get your current order list. The return value is the data after Pagination, sorted in descending order according to time.
         * 
         * @param {object?} [options]
         * @param {OrderStatus?} [options.status] - active or done(done as default), Only list orders with a specific status.
         */
        async getOrderList(options?: GetOrderListOptions): Promise<DataResponse<PaginatedData<OrderDetails>>> {
            const url = this.prepareSignedPath('/orders',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

        /**
        * Place Order - (Spot Trading or Margin Trading) {@link https://www.kucoin.com/docs/rest/spot-trading/orders/place-order}
        *
        * @param {object} [options]
        * @param {string?} [options.clientOid] - clientOid, the unique identifier created by the client, use of UUID, with a maximum length of 128 bits.
        * @param {Side} [options.side] - buy or sell
        * @param {string?} [options.type] - limit or market (default is limit)
        * @param {string?} [options.remark] - remark for the order, length cannot exceed 100 utf8 characters
        * @param {string?} [options.stp] - self trade prevention, CN, CO, CB or DC
        * @param {string?} [options.tradeType] - The type of trading : TRADE（Spot Trade）, MARGIN_TRADE (Margin Trade). Default is TRADE. Note: To improve the system performance and to accelerate order placing and processing, KuCoin has added a new interface for order placing of margin. For traders still using the current interface, please move to the new one as soon as possible. The current one will no longer accept margin orders by May 1st, 2021 (UTC). At the time, KuCoin will notify users via the announcement, please pay attention to it.
        
        * limit Orders
        * @param {string?} [options.price] - Specify price for currency - Additional Required Parameters Required by limit Orders
        * @param {string?} [options.size] - Specify quantity for currency - Additional Required Parameters Required by limit Orders
        * @param {string?} [options.timeInForce] - Order timing strategy GTC, GTT, IOC, FOK (The default is GTC) - Additional Optional Parameters Required by limit Orders
        * @param {number?} [options.cancelAfter] - Cancel after n seconds，the order timing strategy is GTT - Additional Optional Parameters Required by limit Orders
        * @param {boolean?} [options.postOnly] - passive order labels, this is disabled when the order timing strategy is IOC or FOK - Additional Optional Parameters Required by limit Orders
        * @param {boolean?} [options.hidden] - Hidden or not (not shown in order book) - Additional Optional Parameters Required by limit Orders
        * @param {boolean?} [options.iceberg] - Whether or not only visible portions of orders are shown in iceberg orders - Additional Optional Parameters Required by limit Orders
        * @param {string?} [options.visibleSize] - Maximum visible quantity in iceberg orders - Additional Optional Parameters Required by limit Orders
        * 
        * market orders
        * @param {string?} [options.size] - (Select one out of two: size or funds) - Additional Required Parameters Required by market Orders
        * @param {number?} [options.funds] - (Select one out of two: size or funds) - Additional Required Parameters Required by market Orders
        */
        async placeOrder(options: PlaceOrderOptions): Promise<DataResponse<PlaceOrderResponse>> {
            options.clientOid = options.clientOid || genClientOid();

            validateRequiredParameters({ 
                clientOId: options.clientOid!,
                side: options.side!,
                symbol: options.symbol!
            });

            return await this.makeRequest('POST', '/orders', options);
        }
    };
}