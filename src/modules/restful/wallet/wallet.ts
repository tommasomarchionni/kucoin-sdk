import { Constructor, DataArrayResponse } from '../../../setters/types';
import {
    GetAccountListOptions,
    GetAccountListResponse
} from './types';
import { WalletMethods } from './methods';

export function mixinWallet<T extends Constructor>(base: T): Constructor<WalletMethods> & T {
    return class extends base {
        
        /**
        * Get Account List - Spot/Margin/trade_hf (General) {@link https://www.kucoin.com/docs/rest/account/basic-info/get-account-list-spot-margin-trade_hf}
        *
        * @param {object} [options]
        * @param {number} [options.currency] - Currency
        * @param {number} [options.type] - Account type main、trade、margin、trade_hf
        */
        async getAccountList(options?: GetAccountListOptions): Promise<DataArrayResponse<GetAccountListResponse>> {
            const url = this.prepareSignedPath('/accounts',
                options ? options : {}
            );
            return await this.makeRequest('GET', url);
        }

    };
}