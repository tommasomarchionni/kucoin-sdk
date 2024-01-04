import dotenv from 'dotenv';
import { DataArrayResponse, RestWalletTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.KUCOIN_API_KEY || '';
const apiSecret = process.env.KUCOIN_API_SECRET || '';
const passphrase = process.env.KUCOIN_PASSPHRASE || '';
const apiKeyVersion = process.env.KUCOIN_API_KEY_VERSION || '';
const client = new Spot(
    apiKey, 
    apiSecret,
    passphrase,
    apiKeyVersion,
);

try {
    client.getAccountList().then((res: DataArrayResponse<RestWalletTypes.GetAccountListResponse>) => {
        console.log(res.data[0]);
    }).catch(err => { console.log(err); });
} catch(e) {
    console.log(e);
}

