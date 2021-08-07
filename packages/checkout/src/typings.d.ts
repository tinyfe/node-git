export interface AnyObject {
  [key: string]: unknown;
}

export type fn = (...args: any[]) => any;
export type Options = AnyObject | { git: string } | null | fn;

export declare function clone(repo: string, targetPath: string): Promise<any>;
export declare function clone(
  repo: string,
  targetPath: string,
  options?: Options,
): Promise<any>;
export declare function clone(
  repo: string,
  targetPath: string,
  options?: Options,
  cb?: fn | undefined,
): Promise<any>;

export declare function processAsync(process: NodeJS.Process, cb: fn): Promise<any>;
export declare function processAsync(
  process: NodeJS.Process,
  cmd: string,
  cb?: fn,
): Promise<any>;
