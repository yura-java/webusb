function rerenderList(devices) {
	let list = document.getElementById('devices_list')
	removeChildren(list)
	for (const device of Object.values(devices)) {
		let deviceNode = document.createElement('li')
		deviceNode.innerHTML = "<b>Device:</b> " + device.manufacturerName + " " + device.productName;
		list.appendChild(deviceNode)
	}
}

function removeChildren(node) {
	while (node.firstChild) {
	    node.removeChild(node.firstChild);
	}
	
}

document.addEventListener('DOMContentLoaded', event => {
	let button = document.getElementById('connect')

	let devices = {}
	
	button.addEventListener('click', async() => {
		console.log("click")
		
		navigator.usb.requestDevice({filters:[]}).then(device => {
			console.log(device);
			
			let deviceId = [ device.manufacturerName, device.productId, device.productName, device.serialNumber, device.vendorId ];
			devices[deviceId] = device;
			
			rerenderList(devices);
		});
	})
})