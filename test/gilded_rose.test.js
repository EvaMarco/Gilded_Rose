const {Shop, Item} = require("../src/gilded_rose");

var day2Items;
beforeAll(function() {
  const gildedRose = new Shop([
    new Item("foo", 0, 0),
    new Item("Sulfuras, Hand of Ragnaros", 10, 80),
    new Item("Conjured pants", 10, 2),
    new Item("simple bread", 9, 4),
    new Item("Aged Brie", 2, 49),
    new Item("almost rotten grapes", 1, 18),
    new Item("Backstage passes to a TAFKAL80ETC concert", 8, 22),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 23),
    new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
  ]);

  day2Items = gildedRose.updateQuality();
})

describe("Gilded Rose", function() {
  it("First Item in shop should be foo", function() {
    expect(day2Items[0].name).toBe("foo");
  });

  it("Quality its never below 0", function() {
    expect(day2Items[0].quality).toBe(0);
  });

  it("quality of Sulfuras, Hand of Ragnaros should be 80 always", function() {
    expect(day2Items[1].quality).toBe(80);
  });

  it("normal item should lose quality", function() {
    expect(day2Items[3].quality).toBe(3);
  });

  it("normal item should lose sellIn", function() {
    expect(day2Items[3].sellIn).toBe(8);
  });

  it("Aged Brie quality increase with age", function() {
    expect(day2Items[4].quality).toBe(50);
  });

  it("Aged Brie quality never pass 50", function() {
    expect(day2Items[4].quality).toBe(50);
  });

  it("Quality degrade twice as fast when sellIn is 0", function() {
    expect(day2Items[5].quality).toBe(17);
  });

  it("Concert ticket increase quality in 2 each day when sellIn is between 10 and 5", function() {
    expect(day2Items[6].quality).toBe(24);
  });

  it("Concert ticket increase quality in 3 each day when sellIn is between 5 and 0", function() {
    expect(day2Items[7].quality).toBe(26);
  });

  it("Concert ticket quality should be 0 the day of the concert", function() {
    expect(day2Items[8].quality).toBe(0);
  });

  it("Conjured items degrade twice as fast", function() {
    expect(day2Items[2].quality).toBe(0);
  })
});
