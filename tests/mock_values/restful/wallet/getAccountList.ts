import { AccountType, DataArrayResponse, RestWalletTypes } from '../../../../src/index';

export const mockResponse: DataArrayResponse<RestWalletTypes.GetAccountListResponse> = {
    code: '200000',
    data: [
        {
            id: '5bd6e9286d99522a52e458de', //accountId
            currency: 'BTC', //Currency
            type: AccountType.MAIN, //Account type, including main and trade
            balance: '237582.04299', //Total assets of a currency
            available: '237582.032', //Available assets of a currency
            holds: '0.01099' //Hold assets of a currency
        },
        {
            id: '5bd6e9216d99522a52e458d6',
            currency: 'BTC',
            type: AccountType.TRADE,
            balance: '1234356',
            available: '1234356',
            holds: '0'
        }
    ] 
};