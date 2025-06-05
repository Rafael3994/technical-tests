import { describe, expect, it } from '@jest/globals';

export const repeatNumber = (gifts: number[]) => {
    if (!Array.isArray(gifts) || !gifts.every(item => typeof item === 'number')) throw new Error('The param must be an array of numbers');

    const listCount: { key: number, value: number }[] = []
    for (const id of gifts) {
        if (listCount.find(item => item.key === id)) {
            const indexFound = listCount.findIndex(item => item.key === id)
            listCount[indexFound].value += 1;

            const maxNumber = Math.max(...listCount.map(item => item.value))
            const totalRepetedNumber = listCount.reduce((accumulator, currentValue) => {
                if (maxNumber === currentValue.value) {
                    return accumulator = accumulator + 1;
                }
                return accumulator;
            }, 0)


            if (totalRepetedNumber === 1) {
                const [element] = listCount.splice(indexFound, 1);
                listCount.unshift(element);
            }
        } else {
            listCount.push({ key: id, value: 1 })
        }
    }

    console.log('listCount', listCount);

    const areRepeated = listCount.every(item => item.value === 1)

    if (areRepeated) return -1;

    const maxNumber = Math.max(...listCount.map(item => item.value))
    const maxValues = listCount.filter(item => item.value > 1 && item.value === maxNumber)

    console.log('maxValues', maxValues);

    return maxValues[0].key
};

describe('RepeatNumber', () => {
    it('should be a function', () => {
        expect(typeof repeatNumber).toBe('function');
    });

    it('should return error when the parameter is not an array', () => {
        expect(() => repeatNumber(123 as any)).toThrowError();
    });

    it('should be return -1 when the numbers no repeated', () => {
        expect(-1).toBe(repeatNumber([1, 2, 3, 4]))
    })

    it('should return the first repeated number', () => {
        expect(repeatNumber([2, 1, 3, 5, 3, 2])).toBe(3);
    });

    it('should return -1 when there are no repeated number', () => {
        expect(-1).toBe(repeatNumber([1, 2, 3, 4]))
    });

    it('should return the first repeated number when there is on repetition', () => {
        expect(repeatNumber([1, 2, 3, 2])).toBe(2);
    });

    it('should return the most repeated number', () => {
        expect(repeatNumber([1, 2, 2, 2, 1])).toBe(2);
    })

    it('should return the most repeated number when exist more repeted', () => {
        expect(repeatNumber([1, 1, 2, 2, 2, 1, 2])).toBe(2);
    })

    it('should return 3', () => {
        expect(3).toBe(repeatNumber([2, 1, 3, 5, 3, 2]))
    });

    it('should return -1', () => {
        expect(-1).toBe(repeatNumber([1, 2, 3, 4]))
    });

    it('should return 5', () => {
        expect(5).toBe(repeatNumber([5, 1, 5, 1]))
    });
});