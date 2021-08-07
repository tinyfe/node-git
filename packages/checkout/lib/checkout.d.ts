import { fn } from './typings';
export declare function checkout(checkout: string, { targetPath, git }?: {
    targetPath?: string | undefined;
    git?: string | undefined;
}, cb?: fn): void;
export declare const checkoutPromisify: (arg1: string, arg2: {
    targetPath?: string | undefined;
    git?: string | undefined;
} | undefined) => Promise<any>;
