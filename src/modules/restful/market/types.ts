export interface GetCurrencyListResponse{
    currency: string;
    name: string;
    fullName: string;
    precision: number;
    confirms: number|null;
    contractAddress: string|null;
    isMarginEnabled: boolean;
    isDebitEnabled: boolean;
    chains: CurrencyChain[];
}

export interface CurrencyChain {
    chainName: string,
    withdrawalMinSize: string,
    withdrawalMinFee: string,
    isWithdrawEnabled: boolean,
    isDepositEnabled: boolean,
    confirms: number,
    preConfirms: number,
    contractAddress: string,
    chainId: string
}