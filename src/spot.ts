import { LoggerInterface, SpotBase } from './setters/mixinBase';
import { SpotOptions } from './setters/types';

export class Spot extends SpotBase {
    constructor(apiKey = '', apiSecret = '', passphrase= '', apiKeyVersion = '2', options: SpotOptions = {}, logger?: LoggerInterface) {
        super(
            apiKey,
            apiSecret,
            passphrase,
            apiKeyVersion,
            options,
            logger
        );
    }
}