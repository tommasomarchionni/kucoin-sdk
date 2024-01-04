import { DataResponse, PaginatedData } from '../../../setters/types';

import {
    GetOrderListOptions,
    OrderDetails,
    PlaceOrderOptions,
    PlaceOrderResponse,
} from './types';

export interface TradeMethods {
    getOrderDetailsByClientOid(clientOid: string): Promise<DataResponse<OrderDetails>>;
    getOrderDetailsByOrderId(orderId: string): Promise<DataResponse<OrderDetails>>;
    getOrderList(options?: GetOrderListOptions): Promise<DataResponse<PaginatedData<OrderDetails>>>;
    placeOrder(options: PlaceOrderOptions): Promise<DataResponse<PlaceOrderResponse>>;
}