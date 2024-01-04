import { DataArrayResponse, RestMarketTypes } from '../../../../src/index';

export const mockResponse: DataArrayResponse<RestMarketTypes.GetCurrencyListResponse> = {
    code: '200000',
    data: [
        {
            currency: 'BTC',
            name: 'BTC',
            fullName: 'Bitcoin',
            precision: 8,
            confirms: null,
            contractAddress: null,
            isMarginEnabled: true,
            isDebitEnabled: true,
            chains: [
                {
                    chainName: 'BTC',
                    withdrawalMinSize: '0.0008',
                    withdrawalMinFee: '0.0005',
                    isWithdrawEnabled: true,
                    isDepositEnabled: true,
                    confirms: 3,
                    preConfirms: 1,
                    contractAddress: '',
                    chainId: 'btc'
                },
                {
                    chainName: 'TRC20',
                    withdrawalMinSize: '0.0005',
                    withdrawalMinFee: '0.0001',
                    isWithdrawEnabled: false,
                    isDepositEnabled: false,
                    confirms: 3,
                    preConfirms: 3,
                    contractAddress: 'TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9',
                    chainId: 'trx'
                }
            ]
        }
    ]
};