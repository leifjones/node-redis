export const FIRST_KEY_INDEX = 1;

export function transformArguments(key: string, item: string): Array<string> {
    return ['CF.ADDNX', key, item];
}

export { transformBooleanReply as transformReply } from '@node-redis/client/dist/lib/commands/generic-transformers';
