import { AxiosProxyConfig } from 'axios';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type Constructor<T = any> = new (...args: any[]) => T;

export interface SpotOptions {
    baseURL?: string,
    prefix?: string,
    timeout?: number,
    proxy?: AxiosProxyConfig | false,
    httpsAgent?: boolean;
}

export interface DataArrayResponse<TItem> {
    data: TItem[],
    code: string,
    msg?: string;
}

export interface DataResponse<TItem> {
    data: TItem,
    code: string,
    msg?: string;
}

export interface PaginatedData<TData> {
    currentPage: number,
    pageSize: number,
    totalNum: number,
    totalPage: number,
    items: TData[];
}