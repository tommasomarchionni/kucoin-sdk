import { DataResponse, PaginatedData } from '../../../setters/types';

import {
    PlaceOrderOptions,
    PlaceOrderResponse,
    OrderDetails,
    GetOrderListOptions,
} from './types';

export interface TradeMethods {
    placeOrder(options: PlaceOrderOptions): Promise<DataResponse<PlaceOrderResponse>>;
    getOrderDetailsByOrderId(orderId: string): Promise<DataResponse<OrderDetails>>;
    getOrderDetailsByClientOid(clientOid: string): Promise<DataResponse<OrderDetails>>;
    getOrderList(options?: GetOrderListOptions): Promise<DataResponse<PaginatedData<OrderDetails>>>;
}