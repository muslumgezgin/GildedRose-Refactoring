import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';

describe('Gilded Rose', () => {
    it('conjured item should decrases in qualty twices the speed ', () => {
        const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
        const items = gildedRose.updateQuality();
        expect(items).toEqual([new Item("Conjured Mana Cake", 2, 4)]);
    });

    it('conjured item should decrases in qualty twices the speed also when selling in expired ', () => {
        const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 6)]);
        const items = gildedRose.updateQuality();
        expect(items).toEqual([new Item("Conjured Mana Cake", -1, 2)]);
    });
});
