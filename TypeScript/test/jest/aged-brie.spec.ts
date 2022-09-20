import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';

describe('Gilded Rose', () => {
    it('should increases in qualty', () => {
        const gildedRose = new GildedRose([new Item('Aged Brie', 2, 2)]);
        const items = gildedRose.updateQuality();
        expect(items).toEqual([new Item('Aged Brie', 1, 3)]);
    });
});
