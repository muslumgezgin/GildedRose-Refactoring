import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';

describe('Gilded Rose', () => {
    it('backstage passes item should increase in qualty by one outside 10 days ', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 2)]);
        const items = gildedRose.updateQuality();
        expect(items).toEqual([new Item("Backstage passes to a TAFKAL80ETC concert", 19, 3)]);
    });

    it('backstage passes item should increase in qualty by two inside 10 days', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 2)]);
        const items = gildedRose.updateQuality();
        expect(items).toEqual([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 4)]);
    });
});
