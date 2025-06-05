import { describe, expect, it } from '@jest/globals';

import { numberAddition } from './index';

describe('NumberAddition', () => {
    it('should error when the parameter is not a string', () => {
        expect(() => numberAddition(123 as any)).toThrowError();
    });


});