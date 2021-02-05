class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
       let itemName = this.items[i].name;
       if (itemName === 'Sulfuras, Hand of Ragnaros') {
        continue;
      }

      this.items[i].sellIn -= 1;

      if(itemName === "Aged Brie"){
        this.items[i].quality < 50 ? this.items[i].quality +=  1 : 50;
        continue;
      }

      if(itemName === "Backstage passes to a TAFKAL80ETC concert"){
        if (this.items[i].sellIn < 11 && this.items[i].sellIn >=6) {
          this.items[i].quality < 50 ? this.items[i].quality +=  2 : 50;
        }
        if (this.items[i].sellIn < 6) {
          this.items[i].quality < 50 ? this.items[i].quality +=  3 : 50;
        }
        if(this.items[i].sellIn < 0){
          this.items[i].quality = 0;
        }
        continue;
      }

      if(itemName.includes("Conjured")){
        this.items[i].quality > 0 ? this.items[i].quality -= 2 : 0;
        continue;
      }

      this.items[i].quality > 0 ? this.items[i].quality -= 1 : 0;
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
