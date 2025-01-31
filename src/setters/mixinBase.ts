import { AxiosInstance, AxiosProxyConfig } from 'axios';
import { buildQueryString, httpRequest, removeEmptyValue } from '../helpers/utils';
import { SpotOptions } from './types';
import axios from 'axios';
import {
    mixinMarket,
    mixinTrade,
    mixinWallet,
} from '../modules/restful/index';

export interface LogFn {
    // TODO: why is this different from `obj: object` or `obj: any`?
    /* tslint:disable:no-unnecessary-generics */
    <T extends object>(obj: T, msg?: string, ...args: unknown[]): void;
    (obj: unknown, msg?: string, ...args: unknown[]): void;
    (msg: string, ...args: unknown[]): void;
}

export interface LoggerInterface {
    fatal?: LogFn
    error?: LogFn
    warn?: LogFn
    debug: LogFn
}

export const SpotBase = mixinMarket(mixinTrade(mixinWallet(class {
    apiKey: string;
    apiSecret: string;
    passphrase: string;
    apiKeyVersion: string;
    baseURL: string;
    prefix: string;
    timeout: number;
    proxy: AxiosProxyConfig | false;
    httpsAgent: boolean;
    logger: LoggerInterface|undefined;
    instance: AxiosInstance;

    constructor(apiKey: string, apiSecret: string, passphrase: string, apiKeyVersion = '2', options: SpotOptions = {}, logger?: LoggerInterface) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.passphrase = passphrase || '';
        this.apiKeyVersion = apiKeyVersion;
        this.prefix = options.prefix || '/api/v1';
        this.baseURL = options.baseURL || 'https://api.kucoin.com';
        this.timeout = options.timeout || 0;
        this.proxy = options.proxy || false;
        this.httpsAgent = options.httpsAgent || false;
        this.logger = logger;
        this.instance = axios.create();
    }

    async makeRequest<TParam>(method: string, url: string, params?: TParam) {
        return await httpRequest<TParam>(
            this.instance,
            {
                method,
                baseURL: this.baseURL,
                prefix: this.prefix,
                url,
                params,
                apiKey: this.apiKey,
                secret: this.apiSecret,
                passphrase: this.passphrase,
                apiKeyVersion: this.apiKeyVersion,
                timeout: this.timeout,
                proxy: this.proxy,
                httpsAgent: this.httpsAgent,
                logger: this.logger
            }
        );
    }

    prepareSignedPath(
        path: string, 
        options?: object
    ): string {
        const newOptions = { ...options };
        options = removeEmptyValue(newOptions);
        const params = buildQueryString(options);
        return `${path}${params?.length > 0 ? '?' : ''}${params}`;
    }
})));