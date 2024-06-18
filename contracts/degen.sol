// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DEGENGMAINGTOKEN is ERC20, Ownable {

    struct Item {
        uint id;
        string name;
        uint256 cost;
    }

    address public admin;
    uint public itemCounter = 0;
    Item[] public availableItems;
    mapping (address => Item[]) public MyItems;

    constructor(string memory name, string memory symbol, address adminAddress) ERC20(name, symbol) Ownable(adminAddress) {
        transferOwnership(adminAddress);
        admin = adminAddress;
    }

    function createTokens(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function destroyTokens(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function listItem(string memory itemName, uint256 itemCost) external onlyOwner {
        availableItems.push(Item(itemCounter, itemName, itemCost));
        itemCounter++;
    }

    function getItems() external view returns (Item[] memory) {
        return availableItems;
    }

    function purchaseItem(uint itemId) external {
        require(itemId < availableItems.length, "Invalid item ID");
        uint256 cost = availableItems[itemId].cost;
        require(balanceOf(msg.sender) >= cost, "Not enough tokens");
        _transfer(msg.sender, address(this), cost);
        MyItems[msg.sender].push(availableItems[itemId]);
    }

    function getMyItems() external view returns (Item[] memory) {

        return MyItems[msg.sender];

    }

    function withdraw() external onlyOwner{
      _transfer(address(this), admin, balanceOf(address(this)));   
    }
}
