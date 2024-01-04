import { Constructor, DataArrayResponse } from '../../../setters/types';
import {
    GetCurrencyListResponse
} from './types';
import { MarketMethods } from './methods';

export function mixinMarket<T extends Constructor>(base: T): Constructor<MarketMethods> & T {
    return class extends base {
        /**
        * Get Currency List {@link https://www.kucoin.com/docs/rest/spot-trading/market-data/get-currency-listr}
        */
        async getCurrencyList(): Promise<DataArrayResponse<GetCurrencyListResponse>> {    
            return await this.makeRequest('GET', '/currencies');
        }
    };
}