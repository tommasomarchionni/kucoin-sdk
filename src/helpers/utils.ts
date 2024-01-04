import * as crypto from 'crypto';

import axios, { AxiosProxyConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { appName, appVersion } from './constants';

interface HttpRequestConfig<TParam> {
    baseURL: string;
    prefix: string;
    apiKey: string;
    secret: string;
    passphrase: string;
    method: string;
    url: string;
    params?: TParam;
    apiKeyVersion: string,
    timeout?: number;
    proxy?: AxiosProxyConfig | false;
    httpsAgent?: boolean;
}

export async function httpRequest<TParam>(config: HttpRequestConfig<TParam>) {
    
    try {
        const { baseURL, prefix, apiKey, secret, passphrase, apiKeyVersion, method, url, timeout, proxy, httpsAgent, params } = config;
        const options = {
            baseURL,
            timeout,
            proxy,
            httpsAgent,
            method,
            url: prefix + url,
            headers: auth(
                apiKey,
                secret,
                passphrase,
                method,
                prefix + url,
                params != null ? JSON.stringify(params) : '',
                apiKeyVersion
            )
        };

        if (method.toUpperCase() === 'POST') {
            const { data } = await axios.post(prefix + url, params, options);
            return data;
        } else {
            const { data } = await axios.request(options);
            return data;
        }
        
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.status + ': ' + error.response.statusText);
        } else {
            throw new Error('Http request error');
        }
    }
}

export function auth(
    key: string,
    secret: string, 
    passphrase: string, 
    method: string, 
    url: string, 
    data: string = '', 
    authVersion: string|number = 2
) {

    const timestamp = Date.now();
    const signature = sign(timestamp + method.toUpperCase() + url + data, secret);
    const returnData: {
        'KC-API-KEY': string,
        'KC-API-SIGN': string,
        'KC-API-TIMESTAMP': string,
        'KC-API-PASSPHRASE': string,
        'Content-Type': string,
        'User-Agent': string,
        'KC-API-KEY-VERSION'?: number,
    } = {
        'KC-API-KEY': key,
        'KC-API-SIGN': signature,
        'KC-API-TIMESTAMP': timestamp.toString(),
        'KC-API-PASSPHRASE': passphrase || '',
        'Content-Type': 'application/json',
        'User-Agent': `${appName}/${appVersion}`,
    };
    if (authVersion && (authVersion === 2 || authVersion === '2')) { // for v2 API-KEY
        returnData['KC-API-KEY-VERSION'] = 2;
        returnData['KC-API-PASSPHRASE'] = sign(passphrase || '', secret);
    }

    return returnData;
}

export function sign(
    text: string, 
    secret: string, 
    outputType: crypto.BinaryToTextEncoding = 'base64'
): string {

    const signatureResult: string = crypto
        .createHmac('sha256', secret)
        .update(text)
        .digest(outputType);
    return signatureResult;
}

export function randomString() {
    return crypto.randomBytes(16).toString('hex');
}

export interface ParamObject {
    [key: string]: string | number | boolean | object
}

export function validateRequiredParameters(paramObject: ParamObject) {
    if (!paramObject || isEmptyValue(paramObject)) { throw new Error('Missing Parameters'); }
    const emptyParams: string[] = [];
    Object.keys(paramObject).forEach((param: string) => {
        if (isEmptyValue(paramObject[param])) {
            emptyParams.push(param);
        }
    });
    if (emptyParams.length) { throw new Error('Missing parameters: ' + emptyParams.join(', ')); }
}

export function isEmptyValue(input: string | boolean | number | object): boolean {
    /**
     * Scope of empty value: falsy value (except for false and 0),
     * string with white space characters only, empty object, empty array
     */
    return (!input && input !== false && input !== 0) ||
        ((typeof input === 'string') && /^\s+$/.test(input)) ||
        (input instanceof Object && !Object.keys(input).length) ||
        (Array.isArray(input) && !input.length);
}

export function buildQueryString(params: object): string {
    if (!params) return '';
    return Object.entries(params)
        .map(stringifyKeyValuePair)
        .join('&');
}

function stringifyKeyValuePair([key, value]: [string, string]) {
    const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
    return `${key}=${encodeURIComponent(valueString)}`;
}

export function getTimestamp(): string {
    return Date.now() + '';
}

export function removeEmptyValue(obj: object): object {
    if (!(obj instanceof Object)) return {};
    return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => value !== null && value !== undefined && value !== '')
    );
}

export function genClientOid(): string {
    return uuidv4();
}