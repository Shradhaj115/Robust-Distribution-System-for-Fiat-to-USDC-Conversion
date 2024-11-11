// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FiatToUSDC {
    address public treasury;
    mapping(address => uint256) public balances;

    event USDCTransferred(address indexed to, uint256 amount);
    
    constructor(address _treasury) {
        treasury = _treasury;
    }

    function transferUSDC(address to, uint256 amount) public {
        require(msg.sender == treasury, "Only treasury can transfer USDC");
        balances[to] += amount;
        emit USDCTransferred(to, amount);
    }
}
