import dotenv from 'dotenv';
import { DataResponse, RestTradeTypes, Side, Spot } from '../../../src/index';

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
    client.placeOrder({
        side: Side.BUY,
        symbol: 'SOL-USDT',
        price: '97.93',
        size: '0.05',
    }).then((res: DataResponse<RestTradeTypes.PlaceOrderResponse>) => {
        console.log('orderId', res.data.orderId);
    }).catch(err => { console.log(err); });
} catch(e) {
    console.log(e);
}

