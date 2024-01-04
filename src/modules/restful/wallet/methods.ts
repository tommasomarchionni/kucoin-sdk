import { DataArrayResponse } from '../../../setters/types';
import {
    GetAccountListOptions,
    GetAccountListResponse
} from './types';

export interface WalletMethods {
    getAccountList(options?: GetAccountListOptions): Promise<DataArrayResponse<GetAccountListResponse>>;
}