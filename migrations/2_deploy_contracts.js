const fs = require("fs");
const Musicosmos = artifacts.require("Musicosmos");

module.exports = async function (deployer) {
	await deployer.deploy(Musicosmos);
	const msc = await Musicosmos.deployed();

	let config = `const contractAddress = "${msc.address}";\nexport default contractAddress;`;

	let data = JSON.stringify(config);

	fs.writeFile("./src/config/address.js", JSON.parse(data), (err) => {
		if (err) {
			console.log("Error writing config.js:", err.message);
		}
	});
};
