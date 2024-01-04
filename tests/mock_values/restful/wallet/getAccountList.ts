import { AccountType, DataArrayResponse, RestWalletTypes } from '../../../../src/index';

export const mockResponse: DataArrayResponse<RestWalletTypes.GetAccountListResponse> = {
    code: '200000',
    data: [
        {
            available: '1',
            balance: '1',
            currency: 'BTC',
            holds: '1',
            id: '12345',
            type: AccountType.TRADE
        }
    ]   
};