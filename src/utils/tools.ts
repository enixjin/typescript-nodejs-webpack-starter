/**
 * Created by Enix Jin on 2017/3/14.
 */
export namespace tools {
    export function plus(a: number, b: number): number {
        return a + b;
    }

    // this method will access self defined global config values
    export function getConfig(): any {
        return global.config;
    }
}