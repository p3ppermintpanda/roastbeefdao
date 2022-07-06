const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dao", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Dao = await ethers.getContractFactory("Dao");
    const Dao = await Dao.deploy("Hello, world!");
    await Dao.deployed();

    expect(await Dao.greet()).to.equal("Hello, world!");

    const setGreetingTx = await Dao.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await Dao.greet()).to.equal("Hola, mundo!");
  });
});
