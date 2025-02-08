import { describe, expect, test, vi } from 'vitest';
import { getObj } from './getObj';

describe ('get obj', () => {
    test ('should return >0 objects', async () => {
        const SCHEMA_ID = '6c0102cf-26c6-4ae2-b647-9ef94c091fd0';

        const result:any = await getObj(SCHEMA_ID);

        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThan(0);
        expect(result[0]._id).toMatch(
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        );
    });
});
