import { describe, expect, test, vi } from 'vitest';
import { postObj } from './postObj';

describe ('post obj to schema', () => {
    test ('should return array of uploaded record ids', async () => {
        const SCHEMA_ID = '6c0102cf-26c6-4ae2-b647-9ef94c091fd0';

        const data = [
            {
              name: { $allot: 'Vitalik Buterin' },
              years_in_web3: { $allot: 8 },
              responses: [
                { rating: 5, question_number: 1 },
                { rating: 3, question_number: 2 },
              ],
            },
            {
              name: { $allot: 'Satoshi Nakamoto' },
              years_in_web3: { $allot: 14 },
              responses: [
                { rating: 2, question_number: 1 },
                { rating: 5, question_number: 2 },
              ],
            },
          ];

        const result:any = await postObj(data, SCHEMA_ID);

        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(2);
        expect(result[0]).toMatch(
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        );
        expect(result[1]).toMatch(
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        );
    });
});
