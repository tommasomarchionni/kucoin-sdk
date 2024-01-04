import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/getOrderList';

jest.mock('../../../src/index');

const apiKey = process.env.KUCOIN_API_KEY || '';
const apiSecret = process.env.KUCOIN_API_SECRET || '';
const passphrase = process.env.KUCOIN_PASSPHRASE || '';
const apiKeyVersion = process.env.KUCOIN_API_KEY_VERSION || '';

describe('Get Order List', () => {
    const client = new Spot(
        apiKey, 
        apiSecret,
        passphrase,
        apiKeyVersion,
    );
    it('should return Order List', async () => {
        const spy = jest.spyOn(client, 'getOrderList').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getOrderList();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});