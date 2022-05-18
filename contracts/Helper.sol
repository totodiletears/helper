//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

// gets ids for NFT holder
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

contract Helper {
    //get Ids owned
    IERC721Enumerable public nft;

    constructor(address _nft) {
        nft = IERC721Enumerable(_nft);
    }

    function getIdArray(address _user)
        external
        view
        returns (uint256[] memory)
    {
        // get amount of nfts owned
        uint256 length = nft.balanceOf(_user);
        // create an array and set the length to amount owned
        uint256[] memory array = new uint256[](length);
        // add Ids to array
        for (uint256 i = 0; i < length; ++i) {
            array[i] = nft.tokenOfOwnerByIndex(_user, i);
        }
        return array;
    }
}
