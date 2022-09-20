
import { Item } from "@/item";
export class GildedRose {
  items: Array<Item>;
  
  public static readonly AGEDBRIE = 'Aged Brie';
  public static readonly BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
  public static readonly SULFURAS = 'Sulfuras, Hand of Ragnaros';
  public static readonly CONJURED = 'Conjured Mana Cake'

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
    }

    return this.items;
  }

  private updateItemQuality(item: Item) {
    
    let degrageRate = this.getDegrateRate(item);
    let doesDegrade = this.checkDoesDegrade(item);

    if (item.name == GildedRose.AGEDBRIE) {
      this.adjustQuality(item, 1);
    }

    if (item.name == GildedRose.BACKSTAGE_PASSES) {
      this.updateBackstagePassesQuality(item);
    }

    if (doesDegrade) {
      this.adjustQuality(item, degrageRate);
    }

    this.updateSellIn(item);
  }

  private updateSellIn(item: Item) {
    
    if (item.name != GildedRose.SULFURAS) {
      item.sellIn = item.sellIn - 1;
    }

    this.handleIfExpired(item);
  }

  private handleIfExpired(item: Item) {
    if (item.sellIn < 0) {
      this.handleExpired(item);
    }
  }

  private handleExpired(item: Item) {

    if (this.checkDoesDegrade(item)) {
      let degrageRate = this.getDegrateRate(item);
      this.adjustQuality(item, degrageRate);
    }

    if (item.name == GildedRose.AGEDBRIE) {
      this.adjustQuality(item, 1);
    }
  }

  private updateBackstagePassesQuality(item: Item) {

    this.adjustQuality(item, 1);

    if (item.sellIn < 11) {
      this.adjustQuality(item, 1);
    }

    if (item.sellIn < 6) {
      this.adjustQuality(item, 1);
    }

    if (item.sellIn < 1) {
      item.quality = item.quality - item.quality;
    }
  }

  private checkDoesDegrade(item: Item): boolean {
    return item.name != GildedRose.AGEDBRIE && item.name != GildedRose.BACKSTAGE_PASSES && item.name != GildedRose.SULFURAS;
  }

  private getDegrateRate(item: Item): number {
    return item.name == GildedRose.CONJURED ? -2 : -1;
  }

  private adjustQuality(item: Item, adjustment: number) {

    let newQuality = item.quality + adjustment;

    if (newQuality <= 50 && newQuality >= 0) {
      item.quality = newQuality;
    }

  }
}
