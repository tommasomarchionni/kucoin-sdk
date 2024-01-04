import dotenv from 'dotenv';
import { DataResponse, RestTradeTypes, Spot } from '../../../src/index';

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
    const clientOid = '1';
    client.getOrderDetailsByClientOid(clientOid).then((res: DataResponse<RestTradeTypes.OrderDetails>) => {
        console.log('getOrderDetailsByClientOid', res);
    }).catch(err => { console.log(err); });
} catch(e) {
    console.log(e);
}