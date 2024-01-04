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
    const orderId = '1';
    client.getOrderDetailsByOrderId(orderId).then((res: DataResponse<RestTradeTypes.GetOrderDetailsResponse>) => {
        console.log('getOrderDetailsByOrderId', res);
    }).catch(err => { console.log(err); });
} catch(e) {
    console.log(e);
}

