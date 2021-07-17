
let Provider;

function loadMetamask() {
	if (window.ethereum) {
		Provider = window.ethereum
	} else {
		console.log('No ethereum browser. Install Metamask!')
	}
}

async function loadAccount() {
	const accounts = await Provider.request({
		method: 'eth_requestAccounts',
	})
	console.log(accounts[0])
}

async function loadContract() {
	const TaskContract =  await fetch('TaskContract.json')
	const taskContractJSON = await TaskContract.json()

	const contract = TruffleContract(taskContractJSON)
	contract.setProvider(Provider)

	const instaceContract =  await contract.deployed()
	const message = await instaceContract.getMessage()
	console.log(message)

	const h1 = document.querySelector('#message')
	h1.innerHTML = message;
	
}

loadMetamask()
loadAccount()
loadContract()
