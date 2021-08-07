/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { fn } from './typings';
export declare function processAsync(process: ChildProcess, cmd: string, cb?: fn): void;
