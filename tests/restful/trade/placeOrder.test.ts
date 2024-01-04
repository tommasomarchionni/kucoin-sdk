import { expect } from '@jest/globals';
import { Side, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/placeOrder';

jest.mock('../../../src/index');

const apiKey = process.env.KUCOIN_API_KEY || '';
const apiSecret = process.env.KUCOIN_API_SECRET || '';
const passphrase = process.env.KUCOIN_PASSPHRASE || '';
const apiKeyVersion = process.env.KUCOIN_API_KEY_VERSION || '';

describe('Place Order', () => {
    const client = new Spot(
        apiKey, 
        apiSecret,
        passphrase,
        apiKeyVersion,
    );
    it('should return Order Id', async () => {
        const spy = jest.spyOn(client, 'placeOrder').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.placeOrder({
            side: Side.BUY,
            symbol: 'SOL-USDT',
            price: '97.93',
            size: '0.05',
        });
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});