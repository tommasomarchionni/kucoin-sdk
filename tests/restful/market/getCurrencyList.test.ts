import { expect } from '@jest/globals';
import { Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/market/getCurrencyList';

jest.mock('../../../src/index');

const apiKey = process.env.KUCOIN_API_KEY || '';
const apiSecret = process.env.KUCOIN_API_SECRET || '';
const passphrase = process.env.KUCOIN_PASSPHRASE || '';
const apiKeyVersion = process.env.KUCOIN_API_KEY_VERSION || '';

describe('Get Currency List', () => {
    const client = new Spot(
        apiKey, 
        apiSecret,
        passphrase,
        apiKeyVersion,
    );
    it('should return Currency List', async () => {
        const spy = jest.spyOn(client, 'getCurrencyList').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.getCurrencyList();
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});




