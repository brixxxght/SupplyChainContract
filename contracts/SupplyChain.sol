// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SupplyChain {
    // 1. -> Get address of the person that deploys the initial contract
    address owner;

    // -> Executes immediately the contract is deployed
    constructor() {
        owner = msg.sender;
    }

    // -> Struct is used to define variables to hold probable values
    struct store {
        string manufacturer;
        string supplier;
        string buyer;
        string location;
        string product;
        uint256 date;
        uint256 price;
    }

    uint256 private productID = 0;

    // initialized store as an object
    mapping(uint256 => store) public supplyRecords;

    modifier verifyOwner() {
        require(msg.sender == owner, "access denied"); // to handle error if a certain condition is not met
        _; // allows the modifier to run first
    }

    function addNewrecord(
        string memory _manufacturer,
        string memory _supplier,
        string memory _buyer,
        string memory _location,
        string memory _product,
        uint256 _price
    ) public verifyOwner {
        supplyRecords[productID] = store(
            _manufacturer,
            _supplier,
            _buyer,
            _location,
            _product,
            block.timestamp,
            _price
        );

        productID++;
    }

    // Retrieve item based on ID
    function retrieveItem(uint256 _id) public view returns (store memory) {
        return supplyRecords[_id];
    }
}
