import { 
    AccountType, 
} from '../../enum';

export interface GetAccountListOptions {
    /**
     * Currency
     */
    currency?: string;

    /**
     * Account type
     */
    type?: AccountType;
}

export interface GetAccountListResponse {
    /**
     * The ID of the account
     */
    id: string;

    /**
     * Currency
     */
    currency: string;

    /**
     * Account type:，main、trade、trade_hf、margin
     */
    type: AccountType;

    /**
     * Total funds in the account
     */
    balance: string;

    /**
     * Funds available to withdraw or trade
     */
    available: string;

    /**
     * Funds on hold (not available for use)
     */
    holds: string;
}