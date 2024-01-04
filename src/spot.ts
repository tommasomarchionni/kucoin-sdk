import { SpotBase } from './setters/mixinBase';
import { SpotOptions } from './setters/types';

export class Spot extends SpotBase {
    constructor(apiKey = '', apiSecret = '', passphrase= '', apiKeyVersion = '2', options: SpotOptions = {}) {
        super(
            apiKey,
            apiSecret,
            passphrase,
            apiKeyVersion,
            options
        );
    }
}