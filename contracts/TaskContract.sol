// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract TaskContract {
	string message = "Hello Blockcchain!!!";

	function getMessage() public view returns (string memory) {
		return message;
	}
}


