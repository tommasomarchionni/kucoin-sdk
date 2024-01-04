import { DataArrayResponse } from '../../../setters/types';
import { 
    GetCurrencyListResponse
} from './types';

export interface MarketMethods {
    getCurrencyList(): Promise<DataArrayResponse<GetCurrencyListResponse>>;  
}