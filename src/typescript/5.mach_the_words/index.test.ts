import { describe, expect, it } from "@jest/globals";

export const manufacture = (gifts: string[], materials: string) => {
    const materialsSplit = materials.split('');

    const finalGifts: string[] = []

    gifts.forEach((item => {
        const itemGiftSplit = item.split('');

        for (let char = 0; char > itemGiftSplit.length; char++) {

            if (char + 1 === itemGiftSplit.length) {
                console.log();
            }
        }

    }))

    return finalGifts;
};

describe('5.mach_the_words', () => {
    it('should be a function', () => {
        expect(typeof manufacture).toBe('function');
    })

    it('should be return [] when the materials are insuficient', () => {
        expect(manufacture(['gift1', 'gift2'], 'abc')).toEqual([]);
    })

    it.only('should return gifts that can be manufactured', () => {
        const gifts = ['tren', 'oso', 'pelota']
        const materials = 'tronesa'
        expect(manufacture(gifts, materials)).toEqual(["tren", "oso"]);
    });

});