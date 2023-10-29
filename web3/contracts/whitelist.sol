//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistAddress;
    mapping(address=>bool) public whitelistedAddresses;
    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxWhitelistAddress){
        maxWhitelistAddress=_maxWhitelistAddress;
    }

    function addAddressToWhitelist() public{
        require(!whitelistedAddresses[msg.sender], "Sender has already been whitelisted");
        require(numAddressesWhitelisted>=maxWhitelistAddress, "Max whitelist number has been reached");
        whitelistedAddresses[msg.sender]=true;
        numAddressesWhitelisted+=1;
    }
}