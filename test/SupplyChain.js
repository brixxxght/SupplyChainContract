const SupplyChain = artifacts.require("SupplyChain.sol");

contract("SupplyChain", () => {
  it("should add new record and return", async () => {
    const supply = await SupplyChain.new();
    await supply.addNewrecord(
      "bright",
      "favour",
      "alex",
      "lagos",
      "coco",
      5000
    );
    await supply.addNewrecord("chi", "sonia", "evans", "abuja", "weed", 10000);
    await supply.addNewrecord(
      "dominion",
      "temi",
      "praise",
      "lokoja",
      "pills",
      6000
    );
    const item1 = await supply.retrieveItem(0);
    const item2 = await supply.retrieveItem(1);
    const item3 = await supply.retrieveItem(2);

    console.log(item1, item2, item3);
    console.log("manufacturer", item1.manufacturer);
    assert("joseph" == item1.manufacturer);
    //   assert("bright" == item1.manufacturer);
  });
});
